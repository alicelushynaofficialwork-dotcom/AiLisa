import { NextResponse } from "next/server";
import OpenAI from "openai";

import { createClient } from "@/lib/supabase/server";

export const runtime = "nodejs";

type TranslateRequest = {
  entryId?: unknown;
};

export async function POST(request: Request) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        {
          error:
            "На сервере не найден OPENAI_API_KEY. Проверь файл .env.local.",
        },
        { status: 500 }
      );
    }

    const body = (await request
      .json()
      .catch(() => null)) as TranslateRequest | null;

    const entryId =
      typeof body?.entryId === "string"
        ? body.entryId.trim()
        : "";

    if (!entryId) {
      return NextResponse.json(
        { error: "Не передан идентификатор записи." },
        { status: 400 }
      );
    }

    const supabase = await createClient();

    // Проверяем пользователя, который отправил запрос.
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      return NextResponse.json(
        { error: "Пользователь не авторизован." },
        { status: 401 }
      );
    }

    // Получаем только запись текущего пользователя.
    const { data: entry, error: entryError } = await supabase
      .from("journal_entries")
      .select("id, text_ru, text_en")
      .eq("id", entryId)
      .eq("user_id", user.id)
      .single();

    if (entryError || !entry) {
      return NextResponse.json(
        { error: "Запись не найдена или недоступна." },
        { status: 404 }
      );
    }

    const russianText = entry.text_ru?.trim();

    if (!russianText) {
      return NextResponse.json(
        { error: "В записи нет русского текста." },
        { status: 400 }
      );
    }

    // Не тратим повторный API-запрос, если перевод уже существует.
    if (entry.text_en?.trim()) {
      return NextResponse.json({
        translation: entry.text_en,
        alreadyTranslated: true,
      });
    }

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const response = await openai.responses.create({
      model: "gpt-5-mini",

      instructions: [
        "Translate the user's Russian diary entry into natural English.",
        "Preserve the original meaning, emotional tone, and paragraph breaks.",
        "Do not add explanations, comments, headings, labels, or quotation marks.",
        "Return only the English translation.",
      ].join(" "),

      input: russianText,
      max_output_tokens: 1500,
    });

    const translation = response.output_text?.trim();

    if (!translation) {
      return NextResponse.json(
        { error: "AI не вернул перевод." },
        { status: 502 }
      );
    }

    // Сохраняем английский перевод в эту же запись.
    const {
      data: updatedEntry,
      error: updateError,
    } = await supabase
      .from("journal_entries")
      .update({
        text_en: translation,
      })
      .eq("id", entry.id)
      .eq("user_id", user.id)
      .select("id")
      .single();

    if (updateError || !updatedEntry) {
      console.error(
        "Ошибка сохранения перевода:",
        updateError
      );

      return NextResponse.json(
        {
          error:
            "Перевод создан, но его не удалось сохранить в Supabase.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      translation,
      alreadyTranslated: false,
    });
  } catch (error) {
    console.error("Ошибка AI-перевода:", error);

    const message =
      error instanceof Error
        ? error.message
        : "Неизвестная ошибка";

    return NextResponse.json(
      {
        error: `Не удалось выполнить перевод: ${message}`,
      },
      { status: 500 }
    );
  }
}
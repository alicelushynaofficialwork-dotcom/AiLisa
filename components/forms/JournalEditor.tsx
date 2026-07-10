"use client";

import { useState } from "react";
import { Mic, Wand2 } from "lucide-react";

import { MoodSelector } from "@/components/forms/MoodSelector";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Buttons";
import { createClient } from "@/lib/supabase/client";

type MessageState = {
  type: "success" | "error" | "info";
  text: string;
} | null;

type TranslationResponse = {
  translation?: string;
  error?: string;
  alreadyTranslated?: boolean;
};

const supabase = createClient();

export function JournalEditor() {
  const [text, setText] = useState("");
  const [translation, setTranslation] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<MessageState>(null);

  async function handleSave() {
    const cleanText = text.trim();

    if (!cleanText) {
      setMessage({
        type: "error",
        text: "Сначала напиши несколько слов о своём дне.",
      });

      return;
    }

    setIsSaving(true);
    setMessage(null);
    setTranslation(null);

    let russianEntrySaved = false;

    try {
      const {
        data: { user },
        error: getUserError,
      } = await supabase.auth.getUser();

      if (getUserError) {
        console.warn("Не удалось проверить пользователя:", getUserError);
      }

      let currentUser = user;

      if (!currentUser) {
        const { data: anonymousData, error: anonymousError } =
          await supabase.auth.signInAnonymously();

        if (anonymousError) {
          throw anonymousError;
        }

        currentUser = anonymousData.user;
      }

      if (!currentUser) {
        throw new Error("Не удалось создать пользователя.");
      }

      /*
       * Сначала сохраняем русский текст.
       * select("id") возвращает идентификатор созданной записи.
       */
      const { data: savedEntry, error: insertError } = await supabase
        .from("journal_entries")
        .insert({
          user_id: currentUser.id,
          text_ru: cleanText,
        })
        .select("id")
        .single();

      if (insertError) {
        throw insertError;
      }

      if (!savedEntry?.id) {
        throw new Error("Запись сохранена, но не получен её идентификатор.");
      }

      russianEntrySaved = true;
      setText("");

      setMessage({
        type: "info",
        text: "Русский текст сохранён. AiLisa создаёт английский перевод...",
      });

      /*
       * Передаём серверу только ID записи.
       * Сервер самостоятельно получает русский текст из Supabase.
       */
      const response = await fetch("/api/journal/translate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          entryId: savedEntry.id,
        }),
      });

      const result = (await response
        .json()
        .catch(() => null)) as TranslationResponse | null;

      if (!response.ok) {
        throw new Error(
          result?.error ??
            `Сервер перевода ответил с кодом ${response.status}.`,
        );
      }

      if (!result?.translation) {
        throw new Error("AI не вернул английский перевод.");
      }

      setTranslation(result.translation);

      setMessage({
        type: "success",
        text: result.alreadyTranslated
          ? "Запись уже была переведена."
          : "Русский текст и английский перевод сохранены.",
      });
    } catch (error) {
      console.error("Ошибка сохранения или перевода:", error);

      const errorMessage =
        error instanceof Error ? error.message : "Неизвестная ошибка";

      setMessage({
        type: "error",
        text: russianEntrySaved
          ? `Русский текст сохранён, но перевод пока не создан: ${errorMessage}`
          : `Не удалось сохранить запись: ${errorMessage}`,
      });
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <section className="rounded-[32px] bg-white p-6 shadow-sm sm:p-8">
      <p className="text-sm text-muted">Сегодня</p>

      <h2 className="mt-2 text-2xl font-semibold">Расскажи о своём дне</h2>

      <p className="mt-2 text-sm leading-6 text-muted">
        Пиши по-русски. AiLisa сохранит оригинал и создаст естественный
        английский перевод.
      </p>

      <div className="mt-6">
        <MoodSelector />
      </div>

      <textarea
        value={text}
        onChange={(event) => {
          setText(event.target.value);
          setMessage(null);
          setTranslation(null);
        }}
        placeholder="Сегодня я думаю о..."
        rows={8}
        maxLength={5000}
        disabled={isSaving}
        className="mt-6 w-full resize-none rounded-[24px] border border-black/10 bg-white p-5 text-base leading-7 outline-none transition focus:border-emerald-600 disabled:cursor-not-allowed disabled:opacity-60"
      />

      <div className="mt-2 text-right text-xs text-muted">
        {text.length} / 5000
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <SecondaryButton type="button" disabled>
          <Mic className="h-4 w-4" aria-hidden="true" />
          Голосовой ввод
        </SecondaryButton>

        <PrimaryButton type="button" onClick={handleSave} disabled={isSaving}>
          {isSaving ? "Сохраняем и переводим..." : "Сохранить и перевести"}
        </PrimaryButton>

        <SecondaryButton type="button" disabled>
          <Wand2 className="h-4 w-4" aria-hidden="true" />
          AI-перевод
        </SecondaryButton>
      </div>

      {message && (
        <p
          className={`mt-5 rounded-2xl p-4 text-sm ${
            message.type === "success"
              ? "bg-emerald-50 text-emerald-700"
              : message.type === "info"
                ? "bg-blue-50 text-blue-700"
                : "bg-red-50 text-red-700"
          }`}
        >
          {message.text}
        </p>
      )}

      {translation && (
        <div className="mt-6 rounded-[24px] bg-emerald-50 p-5">
          <div className="flex items-center gap-2">
            <Wand2 className="h-4 w-4 text-emerald-700" aria-hidden="true" />

            <h3 className="font-semibold text-emerald-900">
              Английский перевод
            </h3>
          </div>

          <p className="mt-3 whitespace-pre-wrap text-sm leading-7 text-emerald-950">
            {translation}
          </p>
        </div>
      )}
    </section>
  );
}

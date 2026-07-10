"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft, BookOpen } from "lucide-react";

import { createClient } from "@/lib/supabase/client";

type JournalEntry = {
  id: string;
  text_ru: string;
  text_en: string | null;
  created_at: string;
};

const supabase = createClient();

function formatEntryDate(date: string) {
  return new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date));
}

export function JournalHistoryView() {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadEntries() {
      setIsLoading(true);
      setErrorMessage(null);

      try {
        const {
          data: { user },
          error: userError,
        } = await supabase.auth.getUser();

        if (userError || !user) {
          if (isMounted) {
            setEntries([]);
            setIsLoading(false);
          }

          return;
        }

        const { data, error } = await supabase
          .from("journal_entries")
          .select("id, text_ru, text_en, created_at")
          .eq("user_id", user.id)
          .order("created_at", { ascending: false });

        if (!isMounted) {
          return;
        }

        if (error) {
          throw error;
        }

        setEntries((data ?? []) as JournalEntry[]);
      } catch (error) {
        console.error("Ошибка загрузки истории:", error);

        if (isMounted) {
          setErrorMessage(
            error instanceof Error ? error.message : "Неизвестная ошибка",
          );
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadEntries();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <main className="mx-auto w-full max-w-5xl space-y-6">
      <section className="rounded-[32px] bg-white p-6 shadow-sm sm:p-8">
        <Link
          href="/journal"
          className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-emerald-700"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Вернуться в дневник
        </Link>

        <div className="mt-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50">
            <BookOpen className="h-6 w-6 text-emerald-700" aria-hidden="true" />
          </div>

          <div>
            <p className="text-sm text-muted">Личный дневник</p>

            <h1 className="text-3xl font-semibold">История записей</h1>
          </div>
        </div>

        <p className="mt-4 text-sm leading-6 text-muted">
          Здесь хранятся твои записи на русском языке. Английский перевод
          подключим позже.
        </p>
      </section>

      {isLoading && (
        <section className="rounded-[32px] bg-white p-8 shadow-sm">
          <p className="text-muted">Загружаем записи...</p>
        </section>
      )}

      {!isLoading && errorMessage && (
        <section className="rounded-[32px] bg-red-50 p-6">
          <h2 className="font-semibold text-red-700">
            Не удалось загрузить историю
          </h2>

          <p className="mt-2 text-sm text-red-700">{errorMessage}</p>
        </section>
      )}

      {!isLoading && !errorMessage && entries.length === 0 && (
        <section className="rounded-[32px] bg-white p-8 text-center shadow-sm">
          <BookOpen className="mx-auto h-8 w-8 text-muted" aria-hidden="true" />

          <h2 className="mt-4 text-xl font-semibold">Записей пока нет</h2>

          <p className="mt-2 text-sm text-muted">
            Напиши первую запись в дневнике, и она появится здесь.
          </p>

          <Link
            href="/journal"
            className="mt-5 inline-flex rounded-full bg-emerald-700 px-5 py-3 text-sm font-medium text-white transition hover:bg-emerald-800"
          >
            Написать день
          </Link>
        </section>
      )}

      {!isLoading &&
        !errorMessage &&
        entries.map((entry) => (
          <article
            key={entry.id}
            className="rounded-[32px] bg-white p-6 shadow-sm sm:p-8"
          >
            <time dateTime={entry.created_at} className="text-sm text-muted">
              {formatEntryDate(entry.created_at)}
            </time>

            <h2 className="mt-4 text-sm font-semibold uppercase tracking-wide text-emerald-700">
              Моя запись
            </h2>

            <p className="mt-3 whitespace-pre-wrap text-base leading-7">
              {entry.text_ru}
            </p>

            {entry.text_en && (
              <div className="mt-6 rounded-[24px] bg-emerald-50 p-5">
                <h3 className="font-semibold">Английский перевод</h3>

                <p className="mt-3 whitespace-pre-wrap text-sm leading-6">
                  {entry.text_en}
                </p>
              </div>
            )}
          </article>
        ))}
    </main>
  );
}

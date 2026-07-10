export const dynamic = "force-dynamic";

export default async function SupabaseTestPage() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return (
      <main className="min-h-screen p-10">
        <h1 className="text-2xl font-semibold text-red-600">
          Ошибка конфигурации
        </h1>

        <p className="mt-4">
          Не найдены переменные Supabase в файле .env.local
        </p>
      </main>
    );
  }

  const controller = new AbortController();

  const timeoutId = setTimeout(() => {
    controller.abort();
  }, 8000);

  try {
    const response = await fetch(`${supabaseUrl}/auth/v1/health`, {
      headers: {
        apikey: supabaseKey,
      },
      cache: "no-store",
      signal: controller.signal,
    });

    if (!response.ok) {
      return (
        <main className="min-h-screen p-10">
          <h1 className="text-2xl font-semibold text-red-600">
            Supabase отвечает с ошибкой
          </h1>

          <p className="mt-4">Код ответа: {response.status}</p>

          <p className="mt-2">Проверь Project URL и Publishable key.</p>
        </main>
      );
    }

    return (
      <main className="min-h-screen p-10">
        <h1 className="text-3xl font-semibold text-emerald-700">
          Supabase подключён
        </h1>

        <p className="mt-4">AiLisa успешно получила ответ от Supabase.</p>
      </main>
    );
  } catch (error) {
    const message =
      error instanceof Error && error.name === "AbortError"
        ? "Supabase не ответил за 8 секунд. Проверь интернет, VPN и Project URL."
        : error instanceof Error
          ? error.message
          : "Неизвестная ошибка";

    return (
      <main className="min-h-screen p-10">
        <h1 className="text-2xl font-semibold text-red-600">
          Не удалось подключиться к Supabase
        </h1>

        <p className="mt-4">{message}</p>
      </main>
    );
  } finally {
    clearTimeout(timeoutId);
  }
}

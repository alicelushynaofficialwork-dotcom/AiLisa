import { JournalEditor } from "@/components/forms/JournalEditor";
import { VocabularyCard } from "@/components/cards/VocabularyCard";
import { journalEntries, vocabulary } from "@/data/mockData";

export function JournalView() {
  return (
    <div className="space-y-7">
      <JournalEditor />
      <section className="card p-6 md:p-7">
        <h2 className="font-display text-3xl font-semibold">Новые слова из твоего дня</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {vocabulary.map((word) => (
            <VocabularyCard key={word.word} word={word} />
          ))}
        </div>
      </section>
      <section className="grid gap-4 md:grid-cols-2">
        {journalEntries.map((entry) => (
          <article key={entry.title} className="card p-6">
            <p className="text-sm text-muted">{entry.date}</p>
            <h3 className="mt-2 font-display text-2xl font-semibold">{entry.title}</h3>
            <p className="mt-4 text-sm leading-6 text-muted">{entry.text}</p>
            <p className="mt-4 rounded-2xl bg-sage-light/60 p-4 text-sm leading-6 text-graphite">{entry.english}</p>
          </article>
        ))}
      </section>
    </div>
  );
}

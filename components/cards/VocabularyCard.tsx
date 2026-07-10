import { Bookmark } from "lucide-react";
import type { VocabularyWord } from "@/data/mockData";
import { SecondaryButton } from "@/components/ui/Buttons";

export function VocabularyCard({ word }: { word: VocabularyWord }) {
  return (
    <article className="rounded-[24px] border border-graphite/10 bg-white/70 p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">{word.word}</h3>
          <p className="mt-1 text-sm text-muted">{word.translation}</p>
        </div>
        <SecondaryButton aria-label={`Сохранить слово ${word.word}`} className="h-10 min-h-10 w-10 px-0">
          <Bookmark className="h-4 w-4" aria-hidden="true" />
        </SecondaryButton>
      </div>
      <p className="mt-4 text-sm leading-6 text-muted">{word.note}</p>
    </article>
  );
}

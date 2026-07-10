import {
  BookOpen,
  BriefcaseBusiness,
  Compass,
  Heart,
  MessageCircle,
  Mic,
  PenLine,
  Sparkles,
  Sprout,
  UserRound
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type UserProfile = {
  name: string;
  greeting: string;
  practiceDays: number;
  avatarInitials: string;
  level: string;
};

export type Stat = {
  label: string;
  value: string;
  tone: "sage" | "blush" | "gold";
};

export type WeeklyActivity = {
  day: string;
  minutes: number;
};

export type VocabularyWord = {
  word: string;
  translation: string;
  note: string;
};

export type SpeakingTopic = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Companion = {
  name: string;
  role: string;
  tone: "sage" | "blush";
};

export const navItems: NavItem[] = [
  { label: "Главная", href: "/", icon: Sprout },
  { label: "Дневник", href: "/journal", icon: PenLine },
  { label: "Речь", href: "/speaking", icon: Mic },
  { label: "Рост", href: "/growth", icon: Sparkles },
  { label: "Профиль", href: "/profile", icon: UserRound }
];

export const user: UserProfile = {
  name: "Алиса",
  greeting: "Добрый день",
  practiceDays: 12,
  avatarInitials: "А",
  level: "Gentle B1"
};

export const dashboardStats: Stat[] = [
  { label: "Ритм роста", value: "5 дней", tone: "sage" },
  { label: "Практика", value: "42 мин", tone: "blush" },
  { label: "Новые слова", value: "31", tone: "gold" }
];

export const weeklyActivity: WeeklyActivity[] = [
  { day: "Пн", minutes: 7 },
  { day: "Вт", minutes: 11 },
  { day: "Ср", minutes: 4 },
  { day: "Чт", minutes: 9 },
  { day: "Пт", minutes: 0 },
  { day: "Сб", minutes: 6 },
  { day: "Вс", minutes: 5 }
];

export const vocabulary: VocabularyWord[] = [
  { word: "peaceful", translation: "спокойный", note: "О состоянии без внутреннего напряжения." },
  { word: "overwhelmed", translation: "перегруженный", note: "Когда чувств или задач слишком много." },
  { word: "meaningful", translation: "значимый", note: "То, что имеет личную ценность." },
  { word: "take a break", translation: "сделать паузу", note: "Мягкая фраза для отдыха без вины." }
];

export const speakingTopics: SpeakingTopic[] = [
  { title: "Мой день", description: "Расскажи о событиях спокойно и естественно.", icon: BookOpen },
  { title: "Мечты и цели", description: "Подбери слова для того, что важно.", icon: Sparkles },
  { title: "Работа и профессии", description: "Практикуй карьерные и рабочие темы.", icon: BriefcaseBusiness },
  { title: "Отношения", description: "Говори о людях бережно и точно.", icon: Heart },
  { title: "Путешествия", description: "Собери уверенность для поездок.", icon: Compass },
  { title: "Свободная беседа", description: "Lisa мягко поддержит любой разговор.", icon: MessageCircle }
];

export const companions: Companion[] = [
  { name: "Lisa", role: "мягкий и поддерживающий собеседник", tone: "sage" },
  { name: "Teddy", role: "любознательный собеседник, который задаёт вопросы", tone: "blush" }
];

export const achievements = [
  "Ты впервые говорила на английском больше пяти минут без остановки.",
  "Ты сохранила 18 новых слов за неделю.",
  "Ты завершила тему о мечтах и целях."
];

export const journalEntries = [
  {
    date: "Сегодня",
    title: "Тихое утро и важная встреча",
    text: "Я хочу рассказать о дне спокойнее и увереннее.",
    english: "I want to speak about my day with more calm and confidence."
  },
  {
    date: "Вчера",
    title: "Небольшой шаг",
    text: "Я написала короткую мысль и не остановилась на ошибках.",
    english: "I wrote a small thought and did not stop because of mistakes."
  }
];

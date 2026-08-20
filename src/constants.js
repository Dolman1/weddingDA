export const WEDDING_AT = new Date("2027-04-30T17:00:00+03:00");

export const ADDRESS =
  "Оранжерея на Гребном, остров Печёрские Пески, Нижний Новгород";

export const TELEGRAM_NICKNAME = "ssb_1107";

export const TELEGRAM_MESSAGE = [
  "Привет, Свет.",
  "",
  "По свадьбе Даниила и Арины 30.04.2027 есть идея...",
].join("\n");

export const TELEGRAM_URL = `https://t.me/${TELEGRAM_NICKNAME}?text=${encodeURIComponent(TELEGRAM_MESSAGE)}`;

export const easeOut = [0.25, 0.46, 0.45, 0.94];

export const sectionIds = [
  "hero",
  "details",
  "schedule",
  "dresscode",
  "wishes",
  "map",
  "contacts",
];

export const sectionLabels = [
  "Главная",
  "Детали",
  "Программа",
  "Дресс-код",
  "Подарки",
  "Карта",
  "Контакты",
];

export const schedule = [
  { time: "17:00", title: "Сбор гостей", desc: "Welcome-зона, лёгкие закуски и напитки" },
  { time: "17:30", title: "Церемония", desc: "Торжественная выездная регистрация" },
  { time: "18:00", title: "Фуршет", desc: "Поздравления, общение и коктейли" },
  { time: "19:00", title: "Банкет", desc: "Праздничный ужин, тосты и первый танец" },
  { time: "21:00", title: "Вечерняя программа", desc: "Музыка, танцы, торт и сюрпризы" },
  { time: "23:00", title: "Завершение", desc: "Финальный танец и прощание" },
];

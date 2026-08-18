export const WEDDING_AT = new Date("2027-04-30T17:00:00+03:00");

export const ADDRESS =
  "остров Печёрские Пески, Набережная Гребного канала, д. 109, Нижний Новгород";

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

export const googleCalUrl =
  "https://calendar.google.com/calendar/render?action=TEMPLATE" +
  `&text=${encodeURIComponent("Свадьба Даниила и Арины")}` +
  "&dates=20270430T140000Z/20270430T200000Z" +
  `&location=${encodeURIComponent(ADDRESS)}` +
  `&details=${encodeURIComponent("Сбор гостей в 17:00")}`;

export function downloadIcs() {
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//DA Wedding//RU",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    "DTSTART;TZID=Europe/Moscow:20270430T170000",
    "DTEND;TZID=Europe/Moscow:20270430T230000",
    "SUMMARY:Свадьба Даниила и Арины",
    `LOCATION:${ADDRESS}`,
    "DESCRIPTION:Сбор гостей в 17:00",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "svadba-daniil-arina.ics";
  a.click();
  URL.revokeObjectURL(url);
}

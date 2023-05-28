export const isToday = (date: Date) => {
  return date.getDate() === new Date().getDate();
};

export const isThisWeek = (date: Date) => {
  return date.getDate() > new Date().getDate() && date.getDate() < (new Date().getDate() + 7);
};

export const isFarAway = (date: Date) => {
  return !(isToday(date) || isThisWeek(date));
};

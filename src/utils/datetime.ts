export const isToday = (date: Date) => {
  return date === new Date();
};

export const isThisWeek = (date: Date) => {
  const currentDate = new Date();
  const datePlusSeven = new Date(currentDate.setDate(currentDate.getDate() + 7));
  return date > new Date() && date < datePlusSeven;
};

export const isFarAway = (date: Date) => {
  return !(isToday(date) || isThisWeek(date));
};

export const isPassed = (date: Date) => {
  return (date < new Date());
};

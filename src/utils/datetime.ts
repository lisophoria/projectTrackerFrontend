const clearTime = (date: Date) => {
  return date.setHours(0, 0, 0, 0);
};

export const isToday = (date: Date) => {
  return clearTime(date) === clearTime(new Date());
};

export const isThisWeek = (date: Date) => {
  const currentDate = new Date();
  const datePlusSeven = new Date(currentDate.setDate(currentDate.getDate() + 7));
  return clearTime(date) > clearTime(new Date()) && clearTime(date) < clearTime(datePlusSeven);
};

export const isFarAway = (date: Date) => {
  return !(date <= new Date() || isThisWeek(date));
};

export const isPassed = (date: Date) => {
  return (date < new Date());
};

const formatYearsMonths = (years: number, months: number) => {
  let result = ``;

  if (years) {
    if (years > 4) {
      result = `${years} лет`;
    } else {
      result = years > 1 ? `${years} года` : `${years} год`;
    }
  }

  if (months) {
    result += result ? ` ` : ``;
    if (months > 1) {
      result += months > 4 ? `${months} месяцев` : `${months} месяца`;
    } else {
      result += `${months} месяц`;
    }
  }

  return result;
};

const formatFromMonth = (num: number): string => {
  const years = Math.floor(num / 12);
  const months = num - (Math.floor(num / 12) * 12);
  return formatYearsMonths(years, months);
};

const formatDummy = (num: number): string => {
  return String(num);
};

const formatPrice = (price: number): string => {
  let result = ``;
  const s = String(price);

  if (s.length > 3) {
    for (let i = 1; i <= Math.floor(s.length / 3); i++) {
      result = `${s.slice(s.length - i * 3, (s.length - i * 3) + 3)} ${result}`;
    }
    result = s.length % 3 ? s.slice(0, s.length % 3) + ` ` + result : result;
  } else {
    result = s;
  }

  return result;
};

export {formatPrice, formatFromMonth, formatDummy};

export const formatTime = (hours: number, minutes: number) => {
  return `${hours % 12}:${minutes.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  })} ${hours > 12 ? "PM" : "AM"}`;
};

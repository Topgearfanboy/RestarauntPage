export const formatLink = (Address: string) => {
  return `http://maps.google.com/maps?q=${Address.replaceAll(" ", "+")}`;
};

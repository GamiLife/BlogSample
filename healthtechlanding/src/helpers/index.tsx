export const validClassName = (className: string) => {
  const isInvalid = className.includes('undefined');

  return isInvalid ? '' : className;
};

export const getBotUrlSender = (phone: string, message: string) => {
  const link = `https://wa.me/${phone}?text=${message}`;

  return link;
};

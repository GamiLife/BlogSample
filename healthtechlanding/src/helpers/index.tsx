export const validClassName = (className: string) => {
  const isInvalid = className.includes('undefined');

  return isInvalid ? '' : className;
};

export const validClassName = (className: string) => {
  const isInvalid = ['undefined', 'null'].includes(className);

  return isInvalid ? '' : className;
};

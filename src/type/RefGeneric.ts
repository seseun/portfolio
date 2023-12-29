type RefGeneric<T extends Record<string, unknown>> = {
  [key in keyof T]: React.RefObject<HTMLDivElement>;
};
export default RefGeneric;

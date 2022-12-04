declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module 'debounce' {
  export default (cb: Function, debounce?: number, maxWait?: number) => () => {};
};

import React from "react";

const withDefaultValue = <K,>(Component: React.ComponentType<K>) => {
  function res(): (p: K) => JSX.Element;
  function res<
    N extends K,
    T extends keyof N,
    P extends Omit<N, T> & Partial<Pick<N, T>> // make provided default props optional
  >(key: T, value: N[T]): ReturnType<typeof withDefaultValue<P>>;
  function res<N extends K, T extends keyof N>(...args: [T, N[T]] | []) {
    if (args.length === 2) {
      type Y = Omit<N, T> & Partial<Pick<N, T>>;
      const NewComponent = (props: Y) => {
        const [key, value] = args;
        // add a default prop is one does not exist
        if (!props?.[key]) {
          props[key] = value;
        }
        // @ts-ignore
        return <Component {...props} />;
      };
      return withDefaultValue(NewComponent);
    } else {
      return Component;
    }
  }
  return res;
};

export default withDefaultValue;

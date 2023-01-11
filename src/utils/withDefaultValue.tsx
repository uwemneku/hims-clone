import React from "react";

const withDefaultValue = <K, L extends keyof K, T extends L>(
  Component: React.ComponentType<K>,
  ...g: Record<T, K[T]>[]
) => {
  // make provided default props optional
  type Y = Omit<K, T> & Partial<Pick<K, T>>;
  return ({ ...props }: Y) => {
    for (const item of g) {
      const [key, value] = Object.entries(item)[0] as [T, K[T]];
      if (props?.[key]) continue; //skip if value is provided
      props[key] = value;
    }
    // @ts-ignore
    return <Component {...props} />;
  };
};

export default withDefaultValue;

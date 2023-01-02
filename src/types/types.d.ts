type RemoveIndex<T> = {
  [K in keyof T as string extends K
    ? never
    : number extends K
    ? never
    : K]: T[K];
};

type PickFromComponentProps<
  T extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>,
  Y extends keyof import("react").ComponentProps<T>
> = Pick<import("react").ComponentProps<T>, Y>;

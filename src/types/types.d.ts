type RemoveIndex<T> = {
  [K in keyof T as string extends K
    ? never
    : number extends K
    ? never
    : K]: T[K];
};

type ExtractFormikTypes<T> = Partial<RemoveIndex<import("yup").InferType<T>>>;

type PickFromComponentProps<
  T extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>,
  Y extends keyof import("react").ComponentProps<T>
> = Pick<import("react").ComponentProps<T>, Y>;

type Root = import("./Navigation").RootStackParamList;
declare global {
  namespace ReactNavigation {
    interface RootParamList extends Root {}
  }
}
namespace ReactNavigation {
  interface RootParamList extends RootStackParamList {}
}

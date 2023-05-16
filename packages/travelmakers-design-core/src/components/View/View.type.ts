import {
  PolymorphicComponentProps,
  Tm,
  TmComponentProps,
  TmTheme,
} from "@travelmakers/styles";

export type ViewTm = Tm | Tm[];

interface _ViewProps extends Omit<TmComponentProps, "tm" | "overrideStyles"> {
  co?: ViewTm;
}

export type ViewProps<C extends React.ElementType> = PolymorphicComponentProps<
  C,
  _ViewProps
>;

type ViewComponent = <C extends React.ElementType = "div">(
  props: ViewProps<C>
) => React.ReactElement;

export function extractTm(tm: Tm, theme: TmTheme) {
  return typeof tm === "function" ? tm(theme) : tm;
}

export type ReturnType = ViewComponent & { displayName?: string };

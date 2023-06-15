import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { Props } from "./DateYear";
import useStyles from "./DateYear.style";

type DateYearStylesNames = ClassNames<typeof useStyles>;

interface SharedDateYearProps
  extends Props,
    TmComponentProps<DateYearStylesNames> {}

export type DateYearProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedDateYearProps>;

type DateYearComponent = <C extends React.ElementType = "div">(
  props: DateYearProps<C>
) => React.ReactElement;

export type ReturnType = DateYearComponent & {
  displayName?: string;
};

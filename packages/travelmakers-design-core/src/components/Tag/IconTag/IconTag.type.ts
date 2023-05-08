import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { Props } from "./IconTag";
import useStyles from "./IconTag.style";

type IconTagStylesNames = ClassNames<typeof useStyles>;

interface SharedIconTagProps
  extends Props,
    TmComponentProps<IconTagStylesNames> {}

export type IconTagProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedIconTagProps>;

export type IconTagComponent = <C extends React.ElementType = "div">(
  props: IconTagProps<C>
) => React.ReactElement;

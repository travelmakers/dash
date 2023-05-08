import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { Dispatch, SetStateAction } from "react";
import { Props } from "./SelectDropBox";
import useStyles from "./SelectDropBox.style";

type SelectDropBoxStylesNames = ClassNames<typeof useStyles>;

export type SelectDropBoxContextType = {
  setCurrentValue: Dispatch<SetStateAction<string>>;
  currentValue: Props["initValue"];
} & Pick<Props, "type" | "disabled" | "placeholder">;

interface SharedSelectDropBoxProps
  extends Props,
    TmComponentProps<SelectDropBoxStylesNames> {}

export type SelectDropBoxProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedSelectDropBoxProps>;

export type SelectDropBoxComponent = <C extends React.ElementType = "div">(
  props: SelectDropBoxProps<C>
) => React.ReactElement;

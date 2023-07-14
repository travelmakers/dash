import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { Dispatch, SetStateAction } from "react";
import { SelectDropBoxItem } from "../SelectDropBoxItem";
import { SelectDropBoxItems } from "../SelectDropBoxItems";
import { SelectDropBoxTrigger } from "../SelectDropBoxTrigger";
import { Props } from "./SelectDropBox";
import useStyles from "./SelectDropBox.style";

type SelectDropBoxStylesNames = ClassNames<typeof useStyles>;

export type SelectDropBoxContextType = {
  setCurrentValue: Dispatch<SetStateAction<string>>;
  currentValue: Props["initValue"];
} & Pick<Props, "type" | "disabled" | "placeholder" | "direction">;

export type SelectDropBoxDirection = "forward" | "reverse";

interface SharedSelectDropBoxProps
  extends Props,
    TmComponentProps<SelectDropBoxStylesNames> {}

export type SelectDropBoxProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedSelectDropBoxProps>;

type SelectDropBoxComponent = <C extends React.ElementType = "div">(
  props: SelectDropBoxProps<C>
) => React.ReactElement;

export type ReturnType = SelectDropBoxComponent & {
  displayName?: string;
  Trigger: typeof SelectDropBoxTrigger;
  Items: typeof SelectDropBoxItems;
  Item: typeof SelectDropBoxItem;
};

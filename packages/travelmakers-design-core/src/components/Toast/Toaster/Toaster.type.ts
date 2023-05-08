import { ClassNames, TmComponentProps } from "@travelmakers/styles";
import { Props } from "./Toaster";
import useStyles from "./Toaster.style";

type ToasterStylesNames = ClassNames<typeof useStyles>;

export type ToasterProps = Props & TmComponentProps<ToasterStylesNames>;

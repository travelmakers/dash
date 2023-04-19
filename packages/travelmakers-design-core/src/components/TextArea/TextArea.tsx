import { PolymorphicRef } from "@travelmakers-design-v2/styles";
import { forwardRef, useState } from "react";
import { View } from "../View";
import useStyles from "./TextArea.style";
import { TextAreaProps, TextAreaComponent } from "./TextArea.type";

export interface Props extends React.HTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  feedback?: string;
  value?: string;
  onChange?: () => void;
}

let defaultId = 0;

export const TextArea: TextAreaComponent & {
  displayName?: string;
} = forwardRef(
  <C extends React.ElementType = "textarea">(
    {
      label,
      feedback,
      value = "",
      onChange,
      className,
      ...props
    }: TextAreaProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const [textAreaValue, setTextAreaValue] = useState(value);
    const isFilled = textAreaValue;
    const { classes, cx } = useStyles({ isFilled });
    const [id] = useState(() => String(defaultId++));
    const elementId = `tm-textarea-${id}`;

    return (
      <div className={classes.root}>
        {label && (
          <label className={classes.label} htmlFor={elementId}>
            {label}
          </label>
        )}
        <View<React.ElementType>
          component={"textarea"}
          ref={ref}
          className={cx(classes.textArea, className)}
          value={textAreaValue}
          onChange={(e) => {
            setTextAreaValue(e.target.value);
            onChange && onChange();
          }}
          {...props}
        />
        {feedback && <strong className={classes.feedback}>{feedback}</strong>}
      </div>
    );
  }
);

TextArea.displayName = "TextArea";

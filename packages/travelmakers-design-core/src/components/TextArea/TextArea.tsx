import { PolymorphicRef } from "@travelmakers-design-v2/styles";
import { forwardRef, useState } from "react";
import { View } from "../View";
import useStyles from "./TextArea.style";
import { TextAreaComponent, TextAreaProps } from "./TextArea.type";

export interface Props extends React.HTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  feedback?: string;
}

let defaultId = 0;

export const TextArea: TextAreaComponent & {
  displayName?: string;
} = forwardRef(
  <C extends React.ElementType = "textarea">(
    {
      label,
      feedback,
      value,
      placeholder = "정보를 입력해주세요.",
      autoComplete,
      onChange,
      className,
      ...props
    }: TextAreaProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const [textAreaValue, setTextAreaValue] = useState(value ?? "");
    const isFilled = textAreaValue;
    const { classes, cx } = useStyles({ isFilled });
    const [id] = useState(() => String(defaultId++));
    const elementId = `tm-textarea-${id}`;

    const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setTextAreaValue(e.target.value);
      onChange && onChange(e);
    };

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
          placeholder={placeholder}
          autoComplete={autoComplete || "off"}
          onChange={onChangeHandler}
          aria-readonly={props.disabled}
          {...props}
        />
        {feedback && <strong className={classes.feedback}>{feedback}</strong>}
      </div>
    );
  }
);

TextArea.displayName = "TextArea";

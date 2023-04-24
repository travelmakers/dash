import { PolymorphicRef } from "@travelmakers-design-v2/styles";
import { forwardRef, useEffect, useState } from "react";
import { useId } from "../../../../travelmakers-design-hooks/src";
import { View } from "../View";
import useStyles from "./TextArea.style";
import { TextAreaComponent, TextAreaProps } from "./TextArea.type";

export interface Props extends React.HTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label?: string;
  feedback?: string;
}

export const TextArea: TextAreaComponent & {
  displayName?: string;
} = forwardRef(
  <C extends React.ElementType = "textarea">(
    {
      name,
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
    const id = useId(name);
    const [textAreaValue, setTextAreaValue] = useState(value ?? "");
    const isFilled = textAreaValue;
    const { classes, cx } = useStyles({ isFilled });

    useEffect(() => {
      if (name) return;

      console.error("The TextArea component requires a name prop to be used.");
    }, [name]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setTextAreaValue(e.target.value);
      onChange?.(e);
    };

    return (
      <div className={cx(classes.root, className)}>
        {label && (
          <label className={classes.label} htmlFor={id}>
            {label}
          </label>
        )}
        <View<React.ElementType>
          component={"textarea"}
          ref={ref}
          className={classes.textArea}
          name={name}
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

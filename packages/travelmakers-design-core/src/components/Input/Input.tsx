import { PolymorphicRef } from "@travelmakers-design-v2/styles";
import { forwardRef, useState } from "react";
import { View } from "../View";
import useStyles from "./Input.style";
import { InputProps, InputComponent } from "./Input.type";

export interface Props extends React.HTMLAttributes<HTMLInputElement> {
  label?: string;
  feedback?: string;
  subfix?: string | number;
  autoComplete?: HTMLInputElement["autocomplete"];
  isError?: boolean;
  onClick?: () => void;
  onBlur?: () => void;
}

let defaultId = 0;

export const Input: InputComponent & {
  displayName?: string;
} = forwardRef(
  <C extends React.ElementType = "input">(
    {
      label,
      placeholder = "정보를 입력해주세요.",
      feedback,
      subfix,
      isError = null,
      autoComplete = "off",
      onClick,
      onBlur,
      className,
      ...props
    }: InputProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles({ subfix, isError });
    const [isFocus, setIsFocus] = useState(false);
    const [id] = useState(() => String(defaultId++));
    const elementId = `tm-input-${id}`;

    const inputContent = () => {
      if (subfix) {
        return (
          <div
            className={cx(
              classes.container,
              isFocus && classes.focus,
              props.disabled && classes.disabled
            )}
          >
            <View<React.ElementType>
              component={"input"}
              className={classes.input}
              id={elementId}
              type={"text"}
              ref={ref}
              placeholder={placeholder}
              autoComplete={autoComplete}
              onClick={() => {
                setIsFocus(true);
                onClick && onClick();
              }}
              onBlur={() => {
                setIsFocus(false);
                onBlur && onBlur();
              }}
              {...props}
            />
            <div className={classes.subfix}>{subfix}</div>
          </div>
        );
      }

      return (
        <View<React.ElementType>
          component={"input"}
          className={cx(classes.input, classes.container)}
          id={elementId}
          type={"text"}
          ref={ref}
          placeholder={placeholder}
          autoComplete={autoComplete}
          onClick={onClick}
          onBlur={onBlur}
          {...props}
        />
      );
    };

    return (
      <div className={cx(classes.root, className)}>
        {label && (
          <label className={classes.label} htmlFor={elementId}>
            {label}
          </label>
        )}
        {inputContent()}
        {feedback && <strong className={classes.feedback}>{feedback}</strong>}
      </div>
    );
  }
);

Input.displayName = "Input";

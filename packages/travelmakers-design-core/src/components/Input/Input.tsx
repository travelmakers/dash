import { PolymorphicRef } from "@travelmakers-design-v2/styles";
import { forwardRef, useState } from "react";
import { View } from "../View";
import useStyles from "./Input.style";
import { InputComponent, InputProps } from "./Input.type";

export interface Props extends React.HTMLAttributes<HTMLInputElement> {
  label?: string;
  subfix?: string | number;
  feedback?: string;
  isError?: boolean;
}

let defaultId = 0;

export const Input: InputComponent & {
  displayName?: string;
} = forwardRef(
  <C extends React.ElementType = "input">(
    {
      label,
      subfix,
      feedback,
      isError = null,
      value,
      placeholder = "정보를 입력해주세요.",
      autoComplete,
      onClick,
      onBlur,
      onChange,
      className,
      ...props
    }: InputProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const [inputValue, setInputValue] = useState(value ?? "");
    const [isFocus, setIsFocus] = useState(false);
    const { classes, cx } = useStyles({ subfix, isError });
    const [id] = useState(() => String(defaultId++));
    const elementId = `tm-input-${id}`;

    const onClickHandler = (e: React.MouseEvent<HTMLInputElement>) => {
      setIsFocus(true);
      onClick?.(e);
    };

    const onBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocus(false);
      onBlur?.(e);
    };

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
      onChange?.(e);
    };

    const inputContent = () => {
      if (subfix) {
        return (
          <div
            className={cx(
              classes.container,
              { [classes.focus]: isFocus },
              { [classes.disabled]: props.disabled }
            )}
            aria-readonly={props.disabled}
          >
            <View<React.ElementType>
              component={"input"}
              className={classes.input}
              id={elementId}
              type={"text"}
              ref={ref}
              placeholder={placeholder}
              autoComplete={autoComplete ?? "off"}
              onClick={onClickHandler}
              onBlur={onBlurHandler}
              onChange={onChangeHandler}
              value={inputValue}
              {...props}
            />
            <div className={classes.subfix} aria-readonly={props.disabled}>
              {subfix}
            </div>
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
          autoComplete={autoComplete ?? "off"}
          onClick={onClick}
          onBlur={onBlur}
          onChange={onChangeHandler}
          value={inputValue}
          aria-readonly={props.disabled}
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

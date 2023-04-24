import { PolymorphicRef } from "@travelmakers-design-v2/styles";
import { forwardRef, useEffect, useState } from "react";
import { useId } from "../../../../travelmakers-design-hooks/src";
import { View } from "../View";
import useStyles from "./Input.style";
import { InputComponent, InputProps } from "./Input.type";

export interface Props extends React.HTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  subfix?: string | number;
  feedback?: string;
  isError?: boolean;
}

export const Input: InputComponent & {
  displayName?: string;
} = forwardRef(
  <C extends React.ElementType = "input">(
    {
      name,
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
    const id = useId(name);
    const [inputValue, setInputValue] = useState(value ?? "");
    const [isFocus, setIsFocus] = useState(false);
    const { classes, cx } = useStyles({ subfix, isError });

    useEffect(() => {
      if (name) return;

      console.error("The Input component requires a name prop to be used.");
    }, [name]);

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

    const InputContent = ({ subfix }) => {
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
              id={id}
              type={"text"}
              ref={ref}
              placeholder={placeholder}
              autoComplete={autoComplete ?? "off"}
              onClick={onClickHandler}
              onBlur={onBlurHandler}
              onChange={onChangeHandler}
              value={inputValue}
              name={name}
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
          id={id}
          type={"text"}
          ref={ref}
          placeholder={placeholder}
          autoComplete={autoComplete ?? "off"}
          onClick={onClick}
          onBlur={onBlur}
          onChange={onChangeHandler}
          value={inputValue}
          name={name}
          aria-readonly={props.disabled}
          {...props}
        />
      );
    };

    return (
      <div className={cx(classes.root, className)}>
        {label && (
          <label className={classes.label} htmlFor={id}>
            {label}
          </label>
        )}
        <InputContent subfix={subfix} />
        {feedback && <strong className={classes.feedback}>{feedback}</strong>}
      </div>
    );
  }
);

Input.displayName = "Input";

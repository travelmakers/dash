import { useId, useUpdateEffect } from "@travelmakers/hooks";
import { PolymorphicRef } from "@travelmakers/styles";
import React, { forwardRef, useEffect, useState } from "react";
import { View } from "../View";
import useStyles from "./Input.style";
import { InputProps, ReturnType } from "./Input.type";

export interface Props extends React.HTMLAttributes<HTMLInputElement> {
  name: string;
  label?: React.ReactNode;
  subfix?: string | number;
  feedback?: string;
  isError?: boolean;
  regCallback?: (v: string) => string;
}

export const Input = forwardRef(
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
      regCallback,
      ...props
    }: InputProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const id = useId(name);
    const [inputValue, setInputValue] = useState(value ?? "");
    const [isFocus, setIsFocus] = useState(false);
    const { classes, cx } = useStyles({ subfix, isError });
    const disabled = props.disabled || props.readOnly;
    const focused = isFocus && !disabled;

    useUpdateEffect(() => {
      setInputValue(value);
    }, [value]);

    useEffect(() => {
      if (name) return;

      console.error("The Input component requires a name prop to be used.");
    }, [name]);

    const onClickHandler = (e: React.MouseEvent<HTMLInputElement>) => {
      if (disabled) return;

      setIsFocus(true);
      onClick?.(e);
    };

    const onBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
      if (disabled) return;

      setIsFocus(false);
      onBlur?.(e);
    };

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;

      e.target.value = regCallback
        ? regCallback(e.target.value)
        : e.target.value;
      setInputValue(e.target.value);
      onChange?.(e);
    };

    const InputContent = (subfix) => {
      if (subfix) {
        return (
          <div
            className={cx(
              classes.container,
              { [classes.focus]: focused },
              { [classes.disabled]: disabled }
            )}
            aria-readonly={disabled}
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
            <div className={classes.subfix} aria-readonly={disabled}>
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
          aria-readonly={disabled}
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
        {InputContent(subfix)}
        {feedback && <strong className={classes.feedback}>{feedback}</strong>}
      </div>
    );
  }
) as unknown as ReturnType;

Input.displayName = "Input";

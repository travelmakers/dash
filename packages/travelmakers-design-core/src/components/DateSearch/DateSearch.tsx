import { PolymorphicRef } from "@travelmakers/styles";
import { sanitizeInput } from "@travelmakers/utils";
import React, { forwardRef, PropsWithChildren, useRef, useState } from "react";
import { Icon } from "../Icon";
import { View } from "../View";
import useStyles from "./DateSearch.style";
import { DateSearchProps, DateSearchType, ReturnType } from "./DateSearch.type";

export interface Props extends React.HTMLAttributes<HTMLInputElement> {
  type?: DateSearchType;
  formSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  formReset?: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const DateSearch = forwardRef(
  <C extends React.ElementType = "input">(
    {
      type = "fill",
      value,
      placeholder = "날짜검색",
      autoComplete,
      onClick,
      onChange,
      onBlur,
      onFocus,
      formSubmit,
      formReset,
      className,
      children,
      ...props
    }: PropsWithChildren<DateSearchProps<C>>,
    ref: PolymorphicRef<C>
  ) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const formRef = useRef<HTMLFormElement | null>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState<string>(value);
    const isFilled = value;
    const isVisibleResetBtn = !props.disabled && isFilled;
    const { classes, cx } = useStyles({ type, isFocused });

    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      formRef.current.reset();
      formSubmit?.(e);
    };

    const onResetHandler = (e: React.FormEvent<HTMLFormElement>) => {
      formReset?.(e);
      setInputValue("");
    };

    const onClickHandler = (e: React.MouseEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onClick?.(e);
    };

    const onBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
      if (!containerRef.current.contains(e.relatedTarget)) {
        setTimeout(() => {
          setIsFocused(false);
          onBlur?.(e);
        }, 10);
      }
    };

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!inputValue && e.target.value.replaceAll(" ", "").length === 0) {
        e.target.value = "";

        return;
      }

      e.target.value = sanitizeInput(e.target.value);
      setInputValue(sanitizeInput(e.target.value));
      onChange?.(e);
    };

    const onFocusHandler = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    return (
      <View<React.ElementType>
        component={"div"}
        ref={containerRef}
        tabIndex={props.tabIndex ?? "0"}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
      >
        <form
          ref={formRef}
          className={cx(
            classes.form,
            {
              [classes.disabled]: props.disabled,
            },
            className
          )}
          onSubmit={onSubmitHandler}
          onReset={onResetHandler}
        >
          <Icon src={"IcCalendar"} width={20} height={20} />
          <View<React.ElementType>
            component={"input"}
            type={"search"}
            ref={ref}
            className={cx(classes.input)}
            placeholder={placeholder}
            onClick={onClickHandler}
            onChange={onChangeHandler}
            value={inputValue}
            autoComplete={autoComplete ?? "off"}
            aria-readonly={props.disabled}
            {...props}
          />
          {isVisibleResetBtn && (
            <button
              type="reset"
              className={classes.reset}
              aria-label="검색 초기화"
            >
              <Icon src={"IcClose"} width={16} height={16} />
            </button>
          )}
        </form>
        {children}
      </View>
    );
  }
) as unknown as ReturnType;

DateSearch.displayName = "DateSearch";

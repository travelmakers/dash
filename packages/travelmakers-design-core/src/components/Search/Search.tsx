import { PolymorphicRef } from "@travelmakers/styles";
import { sanitizeInput } from "@travelmakers/utils";
import React, { forwardRef, useRef, useState } from "react";
import { Icon } from "../Icon";
import { View } from "../View";
import useStyles from "./Search.style";
import { ReturnType, SearchProps, SearchType } from "./Search.type";

export interface Props extends React.HTMLAttributes<HTMLInputElement> {
  type?: SearchType;
  formSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  formReset?: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const Search = forwardRef(
  <C extends React.ElementType = "input">(
    {
      type = "fill",
      value,
      placeholder = "호텔명, 지역명을 검색해주세요.",
      autoComplete,
      onClick,
      onChange,
      onBlur,
      onFocus,
      formSubmit,
      formReset,
      className,
      ...props
    }: SearchProps<C>,
    ref: PolymorphicRef<C>
  ) => {
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
      setIsFocused(false);
      onBlur?.(e);
    };

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value.replaceAll(" ", "").length === 0) {
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
        <Icon src={"IcSearch"} width={20} height={20} />
        <View<React.ElementType>
          component={"input"}
          type={"search"}
          ref={ref}
          className={cx(classes.input)}
          placeholder={placeholder}
          onClick={onClickHandler}
          onBlur={onBlurHandler}
          onChange={onChangeHandler}
          onFocus={onFocusHandler}
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
    );
  }
) as unknown as ReturnType;

Search.displayName = "Search";

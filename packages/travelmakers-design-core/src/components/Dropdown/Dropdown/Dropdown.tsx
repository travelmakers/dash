import { PolymorphicRef } from "@travelmakers/styles";
import React, {
  createContext,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";
import { View } from "../../View";
import { DropdownItem } from "../DropdownItem";
import { DropdownItems } from "../DropdownItems";
import { DropdownTrigger } from "../DropdownTrigger";
import {
  DropdownContextValue,
  DropdownProps,
  ReturnType,
} from "./Dropdown.type";

export interface Props {
  trigger: React.ReactNode;
  content: React.ReactNode;
}

export const DropdownContext =
  createContext<DropdownContextValue | undefined>(undefined);
DropdownContext.displayName = "DropdownContext";

export const Dropdown = forwardRef(
  <C extends React.ElementType = "div">(
    { trigger, content, className, ...props }: DropdownProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const divRef = useRef(ref || null);
    const [isToggle, setIsToggle] = useState(false);

    const onClickOutside = (e: MouseEvent) => {
      const el = divRef.current;
      if (!el || el.contains(e.target as Node)) return;

      setIsToggle(false);
    };

    useEffect(() => {
      document.addEventListener("click", onClickOutside);

      return () => document.removeEventListener("click", onClickOutside);
    }, []);

    return (
      <DropdownContext.Provider value={{ isToggle, setIsToggle }}>
        <View<React.ElementType>
          component={"div"}
          ref={divRef}
          className={className}
          {...props}
        >
          {trigger}
          {isToggle && content}
        </View>
      </DropdownContext.Provider>
    );
  }
) as unknown as ReturnType;

Dropdown.displayName = "Dropdown";
Dropdown.Trigger = DropdownTrigger;
Dropdown.Items = DropdownItems;
Dropdown.Item = DropdownItem;

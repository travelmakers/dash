import {
  ClassNames,
  PolymorphicComponentProps,
  PolymorphicRef,
  TmComponentProps,
  useTmTheme,
} from "@travelmakers-design-v2/styles";
import React, { forwardRef, useEffect, useState } from "react";

import { View } from "../View";
import useStyles from "./BottomBar.style";
import { IconHome, IconSearch, IconMypage } from "../../assets/icon";
import { Typography } from "../Typography";
import Link from "next/link";

export type BottomBarStylesNames = ClassNames<typeof useStyles>;

export interface SharedBottomBarProps
  extends TmComponentProps<BottomBarStylesNames> {
  /** BottomBar 컴포넌트의 초기 선택 값을 정합니다. */
  initSelectedId?: number;

  /** BottomBar 컴포넌트의 메뉴 이름 및 url을 설정합니다. */
  links: {
    name: string;
    url: string;
  }[];

  /** BottomBar 컴포넌트의 Click Event */
  onClick?: (menuId: number) => void;
}

export type BottomBarProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedBottomBarProps>;

type BottomBarComponent = <C extends React.ElementType = "div">(
  props: BottomBarProps<C>
) => React.ReactElement;

export const BottomBar: BottomBarComponent & { displayName?: string } =
  forwardRef(
    <C extends React.ElementType = "div">(
      {
        onClick,
        initSelectedId = 0,
        children,
        component,
        className,
        overrideStyles,
        links = [
          {
            name: "둘러보기",
            url: "/",
          },
          {
            name: "탐색",
            url: "/",
          },
          {
            name: "마이페이지",
            url: "/",
          },
        ],
        ...props
      }: BottomBarProps<C>,
      ref: PolymorphicRef<C>
    ) => {
      const theme = useTmTheme();
      const [selected, setSelected] = useState(initSelectedId);
      const [color1, setColor1] = useState(theme.colors.neutral70);
      const [color2, setColor2] = useState(theme.colors.neutral70);
      const [color3, setColor3] = useState(theme.colors.neutral70);
      const color = [color1, color2, color3];
      const setColor = [setColor1, setColor2, setColor3];
      const { classes, cx } = useStyles(
        {},
        { overrideStyles, name: "BottomBar" }
      );
      const menus = [
        {
          icon: (
            <IconHome
              color={selected === 0 ? theme.colors.secondary : color1}
            />
          ),
        },
        {
          icon: (
            <IconSearch
              color={selected === 1 ? theme.colors.secondary : color2}
            />
          ),
        },
        {
          icon: (
            <IconMypage
              color={selected === 2 ? theme.colors.secondary : color3}
            />
          ),
        },
      ];
      /**
       * ANCHOR: 메뉴 색상 변경
       * @param value
       * @param index
       */
      const changeColor = (value: string, index: number) => {
        if (index !== selected) {
          setColor[index](value);
        }
      };

      return (
        <View<React.ElementType>
          component={component || "div"}
          ref={ref}
          className={cx(classes.root, className)}
          {...props}
        >
          {menus?.map((menu, index) => (
            <Link
              onClick={() => {
                setSelected(index);
                onClick?.(index);
              }}
              href={links[index].url}
              className={cx(classes.item)}
              onMouseOver={() => changeColor(theme.colors.primary, index)}
              onMouseLeave={() => changeColor(theme.colors.neutral70, index)}
              onMouseDown={() =>
                changeColor(theme.colors.primaryInteract, index)
              }
              onMouseUp={() => changeColor(theme.colors.neutral70, index)}
            >
              {menu.icon}
              <Typography
                level="caption"
                color={
                  selected === index ? theme.colors.secondary : color[index]
                }
              >
                {links[index].name}
              </Typography>
            </Link>
          ))}
        </View>
      );
    }
  );

BottomBar.displayName = "BottomBar";
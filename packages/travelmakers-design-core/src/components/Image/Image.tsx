"use client";

import { PolymorphicRef } from "@travelmakers-design-v2/styles";
import { forwardRef, PropsWithChildren, useState } from "react";
import useStyles from "./Image.style";
import { ImageComponent, ImageProps } from "./Image.type";

export interface Props {
  /** true일 경우 lazy load가 적용됩니다. */
  lazy?: boolean;

  /** 이미지 src를 정합니다. */
  src: string;

  /** Image 컴포넌트의 너비를 정합니다. */
  width?: number | string;

  /** Image 컴포넌트의 높이를 정합니다. */
  height?: number | string;

  /** 이미지 설명을 추가합니다. */
  alt: string;
}

export const Image: ImageComponent & {
  displayName?: string;
} = forwardRef(
  <C extends React.ElementType = "img">(
    {
      lazy = true,
      src,
      alt,
      className,
      children,
      ...props
    }: PropsWithChildren<ImageProps<C>>,
    ref: PolymorphicRef<C>
  ) => {
    const [load, setLoad] = useState(false);
    const [error, setError] = useState(false);
    const { classes, cx } = useStyles({ load });

    return (
      <>
        <img
          ref={ref}
          src={src}
          alt={alt}
          loading={lazy ? "lazy" : "eager"}
          className={cx(className, !load && classes.loading)}
          onLoad={() => setLoad(true)}
          onError={(e) => {
            setLoad(true);
            setError(true);
            e.currentTarget.src = require("./img/error.png");
          }}
          {...props}
        />
        {!load && (
          <img
            src={
              "data:image/gif;base64, iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO8UA8AAiUBUcc3qzwAAAAASUVORK5CYII="
            }
            alt={alt}
            {...props}
          />
        )}
      </>
    );
  }
);

Image.displayName = "Image";

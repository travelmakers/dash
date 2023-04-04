import { PolymorphicRef } from "@travelmakers-design-v2/styles";
import React, { forwardRef, useState } from "react";
import useStyles from "./Image.style";
import { ImageComponent, ImageProps } from "./Image.type";

export interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** true일 경우 lazy load가 적용됩니다. */
  lazy?: boolean;

  /** 이미지 src를 정합니다. */
  src: string;

  /** 이미지 설명을 추가합니다. */
  alt: string;
}

export const Image: ImageComponent & {
  displayName?: string;
} = forwardRef(
  <C extends React.ElementType = "img">(
    { lazy = true, src, alt, className, ...props }: ImageProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const [load, setLoad] = useState(false);
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
            e.currentTarget.src = require("./img/error.png");
          }}
          {...props}
        />
        {!load && (
          <img
            loading={lazy ? "lazy" : "eager"}
            src={
              "data:image/gif;base64, iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO8UA8AAiUBUcc3qzwAAAAASUVORK5CYII="
            }
            {...props}
          />
        )}
      </>
    );
  }
);

Image.displayName = "Image";

import { PolymorphicRef } from "@travelmakers/styles";
import React, { forwardRef, useState } from "react";
import useStyles from "./Image.style";
import { ImageProps, ReturnType } from "./Image.type";
import NextImage from "next/image";

export interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** true일 경우 lazy load가 적용됩니다. */
  lazy?: boolean;

  /** 이미지 src를 정합니다. */
  src: string;

  /** 이미지 설명을 추가합니다. */
  alt: string;

  fill?: boolean;
}

export const Image = forwardRef(
  <C extends React.ElementType = "img">(
    { lazy = true, src, alt, fill, className, ...props }: ImageProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const [load, setLoad] = useState(false);
    const [error, setError] = useState(false);
    const { classes, cx } = useStyles({ load, error });

    return (
      <>
        <NextImage
          ref={ref}
          src={src}
          alt={alt}
          fill={fill}
          loading={lazy ? "lazy" : "eager"}
          decoding={lazy ? "async" : "auto"}
          className={cx(className, classes.image)}
          onLoad={() => setLoad(true)}
          onError={(e) => {
            setLoad(true);
            setError(true);
          }}
          {...props}
        />

        {/* NOTE: 로딩중... */}
        {!load && (
          <img
            className={cx(className, classes.loading)}
            src={
              "https://hotel-01.s3.ap-northeast-2.amazonaws.com/dash/Image/img/loading.png"
            }
            {...props}
          />
        )}

        {/* NOTE: 에러이미지... */}
        {error && (
          <img
            className={cx(className, classes.loading)}
            src={
              "https://hotel-01.s3.ap-northeast-2.amazonaws.com/dash/Image/img/error.png"
            }
            {...props}
          />
        )}
      </>
    );
  }
) as unknown as ReturnType;

Image.displayName = "Image";

import React, { PropsWithChildren } from "react";
import { createPortal } from "react-dom";

interface Props {
  target?: string;
}

/**
 * Modal & Popup 등 사용 시 원하는 DOM 위치로 이동시킵니다.
 * 기본적으로는 최상단의 <div id="modal"/>로 이동합니다.
 *
 * @component
 * @example
 * ```jsx
 * <ModalPortal target="custom-target">
 *   <Modal />
 * </ModalPortal>
 * ```
 * @see {@link https://react.dev/reference/react-dom/createPortal#usage}
 */
export const ModalPortal = ({
  target = "modal",
  children,
}: PropsWithChildren<Props>) => {
  const container = document.getElementById(target);
  return container ? createPortal(children, container) : null;
};

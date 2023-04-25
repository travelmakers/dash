import { useState } from "react";

let defaultId = 0;

export const useId = (idKey: string) => {
  const [_id] = useState(() => String(defaultId++));
  const id = `tm-${idKey}-${_id}`;

  return id;
};

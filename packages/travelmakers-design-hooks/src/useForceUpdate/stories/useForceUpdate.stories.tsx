import React from "react";
import { useForceUpdate } from "../useForceUpdate";

export default {
  title: "@travelmakers/hooks/useForceUpdate",
};

export const Default = () => {
  const forceUpdate = useForceUpdate();

  return (
    <div>
      {Math.random()}
      <button onClick={forceUpdate}>Update</button>
    </div>
  );
};

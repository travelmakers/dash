import useHiddenBodyOverflow from "../useHiddenBodyOverflow";

export default {
  title: "@travelmakers/hooks/useHiddenBodyOverflow",
};

export const Default = () => {
  useHiddenBodyOverflow(true);

  return (
    <div>
      <span>useHiddenBodyOverflow</span>
    </div>
  );
};

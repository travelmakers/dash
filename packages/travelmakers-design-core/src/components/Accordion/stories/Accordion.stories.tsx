import { Accordion } from "../Accordion";

export default {
  title: "@travelmakers-design-v2/core/General/Accordion",
  component: Accordion,
};

export const Default = () => {
  return (
    <div
      style={{ backgroundColor: "#EDEDED", padding: "30px 0", height: "75vh" }}
    >
      <Accordion />
      <Accordion type={"medium"} />
    </div>
  );
};

import { Meta } from "@storybook/react";
import { Accordion } from "../Accordion";

export default {
  title: "@travelmakers/core/General/Accoridion/Accordion",
  component: Accordion,
  argTypes: {
    type: {
      control: {
        type: "radio",
        options: ["small", "medium"],
        default: "small",
      },
      description: "Accordion의 사이즈를 정합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    gap: {
      description: "Accordion들의 간격을 조절합니다.",
      type: "number",
      defaultValue: 4,
      table: {
        type: {
          summary: "number",
        },
      },
    },
    items: {
      control: { type: "array" },
      description:
        "Accordion에 표시될 리스트 입니다. Accordion.Item를 사용합니다.",
      table: {
        type: {
          summary: "AccordionItem[]",
        },
      },
    },
  },
} as Meta;

const accordionData = [
  {
    id: 1,
    answer:
      "호텔에삶은 국내 최초 호텔 롱스테이 플랫폼입니다.\n롱스테이란 6박 이상 장기 거주하는 것을 의미하며 1주 살기부터 세 달 이상, 원하는 기간 동안 호텔에서 살아보실 수 있습니다.\n합리적인 가격의 3성급 호텔부터 5성급 프리미엄 호텔까지, 호텔에삶에서 즐겨보시기 바랍니다.",
    question: "호텔 롱스테이 플랫폼이 무엇인가요?",
  },
  {
    id: 2,
    answer:
      "첫 번째, 롱스테이를 위한 합리적인 가격입니다. 호텔과의 특별 계약을 통해 한 달 살기 기준, 국내 최저가로 예약하실 수 있습니다.\n두 번째, 보증금과 관리비가 없습니다. 호텔에삶은 고객과의 신뢰를 기반으로 하여 장기 거주임에도 보증금과 관리비를 받지 않고 장기 거주 상품을 제공하고 있습니다.\n세 번째, 호텔에삶 이용 고객에게만 제공하는 Only 혜택이 있습니다. 룸 업그레이드, 호텔에삶 고객 전용 라운지, 조식 쿠폰, 전자레인지 구비 등 호텔 별로 다양한 혜택을 제공하고 있습니다. 원하시는 호텔 상세 페이지에 들어가셔서 확인해 보시기 바랍니다.",
    question: "장기 숙박을 할 때 호텔에삶이 좋은 이유는 무엇인가요?",
  },
];

export const Small = (props) => {
  const _items = accordionData.map((data) => (
    <Accordion.Item
      key={data.id}
      header={data.question}
      content={data.answer}
    />
  ));

  return (
    <div style={{ backgroundColor: "#EDEDED", padding: "30px 0" }}>
      <Accordion {...props} items={_items} />
    </div>
  );
};

export const Medium = (props) => {
  const _items = accordionData.map((data) => (
    <Accordion.Item
      key={data.id}
      header={data.question}
      content={data.answer}
    />
  ));

  return (
    <div style={{ backgroundColor: "#EDEDED", padding: "30px 0" }}>
      <Accordion type={"medium"} {...props} items={_items} />
    </div>
  );
};

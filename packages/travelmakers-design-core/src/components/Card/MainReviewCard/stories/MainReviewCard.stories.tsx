import { Meta } from "@storybook/react";
import { MainReviewCard } from "../MainReviewCard";

export default {
  title: "@travelmakers-design-v2/core/General/Card/MainReviewCard",
  component: MainReviewCard,
  argTypes: {
    title: {
      defaultValue: "최OO님의 후기",
      description: "MainReviewCard 컴포넌트의 title을 표시합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    job: {
      defaultValue: "대기업 마케터",
      description: "MainReviewCard 컴포넌트의 job을 표시합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    content: {
      defaultValue:
        "리뷰 컨텐츠 내용, 리뷰 컨텐츠 내용,리뷰 컨텐츠 내용,리뷰 컨텐츠 내용,리뷰 컨텐츠 내용,리뷰 컨텐츠 내용, 리뷰 컨텐츠 내용,리뷰 컨텐츠 내용,리뷰 컨텐츠 내용",
      description: "MainReviewCard 컴포넌트의 content를 표시합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    src: {
      defaultValue: "https://picsum.photos/600/400",
      description: "MainReviewCard 컴포넌트의 이미지를 표시합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <div style={{ margin: 40 }}>
      <MainReviewCard {...props} />
    </div>
  );
};

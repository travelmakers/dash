import { getDate } from "../getDate";

type ReservationState =
  | "default"
  | "tour_confirm_before"
  | "tour_confirm"
  | "tour_done"
  | "reservation_purchase_before"
  | "reservation_purchase_done"
  | "checkin_before"
  | "day_n"
  | "extend_purchase_before"
  | "extend_purchase_done"
  | "extend_checkin_before"
  | "reservation_change_process"
  | "checkout_before"
  | "checkout_before_n"
  | "checkout_done"
  | "tour_cancel"
  | "reservation_cancel";

type LocalizedTimeLineParams = "ko" | "en";

export interface timeLineParams {
  enum: ReservationState;
  link: (url?: string) => {
    url: string;
    arrow: boolean;
  };
  color: "default" | "alert";
}

interface timeLineParamsOnlyUserName extends timeLineParams {
  firstLineText: (userName: string) => string;
  secondLineText: () => string;
  buttonText: () => string;
}
interface timeLineParamsWithUserName_HotelName extends timeLineParams {
  firstLineText: (userName: string) => string;
  secondLineText: (hotelName: string) => string;
  buttonText: () => string;
}
interface timeLineParamsWithUserName_StartDate extends timeLineParams {
  firstLineText: (userName: string) => string;
  secondLineText: (startDate: string) => string;
  buttonText: () => string;
}
interface timeLineParamsWithUserName_HotelName_ExpectedDate
  extends timeLineParamsWithUserName_HotelName {
  buttonText: (expectedDate?: string) => string;
}
interface timeLineParamsWithUserName_EndDate extends timeLineParams {
  firstLineText: (userName: string) => string;
  secondLineText: (endDate: string) => string;
  buttonText: () => string;
}
interface timeLineParamsWithUserName_Dday extends timeLineParams {
  firstLineText: (hotelName: string) => string;
  secondLineText: (dDay: number) => string;
  buttonText: () => string;
}
interface timeLineParamsWithUserName_EndDate_Dday extends timeLineParams {
  firstLineText: (hotelName: string) => string;
  secondLineText: (dDay: number) => string;
  buttonText: (endDate: string) => string;
}

type AllTypes =
  | timeLineParamsOnlyUserName
  | timeLineParamsWithUserName_HotelName
  | timeLineParamsWithUserName_StartDate
  | timeLineParamsWithUserName_HotelName_ExpectedDate
  | timeLineParamsWithUserName_EndDate
  | timeLineParamsWithUserName_Dday
  | timeLineParamsWithUserName_EndDate_Dday;

export function getTimeLineFunc(
  t: "default" | "tour_done" | "tour_cancel" | "reservation_cancel",
  locale: LocalizedTimeLineParams
): timeLineParamsOnlyUserName;
export function getTimeLineFunc(
  t: "tour_confirm_before" | "reservation_purchase_before" | "checkout_done",
  locale: LocalizedTimeLineParams
): timeLineParamsWithUserName_HotelName;
export function getTimeLineFunc(
  t: "tour_confirm" | "checkin_before",
  locale: LocalizedTimeLineParams
): timeLineParamsWithUserName_StartDate;
export function getTimeLineFunc(
  t: "reservation_purchase_done",
  locale: LocalizedTimeLineParams
): timeLineParamsWithUserName_HotelName_ExpectedDate;
export function getTimeLineFunc(
  t:
    | "day_n"
    | "extend_purchase_before"
    | "extend_purchase_done"
    | "extend_checkin_before"
    | "reservation_change_process",
  locale: LocalizedTimeLineParams
): timeLineParamsWithUserName_EndDate;
export function getTimeLineFunc(
  t: "checkout_before",
  locale: LocalizedTimeLineParams
): timeLineParamsWithUserName_Dday;
export function getTimeLineFunc(
  t: "checkout_before_n",
  locale: LocalizedTimeLineParams
): timeLineParamsWithUserName_EndDate_Dday;

export function getTimeLineFunc(
  state: ReservationState,
  locale: LocalizedTimeLineParams = "ko"
): AllTypes {
  switch (state) {
    case "default":
    case "tour_cancel":
    case "reservation_cancel":
      // NOTE: 구매 전
      if (locale === "ko") {
        return {
          enum: state,
          firstLineText: (userName) => `안녕하세요, ${userName}님`,
          secondLineText: () => `여행 같은 일상이 필요하지 않으세요?`,
          buttonText: () => `전체 호텔 보러가기`,
          link: (url?: string) => {
            return { url, arrow: !!url };
          },
          color: "default",
        };
      } else {
        return {
          enum: state,
          firstLineText: (userName) => `Dear ${userName}`,
          secondLineText: () => `Do you want a life like a trip?`,
          buttonText: () => `View all hotels`,
          link: (url?: string) => {
            return { url, arrow: !!url };
          },
          color: "default",
        };
      }
    case "tour_confirm_before":
      // NOTE: 투어 확정 전
      if (locale === "ko") {
        return {
          enum: state,
          firstLineText: (userName) => `${userName}님`,
          secondLineText: (hotelName) => hotelName,
          buttonText: () => `투어 확정 전이에요`,
          link: (url?: string) => {
            return { url, arrow: !!url };
          },
          color: "alert",
        };
      } else {
        return {
          enum: state,
          firstLineText: (userName) => `${userName}`,
          secondLineText: (hotelName) => hotelName,
          buttonText: () => `Tour confirmation pending`,
          link: (url?: string) => {
            return { url, arrow: !!url };
          },
          color: "alert",
        };
      }
    case "tour_confirm":
      // NOTE: 투어 확정
      if (locale === "ko") {
        return {
          enum: state,
          firstLineText: (userName) => `${userName}님`,
          secondLineText: (startDate) =>
            `${getDate(startDate, "M월 D일").format} 투어가 확정됐어요`,
          buttonText: () => `약속시간에 꼭 방문해주세요`,
          link: (url?: string) => {
            return { url, arrow: !!url };
          },
          color: "default",
        };
      } else {
        return {
          enum: state,
          firstLineText: (userName) => `${userName}`,
          secondLineText: (startDate) =>
            `${getDate(startDate, "MMM D").format} Tour confirmed`,
          buttonText: () => `See you on time.`,
          link: (url?: string) => {
            return { url, arrow: !!url };
          },
          color: "default",
        };
      }
    case "tour_done":
      // NOTE: 투어 완료
      if (locale === "ko") {
        return {
          enum: state,
          firstLineText: (userName) => `${userName}님`,
          secondLineText: () => `투어는 어떠셨나요?`,
          buttonText: () => `호텔에삶을 경험해보세요`,
          link: (url?: string) => {
            return { url, arrow: !!url };
          },
          color: "default",
        };
      } else {
        return {
          enum: state,
          firstLineText: (userName) => `${userName}`,
          secondLineText: () => `How was your tour?`,
          buttonText: () => `Ready for your hotel life?`,
          link: (url?: string) => {
            return { url, arrow: !!url };
          },
          color: "default",
        };
      }
    case "reservation_purchase_before":
      // NOTE: 결제 진행 중 (가상 계좌)
      if (locale === "ko") {
        return {
          enum: state,
          firstLineText: (userName) => `안녕하세요, ${userName}님`,
          secondLineText: (hotelName) => `${hotelName}`,
          buttonText: () => `아직 입금이 완료되지 않았어요`,
          link: (url?: string) => {
            return { url, arrow: !!url };
          },
          color: "alert",
        };
      } else {
        return {
          enum: state,
          firstLineText: (userName) => `Dear ${userName}`,
          secondLineText: (hotelName) => `${hotelName}`,
          buttonText: () => `Payment pending`,
          link: (url?: string) => {
            return { url, arrow: !!url };
          },
          color: "alert",
        };
      }
    case "reservation_purchase_done":
      // NOTE: 예약 확정 전
      if (locale === "ko") {
        return {
          enum: state,
          firstLineText: (userName) => `안녕하세요, ${userName}님`,
          secondLineText: (hotelName) => `${hotelName}`,
          buttonText: (expectedDate) =>
            `${getDate(expectedDate, "M월 D일").format} 이내 확정 예정이에요`,
          link: (url?: string) => {
            return { url, arrow: !!url };
          },
          color: "alert",
        };
      } else {
        return {
          enum: state,
          firstLineText: (userName) => `Dear ${userName}`,
          secondLineText: (hotelName) => `${hotelName}`,
          buttonText: (expectedDate) =>
            `Will be confirmed by ${getDate(expectedDate, "MMM D").format}`,
          link: (url?: string) => {
            return { url, arrow: !!url };
          },
          color: "alert",
        };
      }
    case "checkin_before":
      // NOTE: 체크인 전
      if (locale === "ko") {
        return {
          enum: state,
          firstLineText: (userName) => `${userName}님`,
          secondLineText: (startDate) =>
            `${getDate(startDate, "M월 D일 HH시").format} 체크인 예정이에요`,
          buttonText: () => `편안한 호텔에삶 되세요`,
          link: (url?: string) => {
            return { url, arrow: !!url };
          },
          color: "default",
        };
      } else {
        return {
          enum: state,
          firstLineText: (userName) => `${userName}`,
          secondLineText: (startDate) =>
            `Check-in: ${getDate(startDate, "HH a").format} on ${
              getDate(startDate, "MMM D").format
            }`,
          buttonText: () => `Enjoy your stay!`,
          link: (url?: string) => {
            return { url, arrow: !!url };
          },
          color: "default",
        };
      }
    case "day_n":
    case "extend_purchase_before":
    case "extend_purchase_done":
    case "extend_checkin_before":
    case "reservation_change_process":
      // NOTE: 입주 N일차 / 연장결제전 / 연장확정전/ 연장확정 / 예약 변경 중
      if (locale === "ko") {
        return {
          enum: state,
          firstLineText: (userName) => `${userName}님`,
          secondLineText: (endDate) =>
            `체크아웃은 ${getDate(endDate, "M월 D일 HH시").format}에요`,
          buttonText: () => `편안한 호텔에삶 되세요`,
          link: (url?: string) => {
            return { url, arrow: !!url };
          },
          color: "default",
        };
      } else {
        return {
          enum: state,
          firstLineText: (userName) => `${userName}`,
          secondLineText: (endDate) =>
            `Check-out: ${getDate(endDate, "HH a").format} on ${
              getDate(endDate, "MMM D").format
            }`,
          buttonText: () => `Enjoy your stay!`,
          link: (url?: string) => {
            return { url, arrow: !!url };
          },
          color: "default",
        };
      }
    case "checkout_before":
      // NOTE: 체크아웃 전
      if (locale === "ko") {
        return {
          enum: state,
          firstLineText: (hotelName) => `${hotelName}`,
          secondLineText: (dDay) => `퇴실까지 ${dDay}일 남았어요`,
          buttonText: () => `호텔에삶을 연장하시겠어요?`,
          link: (url?: string) => {
            return { url, arrow: !!url };
          },
          color: "alert",
        };
      } else {
        return {
          enum: state,
          firstLineText: (hotelName) => `${hotelName}`,
          secondLineText: (dDay) => `${dDay} days left until check-out.`,
          buttonText: () => `Want to extend your stay?`,
          link: (url?: string) => {
            return { url, arrow: !!url };
          },
          color: "alert",
        };
      }
    case "checkout_before_n":
      // NOTE: 체크아웃 N일 전
      if (locale === "ko") {
        return {
          enum: state,
          firstLineText: (hotelName) => `${hotelName}`,
          secondLineText: (dDay) => `퇴실까지 ${dDay}일 남았어요`,
          buttonText: (endDate) =>
            `${getDate(endDate, "M월 D일 HH시").format} 체크아웃 입니다`,
          link: (url?: string) => {
            return { url, arrow: !!url };
          },
          color: "alert",
        };
      } else {
        return {
          enum: state,
          firstLineText: (hotelName) => `${hotelName}`,
          secondLineText: (dDay) => `${dDay} days left until check-out.`,
          buttonText: (endDate) =>
            `Check-out: ${getDate(endDate, "HH a").format} on ${
              getDate(endDate, "MMM D").format
            }`,
          link: (url?: string) => {
            return { url, arrow: !!url };
          },
          color: "alert",
        };
      }
    case "checkout_done":
      // NOTE: 체크아웃
      if (locale === "ko") {
        return {
          enum: state,
          firstLineText: (userName) => `${userName}님`,
          secondLineText: (hotelName) => `${hotelName}`,
          buttonText: () => `호텔에삶은 어떠셨나요?`,
          link: (url?: string) => {
            return { url, arrow: !!url };
          },
          color: "alert",
        };
      } else {
        return {
          enum: state,
          firstLineText: (userName) => `${userName}`,
          secondLineText: (hotelName) => `${hotelName}`,
          buttonText: () => `How was Living-In-Hotel?`,
          link: (url?: string) => {
            return { url, arrow: !!url };
          },
          color: "alert",
        };
      }
  }
}

type Props = {
  first: {
    userName?: string;
    hotelName?: string;
  };
  second: {
    userName?: string;
    hotelName?: string;
    expectedDate?: string;
    startDate?: string;
    endDate?: string;
    dDay?: number;
  };
  buttonText?: {
    expectedDate?: string;
    endDate?: string;
  };
};

interface TimeLinePropsReturnType {
  first: string;
  second: string;
  buttonText: string;
}

export function getTimeLineProps(
  state: ReservationState,
  props: Props
): TimeLinePropsReturnType {
  switch (state) {
    case "default":
    case "tour_cancel":
    case "reservation_cancel":
      return {
        first: props.first.userName,
        second: null,
        buttonText: null,
      };

    case "tour_confirm_before":
      // NOTE: 투어 확정 전
      return {
        first: props.first.userName,
        second: props.second.hotelName,
        buttonText: null,
      };
    case "tour_confirm":
      // NOTE: 투어 확정
      return {
        first: props.first.userName,
        second: props.second.startDate,
        buttonText: null,
      };
    case "tour_done":
      // NOTE: 투어 완료
      return {
        first: props.first.userName,
        second: null,
        buttonText: null,
      };
    case "reservation_purchase_before":
      // NOTE: 결제 진행 중 (가상 계좌)
      return {
        first: props.first.userName,
        second: props.second.hotelName,
        buttonText: null,
      };
    case "reservation_purchase_done":
      // NOTE: 예약 확정 전
      return {
        first: props.first.userName,
        second: props.second.hotelName,
        buttonText: props.buttonText.expectedDate,
      };
    case "checkin_before":
      // NOTE: 체크인 전
      return {
        first: props.first.userName,
        second: props.second.startDate,
        buttonText: null,
      };
    case "day_n":
    case "extend_purchase_before":
    case "extend_purchase_done":
    case "extend_checkin_before":
    case "reservation_change_process":
      // NOTE: 입주 N일차 / 연장결제전 / 연장확정전/ 연장확정
      return {
        first: props.first.userName,
        second: props.second.endDate,
        buttonText: null,
      };
    case "checkout_before":
      // NOTE: 체크아웃 전
      return {
        first: props.first.hotelName,
        second: `${props.second.dDay}`,
        buttonText: null,
      };
    case "checkout_before_n":
      // NOTE: 체크아웃 N일 전
      return {
        first: props.first.hotelName,
        second: `${props.second.dDay}`,
        buttonText: props.buttonText.endDate,
      };
    case "checkout_done":
      // NOTE: 체크아웃
      return {
        first: props.first.userName,
        second: props.second.hotelName,
        buttonText: null,
      };

    default:
      return {
        first: null,
        second: null,
        buttonText: null,
      };
  }
}

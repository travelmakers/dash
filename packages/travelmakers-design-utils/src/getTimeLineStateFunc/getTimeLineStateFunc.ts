import { getDate } from "../getDate";
import { getCountDown } from "../utils/getCountDown";

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

export interface timeLineStateParams {
  enum: ReservationState;
  thirdLineText: (hotelName: string) => string;
  roomTypeText: (roomType: string) => string;
  titleDisable?: () => boolean;
  messageDisable?: () => boolean;
  messageUnderline?: () => boolean;
  link: (url?: string) => {
    url: string;
    arrow: boolean;
  };
}

interface timeLineStateParamsWithExpectedDate extends timeLineStateParams {
  firstLineText: (state?: string) => string;
  secondLineText: (expectedDate: string) => string;
}

interface timeLineStateParamsWithStartDate extends timeLineStateParams {
  firstLineText: (state?: string) => string;
  secondLineText: (start_date: string) => string;
}

interface timeLineStateParamsWithEndDate extends timeLineStateParams {
  firstLineText: (state?: string) => string;
  secondLineText: (end_date: string) => string;
}

interface timeLineStateParamsWithEndDateDday extends timeLineStateParams {
  firstLineText: (dDay: number | string) => string;
  secondLineText: (end_date: string) => string;
}

interface timeLineStateParamsWithBankDate extends timeLineStateParams {
  firstLineText: (state?: string) => string;
  secondLineText: (vbank_date: string) => string;
}

interface timeLineStateParamsWithNull extends timeLineStateParams {
  firstLineText: (state?: string) => string;
  secondLineText: () => string;
  secondLink: (url?: string) => string;
}

interface timeLineStateParamsWithCancelDate extends timeLineStateParams {
  firstLineText: (state?: string) => string;
  secondLineText: (cancelDate) => string;
}

type AllTypes =
  | timeLineStateParamsWithExpectedDate
  | timeLineStateParamsWithStartDate
  | timeLineStateParamsWithEndDate
  | timeLineStateParamsWithEndDateDday
  | timeLineStateParamsWithBankDate
  | timeLineStateParamsWithNull
  | timeLineStateParamsWithCancelDate;

export function getTimeLineStateFunc(
  t:
    | "tour_confirm_before"
    | "reservation_purchase_done"
    | "extend_purchase_done"
    | "reservation_change_process",
  locale: LocalizedTimeLineParams
): timeLineStateParamsWithExpectedDate;

export function getTimeLineStateFunc(
  t: "tour_confirm" | "tour_done" | "checkin_before" | "extend_checkin_before",
  locale: LocalizedTimeLineParams
): timeLineStateParamsWithStartDate;

export function getTimeLineStateFunc(
  t: "day_n",
  locale: LocalizedTimeLineParams
): timeLineStateParamsWithEndDate;

export function getTimeLineStateFunc(
  t: "checkout_before" | "checkout_before_n",
  locale: LocalizedTimeLineParams
): timeLineStateParamsWithEndDateDday;

export function getTimeLineStateFunc(
  t: "reservation_purchase_before" | "extend_purchase_before",
  locale: LocalizedTimeLineParams
): timeLineStateParamsWithBankDate;

export function getTimeLineStateFunc(
  t: "checkout_done",
  locale: LocalizedTimeLineParams
): timeLineStateParamsWithNull;

export function getTimeLineStateFunc(
  t: "tour_cancel" | "reservation_cancel",
  locale: LocalizedTimeLineParams
): timeLineStateParamsWithCancelDate;

export function getTimeLineStateFunc(
  state: ReservationState,
  locale: LocalizedTimeLineParams = "ko"
): AllTypes {
  switch (state) {
    case "tour_confirm_before":
      // NOTE: 투어 확정 전
      if (locale === "ko") {
        return {
          enum: state,
          firstLineText: () => `투어 확정 전`,
          secondLineText: (expectedDate) =>
            `${getDate(expectedDate, "M월 D일").format} 이내 확정 예정`,
          thirdLineText: (hotelName) => hotelName,
          roomTypeText: (roomType) => roomType,
          titleDisable: () => false,
          messageDisable: () => false,
          messageUnderline: () => false,
          link: (url?: string) => {
            return { url, arrow: !!url };
          },
        };
      } else {
        return {
          enum: state,
          firstLineText: () => `Tour applied`,
          secondLineText: (expectedDate) =>
            `Will be confirmed by ${getDate(expectedDate, "MMM D").format}`,
          thirdLineText: (hotelName) => hotelName,
          roomTypeText: (roomType) => roomType,
          titleDisable: () => false,
          messageDisable: () => false,
          messageUnderline: () => false,
          link: (url?: string) => {
            return { url, arrow: !!url };
          },
        };
      }
    case "tour_confirm":
      // NOTE: 투어 확정
      if (locale === "ko") {
        return {
          enum: state,
          firstLineText: () => `투어 확정`,
          secondLineText: (startDate) =>
            `${getDate(startDate, "M월 D일 HH:mm").format} 방문`,
          thirdLineText: (hotelName) => hotelName,
          roomTypeText: (roomType) => roomType,
          titleDisable: () => false,
          messageDisable: () => false,
          messageUnderline: () => false,
          link: (url?: string) => {
            return { url, arrow: !!url };
          },
        };
      } else {
        return {
          enum: state,
          firstLineText: () => `Tour confirmed`,
          secondLineText: (startDate) =>
            `${getDate(startDate, "MMM D HH:mm").format}`,
          thirdLineText: (hotelName) => hotelName,
          roomTypeText: (roomType) => roomType,
          titleDisable: () => false,
          messageDisable: () => false,
          messageUnderline: () => false,
          link: (url?: string) => {
            return { url, arrow: !!url };
          },
        };
      }
    case "tour_done":
      // NOTE: 투어 완료
      if (locale === "ko") {
        return {
          enum: state,
          firstLineText: () => `투어 완료`,
          secondLineText: (startDate) =>
            `${getDate(startDate, "M월 D일 HH:mm").format} 방문`,
          thirdLineText: (hotelName) => hotelName,
          roomTypeText: (roomType) => roomType,
          titleDisable: () => false,
          messageDisable: () => false,
          messageUnderline: () => false,
          link: (url?: string) => {
            return { url, arrow: !!url };
          },
        };
      } else {
        return {
          enum: state,
          firstLineText: () => `Tour completed`,
          secondLineText: (startDate) =>
            `${getDate(startDate, "MMM D HH:mm").format}`,
          thirdLineText: (hotelName) => hotelName,
          roomTypeText: (roomType) => roomType,
          titleDisable: () => false,
          messageDisable: () => false,
          messageUnderline: () => false,
          link: (url?: string) => {
            return { url, arrow: !!url };
          },
        };
      }
    case "reservation_purchase_before":
      // NOTE: 결제 진행 중 (가상 계좌)
      if (locale === "ko") {
        return {
          enum: state,
          firstLineText: () => `결제 진행 중`,
          secondLineText: (vbank_date) => {
            if (vbank_date) {
              const countDate = getCountDown(vbank_date);
              if (countDate && countDate === "0시간 0분") {
                return "입금 기한 만료";
              } else {
                return countDate + " 내 입금 필요";
              }
            }
            return "";
          },
          thirdLineText: (hotelName) => hotelName,
          roomTypeText: (roomType) => roomType,
          titleDisable: () => false,
          messageDisable: () => false,
          messageUnderline: () => false,
          link: (url?: string) => {
            return { url, arrow: !!url };
          },
        };
      } else {
        return {
          enum: state,
          firstLineText: () => `Payment in progress`,
          secondLineText: (vbank_date) => {
            if (vbank_date) {
              const countDate = getCountDown(vbank_date, "HH:mm");
              if (countDate && countDate === "0:0") {
                return "Deposit due date expired";
              } else {
                return "Deposit required within" + countDate;
              }
            }
            return "";
          },
          thirdLineText: (hotelName) => hotelName,
          roomTypeText: (roomType) => roomType,
          titleDisable: () => false,
          messageDisable: () => false,
          messageUnderline: () => false,
          link: (url?: string) => {
            return { url, arrow: !!url };
          },
        };
      }
    case "extend_purchase_before":
      // NOTE: 연장 결제 전
      if (locale === "ko") {
        return {
          enum: state,
          firstLineText: () => `연장 결제 전`,
          secondLineText: (vbank_date) => {
            if (vbank_date) {
              const countDate = getCountDown(vbank_date);
              if (countDate && countDate === "0시간 0분") {
                return "입금 기한 만료";
              } else {
                return countDate + " 내 입금 필요";
              }
            }
            return "";
          },
          thirdLineText: (hotelName) => hotelName,
          roomTypeText: (roomType) => roomType,
          titleDisable: () => false,
          messageDisable: () => false,
          messageUnderline: () => false,
          link: (url?: string) => {
            return { url, arrow: !!url };
          },
        };
      } else {
        return {
          enum: state,
          firstLineText: () => `Additional Payment In progress`,
          secondLineText: (vbank_date) => {
            if (vbank_date) {
              const countDate = getCountDown(vbank_date, "HH:mm");
              if (countDate && countDate === "0:0") {
                return "Deposit due date expired";
              } else {
                return "Deposit required within" + countDate;
              }
            }
            return "";
          },
          thirdLineText: (hotelName) => hotelName,
          roomTypeText: (roomType) => roomType,
          titleDisable: () => false,
          messageDisable: () => false,
          messageUnderline: () => false,
          link: (url?: string) => {
            return { url, arrow: !!url };
          },
        };
      }
    case "reservation_purchase_done":
      // NOTE: 예약 확정 전
      if (locale === "ko") {
        return {
          enum: state,
          firstLineText: () => `예약 확정 전`,
          secondLineText: (expectedDate) =>
            `${getDate(expectedDate, "M월 D일").format} 이내 확정 예정`,
          thirdLineText: (hotelName) => hotelName,
          roomTypeText: (roomType) => roomType,
          titleDisable: () => false,
          messageDisable: () => false,
          messageUnderline: () => false,
          link: (url?: string) => {
            return { url, arrow: !!url };
          },
        };
      } else {
        return {
          enum: state,
          firstLineText: () => `Reservation confirmation pending`,
          secondLineText: (expectedDate) =>
            `Will be confirmed by ${getDate(expectedDate, "MMM D").format}`,
          thirdLineText: (hotelName) => hotelName,
          roomTypeText: (roomType) => roomType,
          titleDisable: () => false,
          messageDisable: () => false,
          messageUnderline: () => false,
          link: (url?: string) => {
            return { url, arrow: !!url };
          },
        };
      }
    case "checkin_before":
      // NOTE: 체크인 전
      if (locale === "ko") {
        return {
          enum: state,
          firstLineText: (dDay) => {
            if (dDay && dDay === "0") {
              return `체크인 D-Day`;
            }
            return `체크인 D-${dDay}`;
          },
          secondLineText: (startDate) =>
            `${getDate(startDate, "M월 D일 HH:mm").format} 체크인`,
          thirdLineText: (hotelName) => hotelName,
          roomTypeText: (roomType) => roomType,
          titleDisable: () => false,
          messageDisable: () => false,
          messageUnderline: () => false,
          link: (url?: string) => {
            return { url, arrow: !!url };
          },
        };
      } else {
        return {
          enum: state,
          firstLineText: (dDay) => {
            if (dDay && dDay === "0") {
              return `Check-In D-Day`;
            }
            return `Check-In D-${dDay}`;
          },
          secondLineText: (startDate) =>
            `${getDate(startDate, "MMM D HH:mm").format} Check-In`,
          thirdLineText: (hotelName) => hotelName,
          roomTypeText: (roomType) => roomType,
          titleDisable: () => false,
          messageDisable: () => false,
          messageUnderline: () => false,
          link: (url?: string) => {
            return { url, arrow: !!url };
          },
        };
      }
    case "day_n":
      // NOTE: 입주 N일차
      if (locale === "ko") {
        return {
          enum: state,
          firstLineText: () => `호텔 이용 중`,
          secondLineText: (endDate) =>
            `${getDate(endDate, "M월 D일 HH:mm").format} 체크아웃`,
          thirdLineText: (hotelName) => hotelName,
          roomTypeText: (roomType) => roomType,
          titleDisable: () => false,
          messageDisable: () => false,
          messageUnderline: () => false,
          link: (url?: string) => {
            return { url, arrow: !!url };
          },
        };
      } else {
        return {
          enum: state,
          firstLineText: () => `Staying In`,
          secondLineText: (endDate) =>
            `${getDate(endDate, "MMM D HH:mm").format} Checkout`,
          thirdLineText: (hotelName) => hotelName,
          roomTypeText: (roomType) => roomType,
          titleDisable: () => false,
          messageDisable: () => false,
          messageUnderline: () => false,
          link: (url?: string) => {
            return { url, arrow: !!url };
          },
        };
      }
    case "extend_purchase_done":
      // NOTE: 연장확정전
      if (locale === "ko") {
        return {
          enum: state,
          firstLineText: () => `연장 확정 전`,
          secondLineText: (expectedDate) =>
            `${getDate(expectedDate, "M월 D일").format} 이내 확정 예정`,
          thirdLineText: (hotelName) => hotelName,
          roomTypeText: (roomType) => roomType,
          titleDisable: () => false,
          messageDisable: () => false,
          messageUnderline: () => false,
          link: (url?: string) => {
            return { url, arrow: !!url };
          },
        };
      } else {
        return {
          enum: state,
          firstLineText: () => `Extension confirmation pending`,
          secondLineText: (expectedDate) =>
            `Will be confirmed by ${getDate(expectedDate, "MMM D").format}`,
          thirdLineText: (hotelName) => hotelName,
          roomTypeText: (roomType) => roomType,
          titleDisable: () => false,
          messageDisable: () => false,
          messageUnderline: () => false,
          link: (url?: string) => {
            return { url, arrow: !!url };
          },
        };
      }
    case "extend_checkin_before":
      // NOTE: 연장확정
      if (locale === "ko") {
        return {
          enum: state,
          firstLineText: () => `연장 확정`,
          secondLineText: (startDate) =>
            `${getDate(startDate, "M월 D일 HH:mm").format} 체크인`,
          thirdLineText: (hotelName) => hotelName,
          roomTypeText: (roomType) => roomType,
          titleDisable: () => false,
          messageDisable: () => false,
          messageUnderline: () => false,
          link: (url?: string) => {
            return { url, arrow: !!url };
          },
        };
      } else {
        return {
          enum: state,
          firstLineText: () => `Extension confirmed`,
          secondLineText: (startDate) =>
            `${getDate(startDate, "MMM D HH:mm").format} Check-In`,
          thirdLineText: (hotelName) => hotelName,
          roomTypeText: (roomType) => roomType,
          titleDisable: () => false,
          messageDisable: () => false,
          messageUnderline: () => false,
          link: (url?: string) => {
            return { url, arrow: !!url };
          },
        };
      }
    case "reservation_change_process":
      // NOTE: 예약 변경 중
      if (locale === "ko") {
        return {
          enum: state,
          firstLineText: () => `예약 변경 중`,
          secondLineText: (expectedDate) =>
            `${getDate(expectedDate, "M월 D일").format} 이내 확정`,
          thirdLineText: (hotelName) => hotelName,
          roomTypeText: (roomType) => roomType,
          titleDisable: () => false,
          messageDisable: () => false,
          messageUnderline: () => false,
          link: (url?: string) => {
            return { url, arrow: !!url };
          },
        };
      } else {
        return {
          enum: state,
          firstLineText: () => `Changing reservation`,
          secondLineText: (expectedDate) =>
            `Confirmed within ${getDate(expectedDate, "MMM D").format}`,
          thirdLineText: (hotelName) => hotelName,
          roomTypeText: (roomType) => roomType,
          titleDisable: () => false,
          messageDisable: () => false,
          messageUnderline: () => false,
          link: (url?: string) => {
            return { url, arrow: !!url };
          },
        };
      }
    case "checkout_before":
      // NOTE: 체크아웃 전
      if (locale === "ko") {
        return {
          enum: state,
          firstLineText: (dDay) => {
            if (dDay && dDay === "0") {
              return `체크아웃 D-Day`;
            }
            return `체크아웃 D-${dDay}`;
          },
          secondLineText: (end_date) =>
            `${getDate(end_date, "M월 D일 HH:mm").format} 체크아웃`,
          thirdLineText: (hotelName) => hotelName,
          roomTypeText: (roomType) => roomType,
          titleDisable: () => false,
          messageDisable: () => false,
          messageUnderline: () => false,
          link: (url?: string) => {
            return { url, arrow: !!url };
          },
        };
      } else {
        return {
          enum: state,
          firstLineText: (dDay) => {
            if (dDay && dDay === "0") {
              return `Checkout D-Day`;
            }
            return `Checkout D-${dDay}`;
          },
          secondLineText: (end_date) =>
            `${getDate(end_date, "MMM D HH:mm").format} Checkout`,
          thirdLineText: (hotelName) => hotelName,
          roomTypeText: (roomType) => roomType,
          titleDisable: () => false,
          messageDisable: () => false,
          messageUnderline: () => false,
          link: (url?: string) => {
            return { url, arrow: !!url };
          },
        };
      }
    case "checkout_before_n":
      // NOTE: 체크아웃 N일 전
      if (locale === "ko") {
        return {
          enum: state,
          firstLineText: (dDay) => {
            if (dDay && dDay === "0") {
              return `체크아웃 D-Day`;
            }
            return `체크아웃 D-${dDay}`;
          },
          secondLineText: (end_date) =>
            `${getDate(end_date, "M월 D일 HH:mm").format} 체크아웃`,
          thirdLineText: (hotelName) => hotelName,
          roomTypeText: (roomType) => roomType,
          link: (url?: string) => {
            return { url, arrow: !!url };
          },
        };
      } else {
        return {
          enum: state,
          firstLineText: (dDay) => {
            if (dDay && dDay === "0") {
              return `Checkout D-Day`;
            }
            return `Checkout D-${dDay}`;
          },
          secondLineText: (end_date) =>
            `${getDate(end_date, "MMM D HH:mm").format} Checkout`,
          thirdLineText: (hotelName) => hotelName,
          roomTypeText: (roomType) => roomType,
          link: (url?: string) => {
            return { url, arrow: !!url };
          },
        };
      }
    case "checkout_done":
      // NOTE: 체크아웃
      if (locale === "ko") {
        return {
          enum: state,
          firstLineText: () => `체크아웃 완료`,
          secondLineText: () => `재구매하기`,
          secondLink: (url) => url,
          thirdLineText: (hotelName) => hotelName,
          roomTypeText: (roomType) => roomType,
          titleDisable: () => true,
          messageDisable: () => false,
          messageUnderline: () => true,
          link: (url?: string) => {
            return { url, arrow: !!url };
          },
        };
      } else {
        return {
          enum: state,
          firstLineText: () => `Checked-out`,
          secondLineText: () => `Rebook`,
          secondLink: (url) => url,
          thirdLineText: (hotelName) => hotelName,
          roomTypeText: (roomType) => roomType,
          titleDisable: () => true,
          messageDisable: () => false,
          messageUnderline: () => true,
          link: (url?: string) => {
            return { url, arrow: !!url };
          },
        };
      }
    case "tour_cancel":
      // NOTE: 투어 취소
      if (locale === "ko") {
        return {
          enum: state,
          firstLineText: () => `투어 취소`,
          secondLineText: (cancelDate) =>
            `${getDate(cancelDate, "M월 D일 HH:mm").format} 방문 취소`,
          thirdLineText: (hotelName) => hotelName,
          roomTypeText: (roomType) => roomType,
          titleDisable: () => true,
          messageDisable: () => true,
          messageUnderline: () => false,
          link: (url?: string) => {
            return { url, arrow: !!url };
          },
        };
      } else {
        return {
          enum: state,
          firstLineText: () => `Tour canceled`,
          secondLineText: (cancelDate) =>
            `Visit canceled at ${getDate(cancelDate, "HH:mm a").format} on ${
              getDate(cancelDate, "MMM D").format
            }`,
          thirdLineText: (hotelName) => hotelName,
          roomTypeText: (roomType) => roomType,
          titleDisable: () => true,
          messageDisable: () => true,
          messageUnderline: () => false,
          link: (url?: string) => {
            return { url, arrow: !!url };
          },
        };
      }
    case "reservation_cancel":
      // NOTE: 예약 취소 완료(환불O)
      if (locale === "ko") {
        return {
          enum: state,
          firstLineText: () => `취소 완료`,
          secondLineText: (cancelDate) =>
            `${getDate(cancelDate, "M월 D일 HH:mm").format} 취소 완료`,
          thirdLineText: (hotelName) => hotelName,
          roomTypeText: (roomType) => roomType,
          titleDisable: () => true,
          messageDisable: () => true,
          messageUnderline: () => false,
          link: (url?: string) => {
            return { url, arrow: !!url };
          },
        };
      } else {
        return {
          enum: state,
          firstLineText: () => `Cancellation completed`,
          secondLineText: (cancelDate) =>
            `${getDate(cancelDate, "MMM D HH:mm").format} Canceled`,
          thirdLineText: (hotelName) => hotelName,
          roomTypeText: (roomType) => roomType,
          titleDisable: () => true,
          messageDisable: () => true,
          messageUnderline: () => false,
          link: (url?: string) => {
            return { url, arrow: !!url };
          },
        };
      }
    default:
      return {
        enum: state,
        firstLineText: () => ``,
        secondLineText: () => ``,
        thirdLineText: (hotelName) => hotelName,
        roomTypeText: (roomType) => roomType,
        titleDisable: () => false,
        messageDisable: () => false,
        messageUnderline: () => false,
        link: (url?: string) => {
          return { url, arrow: !!url };
        },
      };
  }
}

type Props = {
  first: {
    dDay?: number;
  };
  second: {
    userName?: string;
    hotelName?: string;
    expectedDate?: string;
    startDate?: string;
    cancelDate?: string;
    endDate?: string;
    vBankDate?: string;
    dDay?: number;
  };
  third?: {
    hotelName?: string;
  };
  roomTypeText?: {
    roomType?: string;
  };
};

interface TimeLineStatePropsReturnType {
  first: string;
  second: string;
  third: string;
  roomTypeText: string;
}

export function getTimeLineStateProps(
  state: ReservationState,
  props: Props
): TimeLineStatePropsReturnType {
  switch (state) {
    case "checkout_before":
    case "checkout_before_n":
      return {
        first: `${props.first.dDay}`,
        second: props.second.endDate,
        third: props.third.hotelName,
        roomTypeText: props.roomTypeText.roomType,
      };
    case "tour_confirm_before":
    case "reservation_purchase_done":
    case "extend_purchase_done":
    case "reservation_change_process":
      return {
        first: null,
        second: props.second.expectedDate,
        third: props.third.hotelName,
        roomTypeText: props.roomTypeText.roomType,
      };
    case "tour_confirm":
    case "tour_done":
    case "checkin_before":
    case "extend_checkin_before":
      return {
        first: `${props.first.dDay}`,
        second: props.second.startDate,
        third: props.third.hotelName,
        roomTypeText: props.roomTypeText.roomType,
      };
    case "day_n":
      return {
        first: null,
        second: props.second.endDate,
        third: props.third.hotelName,
        roomTypeText: props.roomTypeText.roomType,
      };
    case "reservation_purchase_before":
    case "extend_purchase_before":
      return {
        first: null,
        second: props.second.vBankDate,
        third: props.third.hotelName,
        roomTypeText: props.roomTypeText.roomType,
      };
    case "checkout_done":
      return {
        first: null,
        second: null,
        third: props.third.hotelName,
        roomTypeText: props.roomTypeText.roomType,
      };
    case "tour_cancel":
    case "reservation_cancel":
      return {
        first: null,
        second: props.second.cancelDate,
        third: props.third.hotelName,
        roomTypeText: props.roomTypeText.roomType,
      };

    default:
      return {
        first: null,
        second: null,
        third: props.third.hotelName,
        roomTypeText: props.roomTypeText.roomType,
      };
  }
}

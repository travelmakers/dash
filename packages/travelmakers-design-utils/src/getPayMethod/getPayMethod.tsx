/**
 * 결제방법에 대해서 문자열로 리턴한다.
 * @param pay_method
 * @returns string
 */
const getPayMethod = (
  pay_method: string,
  card_name?: string,
  card_quota?: number,
  locale?: "ko" | "en"
) => {
  const getCardDescription = (locale: "ko" | "en" = "ko") => {
    if (card_quota === 0) {
      return locale === "ko" ? "(일시불)" : "(full payment)";
    } else if (card_quota > 0) {
      if (locale === "ko") {
        return "(" + card_quota + "개월 할부)";
      }
      return `(${card_quota} monthly payments)`;
      // return `(for ${card_quota} months.)`;
    }
    return "";
  };

  switch (pay_method) {
    case "card":
      return `${
        card_name ?? locale === "ko" ? "신용카드" : "credit card"
      }${getCardDescription(locale)}`;
    case "vbank":
      return locale === "ko"
        ? `무통장입금 (가상계좌)`
        : "Bank transfer(virtual account)";
    case "naverpay":
      return locale === "ko"
        ? `네이버페이${getCardDescription(locale)}`
        : `NaverPay${getCardDescription(locale)}`;
    case "kakaopay":
      return locale === "ko"
        ? `카카오페이${getCardDescription(locale)}`
        : `KakaoPay${getCardDescription(locale)}`;
    case "samsung":
      return locale === "ko"
        ? `삼성페이${getCardDescription(locale)}`
        : `SamsungPay${getCardDescription(locale)}`;

    default:
      return "";
  }
};

export default getPayMethod;

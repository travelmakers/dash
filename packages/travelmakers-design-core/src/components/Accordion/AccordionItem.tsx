const AccordionItem = ({
  id,
  answer,
  answerClassName,
  question,
  questionClassName,
  ...props
}) => {
  return (
    <div>
      <dt className={cx(answerClassName)}>{answer}</dt>
      <dd>{question}</dd>
    </div>
  );
};

export default AccordionItem;

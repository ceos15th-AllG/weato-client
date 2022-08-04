// Card 데이터 관리

import Card from '@common/Card';

const CardContainer = ({ text, date, tag }) => {
  return <Card text={text} date={date} tag={tag}></Card>;
};

export default CardContainer;

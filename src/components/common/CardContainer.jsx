import Card from '@common/Card';

import Link from 'next/link';

const CardContainer = (props) => {
  const { text, date, tag } = props;

  const dict = {
    DRUG: '약품',
    SLEEP: '수면',
    CLEANING: '세면',
    FOOD: '음식',
    ENVIRONMENT: '환경',
    OTHERWISE: '기타',
    ALL: '전체',
  };

  if (!props.href) {
    return <Card text={text} date={date} tag={dict[tag]} />;
  }

  return (
    <Link href={props.href}>
      <a>
        <Card text={text} date={date} tag={dict[tag]} />
      </a>
    </Link>
  );
};

export default CardContainer;

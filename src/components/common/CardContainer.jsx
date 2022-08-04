import Card from '@common/Card';

import Link from 'next/link';

const CardContainer = (props) => {
  if (!props.href) {
    return (
      <Card
        onClick={props.onClick}
        text={props.text}
        date={props.date}
        tag={props.tag}
      />
    );
  }

  return (
    <Link href={`${props.href}`}>
      <a>
        <Card text={text} date={date} tag={tag} />;
      </a>
    </Link>
  );
};

export default CardContainer;

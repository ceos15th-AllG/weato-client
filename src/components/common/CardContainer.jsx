import Card from '@common/Card';

import Link from 'next/link';

const CardContainer = (props) => {
  if (!props.href) {
    return (
      <Link href="/newsletter/sample">
        <a>
          <Card
            onClick={props.onClick}
            text={props.text}
            date={props.date}
            tag={props.tag}
          />
        </a>
      </Link>
      /* 임시로 배포 용도로 링크 걸어놓음... */
      // <Card
      //   onClick={props.onClick}
      //   text={props.text}
      //   date={props.date}
      //   tag={props.tag}
      // />
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

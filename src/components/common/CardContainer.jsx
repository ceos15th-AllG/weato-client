import Card from '@common/Card';

import Link from 'next/link';

const CardContainer = (props) => {
  const { href, text, date, tag } = props;

  if (!href) {
    return <Card text={text} date={date} tag={tag} />;
  }

  return (
    <Link href={href}>
      <a>
        <Card text={text} date={date} tag={tag} />
      </a>
    </Link>
  );
};

export default CardContainer;

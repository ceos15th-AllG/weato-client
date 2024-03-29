import Button from '@common/Button';

import Link from 'next/link';

const ButtonContainer = (props) => {
  if (!props.href) {
    return <Button {...props} />;
  }

  return (
    <Link href={`${props.href}`}>
      <a>
        <Button {...props} />
      </a>
    </Link>
  );
};

export default ButtonContainer;

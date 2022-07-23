import Image from 'next/image';
import logo_horizontal from '../../../public/logo_horizontal.png';

function Logo() {
  return <Image src={logo_horizontal} width={155} height={35} />;
}

export default Logo;

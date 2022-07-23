import Image from 'next/image';
import logo from '../../../public/logo_horizontal.png';

function Logo() {
  return <Image src={logo} width={155} height={35} />;
}

export default Logo;

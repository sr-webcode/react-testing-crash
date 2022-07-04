import { Image as ImgBox } from '@chakra-ui/react';

type Props = {
  src?: string;
  children: React.ReactNode;
};

const Image = (props: Props) => {
  return <ImgBox src={props.src} />;
};

export default Image;

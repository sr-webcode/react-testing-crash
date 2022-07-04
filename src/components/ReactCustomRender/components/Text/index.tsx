import { Text } from '@chakra-ui/react';

type Props = {
  children: React.ReactNode;
};

const Card: React.FC<Props> = (props: Props) => {
  return <Text fontSize='medium'>{props.children}</Text>;
};

export default Card;

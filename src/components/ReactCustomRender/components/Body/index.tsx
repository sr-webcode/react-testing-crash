import { VStack } from '@chakra-ui/react';

type Props = {
  children: React.ReactNode;
};

const Body: React.FC<Props> = (props: Props) => {
  return (
    <VStack spacing='4' w='full' bgColor='rebeccapurple'>
      {props.children}
    </VStack>
  );
};

export default Body;

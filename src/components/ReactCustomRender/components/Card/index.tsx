import { Box } from '@chakra-ui/react';

type Props = {
  children: React.ReactNode;
};

const Card = ({ children }: Props) => {
  return (
    <Box w='full' maxW={360} bgColor='teal.500' color='whitesmoke' padding='4' borderColor='teal.50'>
      {children}
    </Box>
  );
};

export default Card;

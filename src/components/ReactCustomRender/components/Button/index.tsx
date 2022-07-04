import { Button as ChakraButton } from '@chakra-ui/react';

type Props = {
  title?: string;
  children: React.ReactNode;
};

const Button = (props: Partial<Props>) => {
  return (
    <ChakraButton bgColor='cadetblue' color='whitesmoke' onClick={() => console.log('hello nigga')}>
      {props.title}
    </ChakraButton>
  );
};

export default Button;

import { Text, Input, VStack, Button, FormLabel, FormControl } from '@chakra-ui/react';

const LoginPage = () => {
  const loginUser = () => {
    console.log('hey logg in');
    // once auth redirect to home page
    // once auth redirect to home page
    // once auth redirect to home page
    // once auth redirect to home page
    // once auth redirect to home page
    // once auth redirect to home page
  };

  return (
    <VStack spacing={6} padding={4}>
      <Text fontSize='4xl'>Login</Text>
      <FormControl>
        <FormLabel htmlFor='username'>Username</FormLabel>
        <Input id='user' name='username' type='text' />
        <FormLabel htmlFor='password'>Password</FormLabel>
        <Input id='pass' name='password' type='password' />
      </FormControl>
      <Button onClick={loginUser} colorScheme='blue' size='lg' w='full'>
        Button
      </Button>
    </VStack>
  );
};

export default LoginPage;

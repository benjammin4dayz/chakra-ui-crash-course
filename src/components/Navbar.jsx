import {
  Button,
  Circle,
  Flex,
  Float,
  Heading,
  HStack,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { Toaster, toaster } from '../components/ui/toaster';
import { Avatar } from './ui/avatar';

export const Navbar = () => {
  const showToast = () => {
    toaster.create({
      title: 'Logged out',
      description: 'Successfully logged out',
      duration: 5000,
      type: 'success',
      meta: { closable: true },
    });
  };

  return (
    <Flex as="nav" p="10px" mb="40px" alignItems="center" gap="10px">
      <Heading as="h1">Dojo Tasks</Heading>
      <Spacer />

      <HStack gap="20px">
        <Avatar name="Mario" bg="purple.400" src="/img/mario.png">
          <Float placement="bottom-end" offsetX="1" offsetY="1">
            <Circle
              bg="teal.500"
              size="1.15em"
              outline="0.15em solid"
              outlineColor="bg"
            >
              <Text fontSize="xs" color="white">
                3
              </Text>
            </Circle>
          </Float>
        </Avatar>
        <Text>mario@netninja.dev</Text>
        <Button onClick={showToast}>Logout</Button>
      </HStack>
      <Toaster />
    </Flex>
  );
};

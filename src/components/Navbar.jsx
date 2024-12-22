import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { Toaster, toaster } from '../components/ui/toaster';

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
        <Box bg="gray.200" p="10px">
          M
        </Box>
        <Text>mario@netninja.dev</Text>
        <Button onClick={showToast}>Logout</Button>
      </HStack>
      <Toaster />
    </Flex>
  );
};

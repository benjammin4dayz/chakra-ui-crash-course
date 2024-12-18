import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Spacer,
  Text,
} from '@chakra-ui/react';

export const Navbar = () => {
  return (
    <Flex as="nav" p="10px" alignItems="center" gap="10px">
      <Heading as="h1">Dojo Tasks</Heading>
      <Spacer />

      <HStack gap="20px">
        <Box bg="gray.200" p="10px">
          M
        </Box>
        <Text>mario@netninja.dev</Text>
        <Button>Logout</Button>
      </HStack>
    </Flex>
  );
};

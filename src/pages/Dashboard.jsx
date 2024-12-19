import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  Heading,
  HStack,
  Separator,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { useLoaderData } from 'react-router-dom';
import { FaEye, FaEdit } from 'react-icons/fa';

export default function Dashboard() {
  const tasks = useLoaderData();

  return (
    <SimpleGrid gap={10} minChildWidth="300px">
      {tasks &&
        tasks.map(task => (
          <Card.Root
            key={task.id}
            borderTop="8px"
            borderColor="purple.400"
            bg="white"
          >
            <Card.Header>
              <Flex gap={3}>
                <Box w="50px" h="50px">
                  <Text>AV</Text>
                </Box>
                <Box>
                  <Heading as="h3" size="sm">
                    {task.title}
                  </Heading>
                  <Text>by {task.author}</Text>
                </Box>
              </Flex>
            </Card.Header>
            <Card.Body color="gray.500">
              <Text>{task.description}</Text>
            </Card.Body>
            <Separator borderColor="gray.200" />
            <Card.Footer>
              <HStack>
                <Button variant="ghost">
                  <FaEye />
                  Watch
                </Button>
                <Button variant="ghost">
                  <FaEdit />
                  Comment
                </Button>
              </HStack>
            </Card.Footer>
          </Card.Root>
        ))}
    </SimpleGrid>
  );
}

export const tasksLoader = async () => {
  const res = await fetch('http://localhost:5000/tasks');
  return res.ok ? res.json() : [];
};

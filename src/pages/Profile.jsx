import { List, Tabs } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FaEnvelope, FaMessage, FaStar, FaCheck, FaX } from 'react-icons/fa6';

export default function Profile() {
  const [taskHistory, setTaskHistory] = useState([]);

  useEffect(() => {
    setTaskHistory(() => {
      return Array.from({ length: 10 }).map((_, index) => {
        return {
          id: index,
          value: 'Lorem ipsum dolor sit amet consectetur.',
          complete: Math.random() >= 0.5,
        };
      });
    }, []);
  }, []);

  return (
    <Tabs.Root mt="40px" p="20px" variant="enclosed" defaultValue="account">
      <Tabs.List>
        <Tabs.Trigger
          _enabled={true}
          _selected={{ color: 'white', bg: 'purple.400' }}
          value="account"
        >
          Account Info
        </Tabs.Trigger>
        <Tabs.Trigger
          _selected={{ color: 'white', bg: 'purple.400' }}
          value="history"
        >
          Task History
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="account">
        <List.Root listStyleType="none">
          <List.Item>
            <List.Indicator as={FaEnvelope} />
            Email: mario@netninja.dev
          </List.Item>
          <List.Item>
            <List.Indicator as={FaMessage} />
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </List.Item>
          <List.Item>
            <List.Indicator as={FaStar} />
            Lorem ipsum dolor sit amet consectetur.
          </List.Item>
        </List.Root>
      </Tabs.Content>
      <Tabs.Content value="history">
        <List.Root listStyleType="none">
          {taskHistory.map(task => {
            return (
              <List.Item key={task.id}>
                <List.Indicator
                  as={task.complete ? FaCheck : FaX}
                  color={task.complete ? 'teal.400' : 'red.400'}
                />
                {task.value}
              </List.Item>
            );
          })}
        </List.Root>
      </Tabs.Content>
    </Tabs.Root>
  );
}

import { Icon, List } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { FaCalendar, FaEdit, FaAt } from 'react-icons/fa';

export const Sidebar = () => {
  return (
    <List.Root color="white" fontSize="1.2em" gap={4}>
      <List.Item>
        <Icon mr="0.2em">
          <FaCalendar color="white" />
        </Icon>
        <NavLink to="/">Dashboard</NavLink>
      </List.Item>
      <List.Item>
        <Icon mr="0.2em">
          <FaEdit color="white" />
        </Icon>
        <NavLink to="/create">New Task</NavLink>
      </List.Item>
      <List.Item>
        <Icon mr="0.2em">
          <FaAt color="white" />
        </Icon>
        <NavLink to="/profile">Profile</NavLink>
      </List.Item>
    </List.Root>
  );
};

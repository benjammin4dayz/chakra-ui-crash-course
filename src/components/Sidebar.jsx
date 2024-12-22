import { Icon, List } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { FaCalendar, FaEdit, FaAt } from 'react-icons/fa';

export const Sidebar = () => {
  return (
    <List.Root color="white" fontSize="1.2em" gap={4} listStyleType="none">
      <List.Item>
        <List.Indicator as={FaCalendar} color="white" />
        <NavLink to="/">Dashboard</NavLink>
      </List.Item>
      <List.Item>
        <List.Indicator as={FaEdit} color="white" />
        <NavLink to="/create">New Task</NavLink>
      </List.Item>
      <List.Item>
        <List.Indicator as={FaAt} color="white" />
        <NavLink to="/profile">Profile</NavLink>
      </List.Item>
    </List.Root>
  );
};

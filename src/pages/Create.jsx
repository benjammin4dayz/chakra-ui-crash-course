import { Box, Button, Field, Input, Textarea } from '@chakra-ui/react';
import { Checkbox } from '../components/ui/checkbox';
import { Form, redirect } from 'react-router-dom';

export default function Create() {
  return (
    <Box maxW="480px">
      <Form method="post" action="/create">
        <Field.Root
          required
          mb="40px"
          helperText="Enter a descriptive task name"
        >
          <Field.Label>Task name:</Field.Label>
          <Input type="text" name="title" />
          <Field.HelperText>Enter a descriptive task name</Field.HelperText>
        </Field.Root>

        <Field.Root mb="40px" helperText="Enter a descriptive task name">
          <Field.Label>Task description:</Field.Label>
          <Textarea
            placeholder="Enter a detailed description for the task..."
            name="description"
          />
          <Field.HelperText>Enter a descriptive task name</Field.HelperText>
        </Field.Root>

        <Field.Root mb="40px">
          <Checkbox name="isPriority" size="lg">
            Make this a priority task
          </Checkbox>
        </Field.Root>

        <Button type="submit">Submit</Button>
      </Form>
    </Box>
  );
}

export const createAction = async ({ request }) => {
  const data = await request.formData();

  const task = {
    title: data.get('title'),
    description: data.get('description'),
    isPriority: data.get('isPriority') === '',
  };
  console.log(task);

  return redirect('/');
};

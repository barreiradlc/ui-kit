import { AiImage, Button, Container, Input } from 'curiosity-ui';

function App() {
  return (
    <Container direction='row'>
      <Input placeholder="Type something..." />
      <Button variant="danger">Delete</Button>
      <AiImage prompt="Cute cat" />
    </Container>
  );
}

export { App };

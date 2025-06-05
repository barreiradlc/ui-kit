import { AiImage, Button, Container, Input } from 'curiosity-ui';

function App() {
  return (
    <Container direction="col">
      <Input placeholder="Type something..." />
      <Button variant="secondary">Do something</Button>
      <AiImage prompt="Cute cat" />
    </Container>
  );
}

export { App };

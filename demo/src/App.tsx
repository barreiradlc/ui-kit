import { AiImage, Button, Input } from 'curiosity-ui';

function App() {
  return (
    <div>
      <Input placeholder="Type something..." />
      <Button variant="danger">Delete</Button>
      <AiImage prompt="Cute cat" />
    </div>
  );
}

export { App };

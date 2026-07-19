import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the main greeting text', () => {
  render(<App />);
  const greeting = screen.getByText(/Hola! Me llamo Leonel Araujo/i);
  expect(greeting).toBeInTheDocument();
});

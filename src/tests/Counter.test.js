// import necessary react testing library helpers here
// import the Counter component here
import { render, fireEvent, screen } from '@testing-library/react';
import Counter from '../components/App';

beforeEach(() => {
  // Render the Counter component here
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const initialCount = screen.getByTestId('count');
  expect(initialCount).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const incrementButton = screen.getByText('+');
  const initialCount = screen.getByTestId('count');
  expect(initialCount).toHaveTextContent('0');
  fireEvent.click(incrementButton);
  const finalCount = screen.getByTestId('count');
  expect(finalCount).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const decrementButton = screen.getByText('-');
  const initialCount = screen.getByTestId('count');
  expect(initialCount).toHaveTextContent('0');
  fireEvent.click(decrementButton);
  const finalCount = screen.getByTestId('count');
  expect(finalCount).toHaveTextContent('-1');
});

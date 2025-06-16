import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('Navigation', () => {
  test('renders navigation links', () => {
    render(<App />);
    expect(screen.getByText(/About Me/i)).toBeInTheDocument();
    expect(screen.getByText(/Projects/i)).toBeInTheDocument();
  });
});

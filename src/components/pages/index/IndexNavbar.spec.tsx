import { render } from '@testing-library/react';
import { IndexNavbar } from './IndexNavbar';

describe('IndexNavbar', () => {
  it('renders the signup button', () => {
    const { getByText } = render(<IndexNavbar />);

    expect(getByText(/hello/i)).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import { NavBar } from '../NavBar';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom';

describe('NavBar', () => {
  it('renders navigation links', () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/about/i)).toBeInTheDocument();
    expect(screen.getByText(/favorites/i)).toBeInTheDocument();
  });
});

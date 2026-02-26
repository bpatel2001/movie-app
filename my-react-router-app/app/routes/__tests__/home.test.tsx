/// <reference types="jest" />
import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../home';
import '@testing-library/jest-dom';

jest.mock('../../store/favorites', () => ({
  useFavorites: () => ({
    favorites: [],
    addFavorite: jest.fn(),
    removeFavorite: jest.fn(),
    isFavorite: () => false,
  }),
}));

describe('Home', () => {
  it('renders search input and button', () => {
    render(<Home />);
    expect(screen.getByPlaceholderText(/search movies/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
  });
});

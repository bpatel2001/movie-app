import { render, screen } from '@testing-library/react';
import Favorites from '../favorites';
import '@testing-library/jest-dom';

jest.mock('../../store/favorites', () => ({
  useFavorites: () => ({
    favorites: [],
    removeFavorite: jest.fn(),
  }),
}));

describe('Favorites', () => {
  it('shows no favorites message when empty', () => {
    render(<Favorites />);
    expect(screen.getByText(/no favorites yet/i)).toBeInTheDocument();
  });
});

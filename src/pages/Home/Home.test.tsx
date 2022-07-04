import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Home from './index';

describe('it has wow text', () => {
  it('finds wow textes', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const wowText = screen.getByText(/wow/);
    expect(wowText).toBeInTheDocument();
  });
});

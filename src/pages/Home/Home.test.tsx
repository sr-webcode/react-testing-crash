import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Home from './index';

describe('initial home page test', () => {
  it('finds wow text', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const wowText = screen.getByText(/wowzer/);
    expect(wowText).toBeInTheDocument();
  });
});

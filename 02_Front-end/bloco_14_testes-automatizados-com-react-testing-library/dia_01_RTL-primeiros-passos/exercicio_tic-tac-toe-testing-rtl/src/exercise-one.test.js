import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Configuração inicial do jogo', () => {
  it('Verificar se foi renderizada nove casas', () => {
    render(<App />);

    const divs = document.querySelectorAll('.game-cell');
    divs.forEach((_div, index) => {
      const div = screen.getByTestId(`cell_${index}`);
      expect(div).toBeInTheDocument();
    });

    expect(divs).toHaveLength(9);
  });

  it('Começar com todos os espaços em branco.', () => {
    render(<App />);

    const divs = document.querySelectorAll('.game-cell');
    divs.forEach((_div, index) => {
      const div = screen.getByTestId(`cell_${index}`);
      expect(div).toHaveTextContent('');
    });

    const markX = screen.queryByAltText('X');
    expect(markX).not.toBeInTheDocument();

    const markO = screen.queryByAltText('O');
    expect(markO).not.toBeInTheDocument();
  });

  it('Começar sem a frase \'Fim de jogo\'', () => {
    render(<App />);

    const endGame = screen.queryByText('Fim de jogo');
    expect(endGame).not.toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

// arquivo App.test.js pode servir de exemplo
describe('Testando a aplicação, testando botão, e sua funcionalidade', () => {
  it('Verifica se o botão está na tela com o texto "Adicionar"', () => {
    render(<App />);
    const button = screen.getByText('Adicionar');
    expect(button).toBeInTheDocument();
  });

  it('Ao clicar no botão Adicionar a taks dever adicionar na tela', () => {
    // Use o userEvent, para simular a digitação do usuário e o clique.
    render(<App />);
    const input = screen.getByLabelText('Tarefa:');
    const button = screen.getByText('Adicionar');
    userEvent.type(input, 'Teste de tarefa');
    userEvent.click(button);
    const list = screen.getByText('Teste de tarefa');
    expect(list).toBeInTheDocument();
  });

  it('Verifica se ao renderizar a tela o input esta vazio', () => {
    render(<App />);
    const input = screen.getByLabelText('Tarefa:');
    expect(input).toHaveTextContent('');
  });
});

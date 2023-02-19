import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Item from '../Item';

const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água']; // Use esse array como base para realizar os testes.

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    render(<App />);
    listTodo.forEach((task) => {
      const input = screen.getByLabelText('Tarefa:');
      const button = screen.getByText('Adicionar');
      userEvent.type(input, task);
      expect(input).toHaveValue(task);
      userEvent.click(button);
      expect(screen.getByText(task)).toBeInTheDocument();
    });
  });
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
    render(<Item content="task" />);
    const item = screen.getByText('task');
    expect(item).toBeInTheDocument();
  });
});

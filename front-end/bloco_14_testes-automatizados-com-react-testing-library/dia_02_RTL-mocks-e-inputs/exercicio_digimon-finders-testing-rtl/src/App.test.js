import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Teste da aplicação toda', () => {
  it('Verifica os elementos quando o "App" é renderizado', async () => {
    render(<App />);

    const input = screen.getByLabelText(/digimon/i);
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('');

    const button = screen.getByRole('button', { name: /search digimon/i });
    expect(button).toBeInTheDocument();

    const cardTitle = screen.queryByRole('heading', { level: 2 });
    expect(cardTitle).not.toBeInTheDocument();
  });

  it('Verifica o valor do input ao digitar uma informação', () => {
    render(<App />);

    const input = screen.getByLabelText(/digimon/i);
    expect(input).toHaveValue('');

    userEvent.type(input, 'digimon');
    expect(input).toHaveValue('digimon');
  });

  it('Verifica o retorno para a busca de um digimon', async () => {
    const digimon = [{
      name: 'Agumon',
      img: 'https://digimon.shadowsmith.com/img/agumon.jpg',
      level: 'Rookie',
    }];

    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(digimon),
    }));

    render(<App />);

    const input = screen.getByLabelText(/digimon/i);
    const button = screen.getByRole('button', { name: /search digimon/i });
    userEvent.type(input, 'Agumon');
    userEvent.click(button);

    const cardTitle = await screen.findByText(/Agumon/i);
    expect(cardTitle).toBeInTheDocument();

    const cardLevel = await screen.findByText(/level: Rookie/i);
    expect(cardLevel).toBeInTheDocument();

    const cardImage = await screen.findByRole('img', { name: /agumon/i });
    expect(cardImage).toBeInTheDocument();

    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toBeCalledWith('https://digimon-api.vercel.app/api/digimon/name/Agumon');
  });

  it('Verifica o retorno para a busca de um digimon que não existe', async () => {
    const ErrorMsg = 'Naoexiste is not a Digimon in our database.';

    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve({ ErrorMsg }),
    }));

    render(<App />);

    const input = screen.getByLabelText(/digimon/i);
    const button = screen.getByRole('button', { name: /search digimon/i });
    userEvent.type(input, 'NãoExiste');
    userEvent.click(button);

    const errorMessage = await screen.findByText(
      /Naoexiste is not a Digimon in our database./i,
    );
    expect(errorMessage).toBeInTheDocument();
  });

  it('Verifica se não exibe nunhuma informação ao clicar no botão com o input vazio',
    () => {
      render(<App />);

      const input = screen.getByLabelText(/digimon/i);
      expect(input).toHaveValue('');

      const button = screen.getByRole('button', { name: /Search Digimon/i });
      userEvent.click(button);

      expect(global.fetch).toBeCalledTimes(0);
    });

  it('Verifica se a API lança um erro ao encontrar problemas na requisição',
    async () => {
      global.fetch = jest.fn(() => Promise.reject(new Error('Request failed')));

      render(<App />);

      const input = screen.getByLabelText(/digimon/i);
      userEvent.type(input, 'Agumon');

      const button = screen.getByRole('button', { name: /Search Digimon/i });
      userEvent.click(button);

      expect(global.fetch).toBeCalledTimes(1);
    });
});

import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Teste das rotas da aplicação', () => {
  it('Verifica se o header está renderizado com o titulo correto', () => {
    renderWithRouter(<App />);

    const linkElement = screen.getByRole('heading', { level: 1, name: 'Meu portifólio' });
    expect(linkElement).toBeInTheDocument();
  });

  it('Verifica se a renderizar a página estamos no caminho "/"', () => {
    const { history } = renderWithRouter(<App />);

    const { location: { pathname } } = history;
    expect(pathname).toBe('/');
  });

  it('Verifica se o link para a home está renderizado', () => {
    renderWithRouter(<App />);

    const linkElement = screen.getByRole('link', { name: /Home/i });
    expect(linkElement).toBeInTheDocument();
  });

  it('Verifica se o link para a about está renderizado', () => {
    renderWithRouter(<App />);

    const linkElement = screen.getByRole('link', { name: /Sobre/i });
    expect(linkElement).toBeInTheDocument();
  });

  it('Verifica se o link para o projeto está renderizado', () => {
    renderWithRouter(<App />);

    const linkElement = screen.getByRole('link', { name: /Projetos/i });
    expect(linkElement).toBeInTheDocument();
  });

  it('Verifica se o link para o contato está renderizado', () => {
    renderWithRouter(<App />);

    const linkElement = screen.getByRole('link', { name: /Contato/i });
    expect(linkElement).toBeInTheDocument();
  });

  it('Verifica se ao clicar no link "Sobre" é direcionado para o caminho "/about', () => {
    const { history } = renderWithRouter(<App />);

    const linkAbout = screen.getByRole('link', { name: /Sobre/i });
    userEvent.click(linkAbout);

    const { location: { pathname } } = history;
    expect(pathname).toBe('/about');
  });

  it('Verifica se o componente "About" é renderizado após o direcionamento', () => {
    renderWithRouter(<App />);

    const linkAbout = screen.getByRole('link', { name: /Sobre/i });
    userEvent.click(linkAbout);

    const aboutElement = screen.getByRole(
      'heading', { level: 2, name: 'Estou no componente About' },
    );
    expect(aboutElement).toBeInTheDocument();
  });

  it('Verifica se ao clicar no link "Projetos" é direcionado para o caminho "/project',
    () => {
      const { history } = renderWithRouter(<App />);

      const linkProjetos = screen.getByRole('link', { name: /Projetos/i });
      userEvent.click(linkProjetos);

      const { location: { pathname } } = history;
      expect(pathname).toBe('/projects');
    });

  it('Verifica se o componente "Projects" é renderizado após o direcionamento', () => {
    renderWithRouter(<App />);

    const linkProjetos = screen.getByRole('link', { name: /Projetos/i });
    userEvent.click(linkProjetos);

    const projectsElement = screen.getByRole(
      'heading', { level: 2, name: 'Estou no componente Projects' },
    );
    expect(projectsElement).toBeInTheDocument();
  });

  it('Verifica se ao clicar no link "Contato" é direcionado para o caminho "/contact',
    () => {
      const { history } = renderWithRouter(<App />);

      const linkContato = screen.getByRole('link', { name: /Contato/i });
      userEvent.click(linkContato);

      const { location: { pathname } } = history;
      expect(pathname).toBe('/contact');
    });

  it('Verifica se o componente "Contact" é renderizado após o direcionamento', () => {
    renderWithRouter(<App />);

    const linkContato = screen.getByRole('link', { name: /Contato/i });
    userEvent.click(linkContato);

    const contactElement = screen.getByRole(
      'heading', { level: 2, name: 'Estou no componente Contact' },
    );
    expect(contactElement).toBeInTheDocument();
  });

  it('Verifica se o componente "NotFound" é renderizado quando o caminho for inexistente',
    () => {
      const { history } = renderWithRouter(<App />);

      history.push('/not-found');

      const notFoundElement = screen.getByRole(
        'heading', { level: 2, name: 'Página não encontrada' },
      );
      expect(notFoundElement).toBeInTheDocument();
    });
});

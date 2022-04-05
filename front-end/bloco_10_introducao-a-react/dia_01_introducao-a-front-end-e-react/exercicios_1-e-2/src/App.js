import React from 'react';
import './App.css';

/* const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['Participar do momento inicial', 'Consumir o conteúdo do course', 'Participar da aula ao vivo', 'Fazer os exercícios', 'Preencher o forms', 'Participar do fechamento']

function App() {
  return (
    <div className="App">
      <ul>
        { tasks.map((task) => Task(task)) }
      </ul>
    </div>
  );
} */


const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const tasks = ['Participar do momento inicial', 'Consumir o conteúdo do course', 'Participar da aula ao vivo', 'Fazer os exercícios', 'Preencher o forms', 'Participar do fechamento']

class App extends React.Component {
  render() {
    return (
      <ul>{ tasks.map((task) => Task(task)) }</ul>
    );
  }
}

export default App;

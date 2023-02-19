import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      dogImage: '',
      dogName: '',
      dogArray: [],
    };

    this.url = 'https://dog.ceo/api/breeds/image/random';
  }

  componentDidMount() {
    if (localStorage.getItem('dogImage')) {
      return this.getDogs();
    }
    return this.fetchDogImage();
  }

  shouldComponentUpdate(_nextProps, nextState) {
    if (nextState.dogImage.includes('terrier')) {
      return false;
    }
    return true;
  }

  componentDidUpdate() {
    const { dogName, loading, dogImage } = this.state;
    if (dogName.length === 0) {
      const dogNameUrl = dogImage.split('/')[4];
      if (!loading) {
        alert(dogNameUrl);
      }
    }
  }

  getDogs() {
    const dogArray = JSON.parse(localStorage.getItem('dogImage'));
    const dog = dogArray[dogArray.length - 1];
    const { dogImage } = dog;
    this.setState({ dogArray, dogImage, loading: false });
  }

  async fetchDogImage() {
    this.setState({ loading: true });
    const response = await fetch(this.url);
    const data = await response.json();
    this.setState({
      dogImage: data.message,
      loading: false,
    });
  }

  saveDog() {
    const { dogImage, dogName, dogArray } = this.state;
    const dog = { dogImage, dogName };
    const newDogArray = [...dogArray, dog];
    this.setState({ dogArray: newDogArray }, () => this.setState({ dogName: '' }));
    localStorage.setItem('dogImage', JSON.stringify(newDogArray));
  }

  changeRender() {
    const { loading, dogImage, dogName } = this.state;
    if (loading) {
      return (<span>Loading...</span>);
    }
    return (
      <>
        <div>
          <button
            type="button"
            onClick={ () => this.fetchDogImage() }
          >
            Next Dog
          </button>
          <label htmlFor="name">
            Name of dog:
            <input
              id="name"
              type="text"
              value={ dogName }
              onChange={ (event) => this.setState({ dogName: event.target.value }) }
            />
          </label>
          <button
            type="button"
            onClick={ () => this.saveDog() }
          >
            Save Dog
          </button>
        </div>
        <div>
          <img src={ dogImage } alt="dog" />
        </div>
      </>
    );
  }

  render() {
    return (
      <div className="App">
        { this.changeRender() }
      </div>
    );
  }
}

export default App;

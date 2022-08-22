import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import { moveCar } from './redux/actionsCreator';

function Cars({
  redCar, blueCar, yellowCar, moveCar,
}) {
  return (
    <div>
      <div>
        <img className={redCar ? 'car-right' : 'car-left'} src={carRed} alt="red car" />
        <button
          onClick={() => moveCar('red', !redCar)}
          type="button"
        >
          Move
        </button>
      </div>
      <div>
        <img className={blueCar ? 'car-right' : 'car-left'} src={carBlue} alt="blue car" />
        <button
          onClick={() => moveCar('blue', !blueCar)}
          type="button"
        >
          Move
        </button>
      </div>
      <div>
        <img className={yellowCar ? 'car-right' : 'car-left'} src={carYellow} alt="yellow car" />
        <button
          onClick={() => moveCar('yellow', !yellowCar)}
          type="button"
        >
          Move
        </button>
      </div>
    </div>
  );
}

Cars.propTypes = {
  moveCar: PropTypes.func.isRequired,
  blueCar: PropTypes.bool.isRequired,
  redCar: PropTypes.bool.isRequired,
  yellowCar: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  redCar: state.reducerCar.cars.red,
  blueCar: state.reducerCar.cars.blue,
  yellowCar: state.reducerCar.cars.yellow});

const mapDispatchToProps = (dispatch) => ({
  moveCar: (car, move) => dispatch(moveCar(car, move)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cars);

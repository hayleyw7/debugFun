import '../css/style.css';
import { $ } from './utils';

const display = $('#display');
const incrementBtn = $('#increment');
const decrementBtn = $('#decrement');

let state = {
  displayValue: 0,
};

const renderNewValue = (renderState) => {
  display.innerHTML = `<h1>${renderState.displayValue}</h1>`;
}

const setState = (newState) => {
  state = {
    ...state,
    ...newState,
  };
  renderNewValue(state);
}

const increment = () => {
  setState({ displayValue: state.displayValue++ });
}

const decrement = () => {
  setState({ displayValue: state.displayValue-- });
}

const init = () => {
  setState(state);
  incrementBtn.addEventListener('click', increment);
  decrementBtn.addEventListener('click', decrement);
}

init();

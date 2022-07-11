function rangeSlider() {
  const input = document.querySelector('.range-slider input');
  const value = document.querySelector('.range-slider__value');

  input.addEventListener('input', (e) => {
    value.innerHTML = `${e.target.value}%`;
  });
}

export default rangeSlider;

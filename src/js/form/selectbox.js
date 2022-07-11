function selectbox() {
  const selectBox = document.querySelector('.selectbox');
  const dropdown = selectBox.querySelector('.selectbox__dropdown');
  const deflt = selectBox.querySelector('.selectbox__default');
  const options = selectBox.querySelector('.selectbox__options');
  const labels = options.querySelectorAll('label');

  labels.forEach((label) => {
    label.addEventListener('click', (e) => {
      deflt.innerHTML = e.target.innerHTML;
      selectBox.classList.toggle('selectbox_open');
    });
  });

  selectBox.addEventListener('click', () => {
    selectBox.classList.toggle('selectbox_open');
  });

  selectBox.addEventListener('mouseleave', () => {
    selectBox.classList.remove('selectbox_open');
  });
}

export default selectbox;

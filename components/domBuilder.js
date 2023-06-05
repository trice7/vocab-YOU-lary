import renderToDom from '../utils/render';

const domBuilder = () => {
  const domString = `
  <div id='nav'></div>
  <div id='page-container'>
    <div id='card-area'></div>
    <div id='form-area'></div>
  </div>
  `;
  renderToDom('#app', domString);
};

export default domBuilder;

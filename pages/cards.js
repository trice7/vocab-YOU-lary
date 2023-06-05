import renderToDom from '../utils/render';
import clearAll from '../utils/clearPage';

const vocabCard = (arr) => {
  clearAll();
  let domString = '';

  arr.forEach((item) => {
    domString += `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">${item.category}</h6>
          <p class="card-text">${item.content}</p>
          <a href="#" class="card-link" id="edit-card-btn--${item.firebaseKey}">Edit</a>
          <a href="#" id="del-card-btn--${item.firebaseKey}" class="card-link">Delete</a>
        </div>
      </div>
        `;
  });
  renderToDom('#card-area', domString);
};

export default vocabCard;

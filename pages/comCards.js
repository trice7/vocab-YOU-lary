import renderToDom from '../utils/render';
import clearAll from '../utils/clearPage';

const comCard = (arr, user) => {
  clearAll();
  let domString = '';

  arr.forEach((item) => {
    let linkString = '';

    if (item.uid === user.uid) {
      linkString = `<a href="#" class="card-link" id="edit-card-btn--${item.firebaseKey}">Edit</a>
      <a href="#" id="del-card-btn--${item.firebaseKey}" class="card-link">Delete</a>`;
    }
    if (item.uid !== user.uid) {
      linkString = `<a href="#" class="card-link" id="copy-card-btn--${item.firebaseKey}">Add to Collection</a>`;
    }

    domString += `
      <div class="card" style="width: 18rem;">
        <div class="card-header">
          ${item.category}
        </div>
        <div class="card-body">
          <h5 class="card-title" id="comm-card-title">${item.title}</h5>
          <p class="card-text" id="comm-card-content">${item.content}</p>
          ${linkString}
        </div>
      </div>
        `;
  });
  renderToDom('#card-area', domString);
};

export default comCard;

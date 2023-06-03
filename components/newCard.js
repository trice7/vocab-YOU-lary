import clearAll from '../utils/clearPage';
import renderToDom from '../utils/render';

const newCard = () => {
  clearAll();
  const domString = `
  <form class="row g-3">
    <div class="col-md-6">
      <label for="card-title" class="form-label">Title</label>
      <input type="text" class="form-control" id="card-title" placeholder="What is your cards name?">
    </div>
    <div class="col-md-6">
      <label for="card-category" class="form-label">Category</label>
      <input type="text" class="form-control" id="card-category">
    </div>
    <div class="col-12">
      <label for="card-body" class="form-label">Body</label>
      <input type="text" class="form-control" id="card-body" placeholder="Type out the card contents.">
    </div>
    <button id="submit-card" type="submit" class="btn btn-primary">Submit</button>
  </form>
  `;

  renderToDom('#form-area', domString);
};

export default newCard;

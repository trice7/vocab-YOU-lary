import { getUserCards } from '../api/cards';
import vocabCard from '../pages/cards';

const searchEvent = (user) => {
  document.querySelector('#app').addEventListener('keyup', (e) => {
    e.preventDefault();

    const keyEvent = e.target.value.toLowerCase();
    let result;
    getUserCards(user.uid).then((data) => {
      result = data.filter((item) => item.title.toLowerCase().includes(keyEvent)
        || item.category.toLowerCase().includes(keyEvent)
        || item.content.toLowerCase().includes(keyEvent));

      console.warn(result);
      vocabCard(result);
    });
  });
};

export default searchEvent;

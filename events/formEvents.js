import { createCard, getUserCards, updateCard } from '../api/cards';
import vocabCard from '../pages/cards';

const formEvents = (user) => {
  document.querySelector('#page-container').addEventListener('click', (e) => {
    e.preventDefault();
    // console.warn('submit listener worked');
    // Submitting a new card
    if (e.target.id.includes('submit-card')) {
      console.warn('Clicked Submit Card', e.target.id);
      const payload = {
        title: document.querySelector('#card-title').value,
        category: document.querySelector('#card-category').value,
        content: document.querySelector('#card-body').value,
        uid: user.uid,
      };

      createCard(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateCard(patchPayload).then(() => {
          getUserCards(user.uid).then(vocabCard);
        });
      });
    }
  });
};

export default formEvents;

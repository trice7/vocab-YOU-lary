import newCard from '../components/newCard';
import clearAll from '../utils/clearPage';
import vocabCard from '../pages/cards';
import {
  delCard, getAllCards, getFavoriteCards, getSingleCard, getUserCards
} from '../api/cards';
import comCard from '../pages/comCards';

const domEvents = (user) => {
  document.querySelector('#app').addEventListener('click', (e) => {
    e.preventDefault();

    // Click the title to display user cards
    if (e.target.id.includes('home')) {
      clearAll();
      getUserCards(user.uid).then((data) => vocabCard(data));
    }

    // Submitting a new card
    if (e.target.id.includes('create-card')) {
      // console.warn('Clicked Create Card');
      newCard();
    }

    // Delete button on card. Should warn and remove upon confirming.
    if (e.target.id.includes('del-card-btn')) {
      // eslint-disable-next-line
      if (window.confirm('Are you sure? This is irreversible')) {
        const [, firebaseKey] = e.target.id.split('--');

        delCard(firebaseKey).then(() => {
          getUserCards(user.uid).then(vocabCard);
        });
      }
    }

    // Edit button on card functionality. Should display form.
    if (e.target.id.includes('edit-card-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleCard(firebaseKey).then((card) => newCard(card));
    }

    // Favorite should show only user cards where favorite is set to true

    if (e.target.id.includes('favorite')) {
      console.warn('clicked Favorite button');
      getFavoriteCards(user.uid).then((data) => vocabCard(data));
    }

    // Community button should display all cards with "isPrivate" set to false.
    if (e.target.id.includes('community')) {
      console.warn('Clicked the Community Button');
      getAllCards().then((data) => comCard(data, user));
    }

    // Sorting conditionals below. Each options should sort based on the display text.
    if (e.target.id.includes('alpha')) {
      console.warn('Sorthing Alphabetically');
      getUserCards(user.uid).then((data) => {
        const sorted = data.sort((a, b) => {
          if (a.title > b.title) {
            return 1;
          }
          if (a.title < b.title) {
            return -1;
          }
          return 0;
        });
        vocabCard(sorted);
      });
    }

    // Sort by Oldest
    if (e.target.id.includes('oldest')) {
      console.warn('sorting by oldest');
      getUserCards(user.uid).then((data) => {
        const sorted = data.sort((a, b) => {
          if (a.created > b.created) {
            return 1;
          }
          if (a.created < b.created) {
            return -1;
          }
          return 0;
        });
        vocabCard(sorted);
      });
    }

    // Sort newest first
    if (e.target.id.includes('newest')) {
      console.warn('sorting by newest');
      getUserCards(user.uid).then((data) => {
        const sorted = data.sort((a, b) => {
          if (a.created < b.created) {
            return 1;
          }
          if (a.created > b.created) {
            return -1;
          }
          return 0;
        });
        vocabCard(sorted);
      });
    }

    // Sorting Category
    if (e.target.id.includes('cat-sort')) {
      getUserCards(user.uid).then((data) => {
        const sorted = data.sort((a, b) => {
          if (a.category > b.category) {
            return 1;
          }
          if (a.category < b.category) {
            return -1;
          }
          return 0;
        });
        vocabCard(sorted);
      });
    }
  });
};

export default domEvents;

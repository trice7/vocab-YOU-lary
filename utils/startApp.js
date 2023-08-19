import domBuilder from '../components/domBuilder';
import navbar from '../components/navbar';
import logoutButton from '../components/logoutButton';
import { getUserCards } from '../api/cards';
import vocabCard from '../pages/cards';
import formEvents from '../events/formEvents';
import domEvents from '../events/domEvents';
import searchEvent from '../events/searchEvents';

const startApp = (user) => {
  domBuilder();
  navbar();
  domEvents(user);
  formEvents(user);
  searchEvent(user);
  logoutButton();

  getUserCards(user.uid).then((data) => vocabCard(data));
};

export default startApp;

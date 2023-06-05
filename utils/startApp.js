import domBuilder from '../components/domBuilder';
import navbar from '../components/navbar';
import logoutButton from '../components/logoutButton';
// import clearAll from './clearPage';
import { getUserCards } from '../api/cards';
import vocabCard from '../pages/cards';
import formEvents from '../events/formEvents';
import domEvents from '../events/domEvents';

const startApp = (user) => {
  // clearAll();
  domBuilder();
  navbar();
  domEvents(user);
  formEvents(user);
  logoutButton();

  getUserCards(user.uid).then((data) => vocabCard(data));
};

export default startApp;

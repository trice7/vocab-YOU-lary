import firebase from 'firebase/app';
import 'firebase/auth';
import loginButton from '../components/loginButton';
import client from './client';
import startApp from './startApp';
import clearAll from './clearPage';

const ViewDirectorBasedOnUserAuthStatus = () => {
  firebase.initializeApp(client);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in do something...
      startApp(user);
    } else {
      // person is NOT logged in
      clearAll();
      loginButton();
    }
  });
};

export default ViewDirectorBasedOnUserAuthStatus;

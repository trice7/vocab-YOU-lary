import { signOut } from '../utils/auth';

const logoutButton = () => {
  const domString = '<button id="google-auth" class="btn btn-danger">SIGNOUT</button>';
  document.querySelector('#signout-btn').innerHTML = (domString);
  document.querySelector('#google-auth').addEventListener('click', signOut);
};

export default logoutButton;

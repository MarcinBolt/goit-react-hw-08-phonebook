import Notiflix from 'notiflix';

const notifyUserRegisterSuccess = () => {
  Notiflix.Report.success(
    'Registration Success!',
    'Now You have an account in Phonebook.',
    'Have fun!'
  );
};
const notifyContactExist = name => {
  Notiflix.Report.info(
    'Contact exist.',
    `${name} is already in your Contacts. Change Contact name and try again.`,
    'Ok!'
  );
};

const notifyRegistrationFailure = () => {
  Notiflix.Report.failure(
    'Registration Fail!ed.',
    'This User already exist or too short Username / e-mail / password (each must have at least 7 characters).',
    'Try again'
  );
};

const notifyLoginFailure = () => {
  Notiflix.Report.failure(
    'Something goes wrong.',
    'Do You have an account? Check if Username and Password are correct. Please try again or contact our service.',
    'Try again'
  );
};

const notification = {
  notifyUserRegisterSuccess,
  notifyContactExist,
  notifyRegistrationFailure,
  notifyLoginFailure,
};

export default notification;

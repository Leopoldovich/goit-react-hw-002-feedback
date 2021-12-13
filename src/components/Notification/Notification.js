import PropTypes from 'prop-types';
import s from './Notification.module.css';

function Notification({ message }) {
  return <p className={s.text}>{message}</p>;
}

Notification.protoType = {
  message: PropTypes.string,
};

export default Notification;

import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ title, good, neutral, bad, total, positivePercentage }) {
  return (
    <section>
      <h2 className={s.title}>{title}</h2>
      <div>
        <p className={s.description}>Good: {good}</p>
        <p className={s.description}>Neutral: {neutral}</p>
        <p className={s.description}>Bad: {bad}</p>
        <p className={s.description}>Total: {total}</p>
        <p className={s.description}>
          Positive feedback: {positivePercentage}%
        </p>
      </div>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  //positivePercentage: PropTypes.oneOf([NaN, number])
};

export default Statistics;

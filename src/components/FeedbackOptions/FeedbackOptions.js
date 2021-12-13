import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={s.list}>
      {options.map(element => {
        return (
          <button
            type="button"
            className={s.button}
            key={element}
            onClick={() => onLeaveFeedback(element)}
          >
            {element}
          </button>
        );
      })}
    </div>
  );
}

FeedbackOptions.protoType = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;

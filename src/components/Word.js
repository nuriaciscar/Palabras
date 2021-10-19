import PropTypes from "prop-types";

const Word = ({ word: { text }, actionOnClick }) => {
  return (
    <li className="word" onClick={actionOnClick}>
      {text}
    </li>
  );
};

Word.propTypes = {
  word: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    maxOcurrences: PropTypes.number.isRequired,
    isProgrammingLanguage: PropTypes.bool.isRequired,
  }).isRequired,
  actionOnClick: PropTypes.func.isRequired,
};

export default Word;

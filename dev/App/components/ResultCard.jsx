import Icon from "./assets/phone-icon.svg";

const createMarkup = name => {
  return { __html: name };
};

const ResultCard = ({ result, name }) => {
  return (
    <div className="result-card">
      <div>{result.category}</div>

      <div className="img-name-container">
        <img src={Icon} />
        <div
          className="highlighted"
          dangerouslySetInnerHTML={createMarkup(name)}
        />
      </div>
    </div>
  );
};

export default ResultCard;

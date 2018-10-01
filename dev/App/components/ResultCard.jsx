import Icon from "./assets/phone-icon.svg";

const ResultCard = ({ result }) => {
  return (
    <div className="result-card">
      <div>{result.category}</div>

      <div className="img-name-container">
        <img src={Icon} />
        <p>{result.name}</p>
      </div>
    </div>
  );
};

export default ResultCard;

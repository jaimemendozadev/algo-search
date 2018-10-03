import Icon from "./assets/phone-icon.svg";

const checkHighlight = result => {
  const innerHTML = result._highlightResult.name.value;

  if (result.name != innerHTML) {
    const element = document.createElement("span");
    element.innerHTML = innerHTML;
    return element;
  }

  return result.name;
};

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

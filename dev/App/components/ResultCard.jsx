import PhoneIcon from "./assets/phone-icon.svg";

const createMarkup = name => {
  return { __html: name };
};

const ResultCard = ({ result, name }) => {
  const appName = name.length > 20 ? `${name.slice(0, 21)}...` : name;

  return (
    <div className="result-card">
      <div className="category-rank-container">
        <div dangerouslySetInnerHTML={createMarkup(result.category)} />
        <div>Rank: {result.rank}</div>
      </div>

      <div className="img-name-container">
        <a href={result.link} target="_blank" rel="noopener noreferrer">
          <img src={PhoneIcon} />
        </a>
        <a
          href={result.link}
          target="_blank"
          rel="noopener noreferrer"
          className="highlighted"
          dangerouslySetInnerHTML={createMarkup(appName)}
        />
      </div>
    </div>
  );
};

export default ResultCard;

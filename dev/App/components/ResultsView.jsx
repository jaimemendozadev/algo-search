import ResultCard from "./ResultCard.jsx";

const ResultsView = ({ hits }) => {
  return (
    <div className="results-view-container">
      {hits.map(result => {
        const name = result._highlightResult.name.value;
        return <ResultCard key={result.objectID} name={name} result={result} />;
      })}
    </div>
  );
};

export default ResultsView;

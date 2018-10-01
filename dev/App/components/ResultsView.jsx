import ResultCard from "./ResultCard.jsx";

const ResultsView = ({ hits }) => {
  return (
    <div className="results-view-container">
      {hits.map(result => (
        <ResultCard key={result.objectID} result={result} />
      ))}
    </div>
  );
};

export default ResultsView;

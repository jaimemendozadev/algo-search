import { connect } from "inferno-redux";
import Spinner from "./Spinner.jsx";
import ErrorMessage from "./ErrorMessage.jsx";
import ResultCard from "./ResultCard.jsx";

const ResultsView = ({ hits, appStatus }) => {
  const { appStarted, fetchingData } = appStatus;
  if (appStarted === false || fetchingData === true) {
    return <Spinner />;
  }

  if (hits.length === 0) {
    return (
      <ErrorMessage
        msg={"There were no matching results. Please try a different search."}
      />
    );
  }
  return (
    <div className="results-view-container">
      {hits.map(result => {
        const name = result._highlightResult.name.value;
        return <ResultCard key={result.objectID} name={name} result={result} />;
      })}
    </div>
  );
};

const mapStateToProps = ({ searchResults, appStatus }) => {
  return {
    hits: searchResults.hits,
    appStatus
  };
};

export default connect(
  mapStateToProps,
  null
)(ResultsView);

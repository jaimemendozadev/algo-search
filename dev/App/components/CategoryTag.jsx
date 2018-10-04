export const CategoryTag = ({ name, count, isRefined, callback }) => (
  <div
    onClick={() => callback(name)}
    className={`category-tag ${isRefined ? "facet-highlight" : ""}`}
  >
    {name}: {count}
  </div>
);

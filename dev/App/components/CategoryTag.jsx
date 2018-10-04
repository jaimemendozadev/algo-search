export const CategoryTag = ({
  name,
  count,
  currentFacet,
  facetNameKey,
  callback
}) => (
  <div
    onClick={() => callback(name)}
    className={`category-tag ${facetNameKey === name ? "facet-highlight" : ""}`}
  >
    {name}: {count}
  </div>
);

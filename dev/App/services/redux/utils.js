export const calculatePagination = (page, nbPages) => {
  const ActualPage = page + 1;
  const TotalPages = nbPages + 1;

  let minimum;
  let high;

  /*
    
    ActualPage = page + 1

    if ActualPage <= 10, 
    baseNumber is 1, because it's 1 - 10

    if ActualPage >= 11 && <= 100
    divide by 10 to get baseNumber
    */

  if (ActualPage <= 10) {
    minimum = 1;
    high = 10;

    return [minimum, high];
  }

  if (ActualPage >= 11 && ActualPage <= 100) {
    // baseNumber
    const baseNumber = Math.floor(ActualPage / 10);

    let possibleHigh = (baseNumber + 1) * 10;

    if (possibleHigh <= TotalPages) {
      high = possibleHigh;
      min = baseNumber * 10 + 1;
    } else {
      let possibleMin = TotalPages - 10;

      high = TotalPages;
      min = possibleMin >= 1 ? possibleMin : 1;
    }
  }
};

const payloadMissingData = payload => {
  if (!payload.name || !payload.name.length) {
    return true;
  }

  if (!payload.image || !payload.image.length) {
    return true;
  }
  if (!payload.link || !payload.link.length) {
    return true;
  }
  if (!payload.category || !payload.category.length) {
    return true;
  }

  if (!payload.rank || !payload.rank.length) {
    return true;
  }

  return false;
};

module.exports = {
  payloadMissingData
};

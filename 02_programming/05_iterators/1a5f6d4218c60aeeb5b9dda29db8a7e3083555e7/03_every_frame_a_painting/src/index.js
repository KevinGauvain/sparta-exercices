function canTakeArtPieces(pieces) {
  const filtre1 = pieces.every((pieces) => {
    if (pieces.type === "painting") {
      return true;
    } else {
      return false;
    }
  });
  return filtre1;
}

// Do not remove the following line, it is for tests
module.exports = canTakeArtPieces;

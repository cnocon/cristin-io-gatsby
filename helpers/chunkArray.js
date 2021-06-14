const chunkArray = (array, size) => {
  if (!array) return [];
  const firstChunk = array.slice(0, size);
  if (!firstChunk.length) return array; // base case/terminates recursion
  return [firstChunk].concat(chunkArray(array.slice(size, array.length), size));
}

exports.chunkArray = chunkArray;
function chunkArrayInGroups(array, chunkSize) {
  const Arrlength=Math.ceil(array.length / chunkSize)
  const arr=(j, k) => array.slice(k * chunkSize, k * chunkSize + chunkSize);
  return Array.from({length:Arrlength},arr)
 } 

 
export {
  chunkArrayInGroups,
};

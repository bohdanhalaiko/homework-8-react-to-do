let databaseUniqueId = new Set();
export default function idGenerator() {
  let newId;
  const preSize = databaseUniqueId.size;
  while (preSize === databaseUniqueId.size) {
    newId = +(Math.random() * 1e10).toFixed(0);
    databaseUniqueId.add(newId);
  }
  console.log(databaseUniqueId);
  return newId;
}
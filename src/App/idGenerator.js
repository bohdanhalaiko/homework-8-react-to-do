sessionStorage.setItem('dataUniqueId', JSON.stringify([]));
export default function idGenerator() {
  let newId;
  let dataUniqueId = new Set(JSON.parse(sessionStorage.getItem('dataUniqueId')));
  const preSize = dataUniqueId.size;
  while (preSize === dataUniqueId.size) {
    newId = (Math.random() * 1e6).toFixed().padStart(6, 0);
    dataUniqueId.add(newId);
  }
  sessionStorage.setItem('dataUniqueId', JSON.stringify([...dataUniqueId]));
  console.log(sessionStorage);
  return newId;
}
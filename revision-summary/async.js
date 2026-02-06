async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  return await res.json();
}

getData()
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

export const getData = async (id) => {
  return await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
  .then(response => {
    if(response.ok) return  response.json();
    return Promise.reject('Error sin data');
  })
}

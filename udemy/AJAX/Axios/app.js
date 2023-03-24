// axios
//   .get("https://swapi.dev/api/people/1/")
//   .then((res) => {
//     console.log("RESPONSE: ", res);
//   })
//   .catch((e) => {
//     console.log("ERROR! ", e);
//   });

// const getStarWarsPerson = async (id) => {
//   try {
//     const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
//     console.log(res.data);
//   } catch (e) {
//     console.log("ERROR", e);
//   }
// };

// getStarWarsPerson(5);
// getStarWarsPerson(10);


// Axios :- A JS library for making HTTP requests

// axios.get("https://swapi.dev/api/people/1/")
// .then(res => {
//   console.log("Response: ", res)
// })
// .catch(e => {
//   console.log(e)
// })


const getStarWarPerson = async (id) => {
  try {
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
    console.log(res.data)
  } catch (err) {
    console.log(err.message)
  }
}

getStarWarPerson(5);
getStarWarPerson(10);
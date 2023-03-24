// fetch("https://swapi.dev/api/people/1/")
//   .then((res) => {
//     console.log("RESOLVED!", res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log("ERROR!", e);
//   });

// // fetch("https://swapi.dev/api/people/1/")
// //   .then((res) => {
// //     console.log("RESOLVED!", res);
// //     return res.json();
// //   })
// //   .then((data) => {
// //     console.log(data);
// //     return fetch("https://swapi.dev/api/people/2/");
// //   })
// //   .then((res) => {
// //     console.log("SECOND REQUEST RESOLVED!!!");
// //     return res.json();
// //   })
// //   .then((data) => {
// //     console.log(data);
// //   })
// //   .catch((e) => {
// //     console.log("ERROR!", e);
// //   });

// const loadStarWarsPeople = async () => {
//   try {
//     const res = await fetch("https://swapi.dev/api/people/1/");
//     const data = await res.json();
//     console.log(data);
//     const res2 = await fetch("https://swapi.dev/api/people/2/");
//     const data2 = await res2.json();
//     console.log(data2);
//   } catch (e) {
//     console.log("ERROR!!!", e);
//   }
// };

// loadStarWarsPeople();

// fetch it is a method for fetch any data from api it returns a promise in response

// fetch("https://swapi.dev/api/people/1/")
//     .then(res => {
//         console.log("RESOLVED!!", res)
//        return res.json()
//     })
//     .then(data=> document.querySelector("h1").innerHTML = JSON.stringify(data))
//     .catch(err => {
//         console.log("Error", err)
//     })

// fetch("https://swapi.dev/api/people/1/")
//     .then(res => {
//         console.log("RESOLVED!!", res)
//         return res.json()
//     })
//     .then(data => {
//         console.log(data)
//         return fetch("https://swapi.dev/api/people/2/")
//     })
//     .then(res => {
//         console.log("second request resolved")
//         return res.json()

//     })
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.log("Error", err)
//     })

const loadStarWarsPeople = async () => {
    try {
        const res = await fetch("https://swapi.dev/api/people/1/");
        const data = await res.json();
        console.log(data)
        const res2 = await fetch("https://swapi.dev/api/people/2/");
        const data2 = await res2.json();
        console.log(data2)
    } catch (err) {
        console.log("ERROR!!")
    }
}

loadStarWarsPeople();
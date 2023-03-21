// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}
// THE PROMISE VERSION 
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

async function makeTwoRequests(){
    let data1 = await fakeRequestPromise('/page1');
    console.log(data1);
}

makeTwoRequests()

// fakeRequestCallback('books.com',
//     function (response) {
//         console.log("It worked!!");
//         console.log(response);
//         fakeRequestCallback('books.com/page2',
//             function (response) {
//                 console.log("It Worked Again..");
//                 console.log(response);
//                 fakeRequestCallback('books.com/page3',
//                     function (response) {
//                         console.log("It Worked Again.. (3rd request)");
//                         console.log(response);
//                     },
//                     function (err) {
//                         console.log("Error (3rd request)", err);
//                     })
//             },
//             function (err) {
//                 console.log("Error (2nd request)", err);
//             })
//     }, function (err) {
//         console.log("ERROR!!!!", err);

//     });




// let request = fakeRequestPromise('yelp.com/api/coffee');
// request.then(() => {
//     console.log("promise resolved")
//     console.log("it worked")
// })
//     .catch(err => {
//         console.log("Promise Rejected")
//         console.log('Ohhh No... ERROR!!', err)
//     });


// fakeRequestPromise('yelp.com/coffee/page1')
//     .then(() => {
//         console.log('IT Worked!! (page1)')
//         fakeRequestPromise('yelp.com/coffee/page2')
//             .then(() => {
//                 console.log('IT Worked!! (page2)')
//                 fakeRequestPromise('yelp.com/coffee/page3')
//                     .then(() => {
//                         console.log('IT Worked!! (page3)')
//                     })
//                     .catch(() => {
//                         console.log("Oh No, ERROER!!! (page3)")
//                     })
//             })
//             .catch(() => {
//                 console.log("Oh No, ERROER!!! (page2)")
//             })
//     })
//     .catch(() => {
//         console.log("Oh No, ERROER!!! (page1)")
//     })

    // fakeRequestPromise('yelp.com/api/coffee/page1')
    // .then((data)=> {
    //     console.log("It Worked!!! (page1)")
    //     console.log(data)
    //     return fakeRequestPromise('yelp.com/api/coffee/page2')
    // })
    // .then((data)=>{
    //     console.log("It Worked!!! (page2)")
    //     console.log(data)
    //     return fakeRequestPromise('yelp.com/api/coffee/page3')
    // })
    // .then((data)=>{
    //     console.log("It Worked!!! (page3)")
    //     console.log(data)
    //     return fakeRequestPromise('yelp.com/api/coffee/page4')
    // })
    // .then((data)=>{
    //     console.log("It Worked!!! (page4)")
    //     console.log(data)
    //     // return fakeRequestPromise('yelp.com/api/coffee/page4')
    // })
    // .catch((err)=>{
    //     console.log("OH NO, A request Failed")
    //     console.log(err)
    // })

// arr.map(function (element) {

// })



// makeRequest(() => {
//     makeRequest(() => {
//         makeRequest(() => {

//         },
//             () => {

//             })

//     },
//         () => {

//         })

// },
//     () => {

//     })

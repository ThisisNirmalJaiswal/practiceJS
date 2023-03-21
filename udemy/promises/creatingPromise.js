const fakeRequest = (url) => {
    return new Promise((resolve, reject)=>{
        const rand = Math.random();
        setTimeout(()=>{
           if(rand > 0.7){
            resolve("your fake data Here!");
           }else{
            reject("Request ERROR!")
           }
        }, 1000)
    })
}

fakeRequest('/dogs/1')
.then((data)=>{
    console.log("Done with request!")
    console.log(data)
})
.catch((err)=>{
    console.log("OH No!", err)
})
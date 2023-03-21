const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if (rand > 0.7) {
                resolve("your fake data Here!");
            } else {
                reject("Request ERROR!")
            }
        }, 1000)
    })
}


async function makeTwoRequests() {
    try {
        let data1 = await fakeRequest('/page1')
        console.log(data1)
        let data2 = await fakeRequest('/page2')
        console.log(data2)
    } catch (e) {
        console.log('Caugth an error');
        console.log('error is here: ', e)
    }

}

makeTwoRequests();

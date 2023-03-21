// stop without using clearInterval
let count = 0;

const intervalId = setInterval(() => {
    count++;
    console.log('Count:', count);

    if (count >= 5) {
        clearInterval(intervalId);
    }
}, 1000);

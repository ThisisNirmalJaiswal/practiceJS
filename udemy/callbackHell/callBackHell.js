
// callbackhell

// setTimeout(()=>{
//     document.body.style.backgroundColor = 'violet';
//     setTimeout(()=>{
//         document.body.style.backgroundColor = 'indigo'
//         setTimeout(()=>{
//             document.body.style.backgroundColor = 'blue'
//             setTimeout(()=>{
//                 document.body.style.backgroundColor = 'green'
//                 setTimeout(()=>{
//                     document.body.style.backgroundColor = 'orange'
//                     setTimeout(()=>{
//                         document.body.style.backgroundColor = 'red'
//                     },1000);
//                 },1000);
//             },1000);
//         },1000);
//     },1000);
// },1000);

// modify
// const delayedColorChange = (newColor, delay, doNext) => {
//     setTimeout(()=>{
//         document.body.style.backgroundColor = newColor;
//         doNext();
//     },delay);
// }
// delayedColorChange('pink', 1000, () => {
//     delayedColorChange('red', 1000, () => {
//         delayedColorChange('blue', 1000, () => {
//             delayedColorChange('orange', 1000, () => {
//                 delayedColorChange('yellow', 1000);
//             });
//         });
//     });
// });


// using promise to avoid callBack Hell
const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

// delayedColorChange('red', 1000)
//     .then(() => delayedColorChange('orange', 1000))
//     .then(() => delayedColorChange('yellow', 1000))
//     .then(() => delayedColorChange('green', 1000))
//     .then(() => delayedColorChange('blue', 1000))
//     .then(() => delayedColorChange('magenta', 1000))


    async function rainbow(){
        await delayedColorChange('red', 1000)
        await delayedColorChange('blue', 1000)
        await delayedColorChange('orange', 1000)
        await delayedColorChange('pink', 1000)
        await delayedColorChange('magent', 1000)
        await delayedColorChange('violet', 1000)
        return "All done!"
    }

    // rainbow().then(() => console.log("End Of Rainbow!"));

    async function printRainbow(){
        await rainbow();
        console.log("End of rainbow")
    }


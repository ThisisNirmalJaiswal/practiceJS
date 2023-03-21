let words = ["alice and bob love laatcode", "i think so too", "this is greaaaaaaaaat thanks very much"];


// console.log(words);
function maxWord(arr){
    let maxEle = "";
    let maxCount = 0;
    let exp = /a/;
    for(let i=0; i<arr.length; i++){
        let count = 0;
        for(let j=0; j<arr[i].length; j++){
            let word = arr[i][j].match(exp);
            if(word){
                count++;
            }
            if(maxCount < count){
                maxCount = count;
                maxEle = arr[i];
            }
        }
    }
    return maxEle;
}
// console.log(...words[0])
console.log(maxWord(words))

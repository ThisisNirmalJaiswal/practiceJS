let arr = [3, 6, 7, 10];

function largestGap(arr){
    // 1st method
    // let min = Math.min(...arr);
    // let max = Math.max(...arr);
    // return max-min;

    let res = 0;
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            if(arr[i] - arr[j] > res){
                res = arr[i] - arr[j];
            }
        }
    }

    return res;
}

console.log(largestGap(arr));


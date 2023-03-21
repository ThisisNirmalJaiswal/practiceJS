const bubbleSort = (arr)=>{
    for(let i=0; i<arr.length-1; i++){
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                // swap
                let temp = arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        
        }
    }
}

let arr = [2,5,1,3,4,9,8,1];

console.log(bubbleSort(arr));
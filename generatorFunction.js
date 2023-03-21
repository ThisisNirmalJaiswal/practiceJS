function * iteratorFunc(){
    let count = 0;
    for(let i=0; i<2; i++){
        count++;
        yield i;
    }
    return count;
}

let iterator = iteratorFunc();
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
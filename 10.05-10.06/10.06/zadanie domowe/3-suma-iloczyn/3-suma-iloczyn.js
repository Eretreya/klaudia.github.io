
console.log([1,2,3,4,5,6].reduce((a,b) => a*b));

console.log([1,2,3,4,5,6].reduce((a,b) => a+b));


const multiArray2 = (arrayFor) => {
    let sum =0;
    let multi = 1;
    for (let i= 0; i < (arrayFor.length -1); i++){
        sum += multiArray2[i];  
    }
    for (let i = 0; i < arrayFor.length; i++){
        multi *= multiArray2[i];
    }
    console.log(sum);
    console.log(multi);
}

multiArray2([1],[2],[3],[4],[5],[6]);

function MultiAdd(multiArr){
    let sumOf = 0;
    let multi = 1;
for (i=0; i < multiArr.length; i++){
    sumOf += multiArr[i];
    multi *= multiArr[i];
}
console.log(sumOf);
console.log(multi);
};
MultiAdd([1,2,3,4,5,6]);
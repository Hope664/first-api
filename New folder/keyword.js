function example(){
    console.log(x)//hoisting
    var x=10;
    if(true) {
        var x = 20;
    }
    console.log(x);
}
example();

if(true){
    let y=5;
    const z=10;
    console.log(y);
console.log(z);
}
const arr = [1,2,3];
arr.push(4);
console.log(arr);

function Add(a,b){
    let sum = a+b;
    return sum;
}

function sub(a,b){
    let sub = a-b;
    return sub; 
}

function mul(a,b){
    let mul = a*b;
    return mul;
}

function divi(a,b){
    let divi = a/b;
    divi = divi.toFixed(2)
    return divi;
}
 
export {Add, sub, mul, divi};

function addNumbers(a:number,b:number){
    return a+b;
}


const addNumbersArrow = (a:number,b:number):string => {
    return `${a + b}`;
}

function multiply(firstnumber:number,secondnumber?:number,base:number = 2){

    return firstnumber*base;

}


const result : number = addNumbers(1,2)
const result2 : string = addNumbersArrow(2,3)
const multiplyresult : number = multiply(6)

console.log(result , result2, multiplyresult);


export{}
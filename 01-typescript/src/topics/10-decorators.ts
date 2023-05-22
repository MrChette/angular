

function classDecorator<T extends {new (...arges:any[]): {}}>(
    constructor: T
){
    return class extends constructor {
        newProperty = 'New Property'
        hello = 'override' ;
    }
}


@classDecorator
class SuperClass {

    public myProperty : string = 'Abc123';

    print(){
        console.log('Hola mundo')
    }
}

console.log(SuperClass);

const myClass = new SuperClass();
console.log(myClass)
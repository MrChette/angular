
export class Person {
    //public name: string;
    //private address: string;

    constructor(
        public firstname : string, 
        public lastname : string, 
        private address:string='No address'
    ){}

}

//export class Hero extends Person{
//    constructor(
//        public elterEgo: string,
//        public age: number,
//        public realName: string
//    ){
//        super(realName,'Mi casita');
//    }
//}

export class Hero {

    //public person : Person;

    constructor(
        public elterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ){
        //this.person = person,
    }
}



const tony = new Person('Tony','Stark','New York')
const ironman = new Hero('IronMan',45, 'Tony',tony);

console.log(ironman)
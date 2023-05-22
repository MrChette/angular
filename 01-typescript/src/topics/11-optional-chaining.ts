
export interface Passenger {
    name: string;
    children?: string[];
}


const passenger1: Passenger = {
    name : 'Nacho',
}

const passenger2: Passenger = {
    name : 'Paco',
    children : ['Pakito','Rufencio'],
}


const returnChildren = (passenger:Passenger):number => {
    
    //Optional Chaining
    const howManyChildren = passenger.children?.length || 0;

    //Not null assertion operator
    //const howManyChildren = passenger.children!.length;
    
    console.log(passenger.name, howManyChildren);

    return howManyChildren;
}

returnChildren(passenger1);
returnChildren(passenger2);


let skils: string[] = ['Bash','Counter','Healing'];


interface Character {
    name : String;
    hp : number;
    skills : string[];
    hometown?: string;
}


const strider:Character = {
    name : 'Strider',
    hp : 100,
    skills: ['Bash','Counter']
}

strider.hometown = 'Jerez';
console.table(strider)

export{};
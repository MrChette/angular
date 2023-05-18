

interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author : string;
    year: number;
}


const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 190,
    song: "Song de paco",
    details: {
        author: 'Paco Cantautor',
        year : 2019,
    }
}

//const song = 'New Song';
//
//const {
//    song:anothersong, 
//    songDuration: duration, 
//    audioVolume:volume,
//    details:{author},
//    /*details:{year}*/
//} = audioPlayer;
//
//const {
//    author:author, 
//    year:year} = audioPlayer.details;


const [,,trunks = 'Not found']: string[] = ['Goku','Vegetta','Trunks'];


console.error(trunks)

console.log()


//console.log('Song : ', anothersong)
//console.log('Duration', duration)
//console.log('Volume :', volume)
//console.log('Autor: ', author)
//console.log('Year : ', year)

export{}
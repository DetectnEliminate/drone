import { gStyle } from "../styles/style";

function RandCordlat() {
    return (Math.random() * (50 - 47 + 1)) + 47;
}
function RandCordlong() {
    return (Math.random() * (36 - 25 + 1)) + 25;
}

export const cord = [        
{        
    latitude: 48.947179, 
    longitude: 24.732664,
},
{
    latitude: RandCordlat(),
    longitude: RandCordlong(),
},
{
    latitude: RandCordlat(),
    longitude: RandCordlong(),
},
{
    latitude: RandCordlat(),
    longitude: RandCordlong(),
},
{        
    latitude: RandCordlat(),
    longitude: RandCordlong(),
},
{
    latitude: RandCordlat(),
    longitude: RandCordlong(),
},
];
export const image = [
{name:'dsd', color: 'purple'},
{name:'frf', color: 'black'},
{name:'fdef'},
{name:''},
{name:''},
{name:''},
{name:''},
{name:''},
{name:''},
{name:''},
{name:''},
];
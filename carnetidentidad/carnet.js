const persona = {
    name: 'Juan',
    job: 'Doctor',
    city: 'Valencia',
    dateOfBirth: 1959
}

const actualYear = 2026

console.log(`Hola, me llamo ${persona.name}, vivo en ${persona.city} y trabajo como ${persona.job}. Tengo ${actualYear - persona.dateOfBirth} años.`)


const battery = 10;

if(battery <= 15){
    console.log("Conecta la bateria!!!")
}else{
    console.log("Tienes carga suficiente")

}

const trafficLight = ""

if(trafficLight === "green") {
    console.log("puedes pasar")
} else if (trafficLight === "yellow"){
    console.log("Precaucion!!")
} else{
    console.log("Stop no puedes pasar")
}





function entrar(edad){
    if (edad > 17) {
        if (edad > 65) {
            console.log("Adelante tienes u descuento del 10 por ser mayor"); 
            
        } else {
            console.log("Adelante puedes pasar porque tienes " + edad + " anios ");  
        }
    } else {
        if (edad > 12) {
            console.log("Adelante pero no puedes beber alcol "+ edad + " anios "); 
            
        } else {
            console.log("Lo sentimos no pudes pasar "+ edad + " anios ");  
        } 
    }

}

for (let i = 8; i <= 80; i++) {
    entrar(i)
}
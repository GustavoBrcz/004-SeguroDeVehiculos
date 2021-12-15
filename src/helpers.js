
// Porcentaje según el año del carro

export function obtenerDiferencia(year) {
    return new Date().getFullYear() - year
}  

// Incremento según la marca del carro

export function calcularMarca(marca) {

    let incremento;
    switch (marca) {
        case "americano":
            incremento = 1.15;
            break;
        case "europeo":
            incremento = 1.30;
            break;
        case "asiatico":
            incremento = 1.05;
            break;
        default:
            break;
    }

    return incremento;

}

// Aumento del porcentaje según el plan

export function calcularPlan(plan) {

    let porcentaje;

    switch (plan) {
        case "basico":
            porcentaje = 1.20;
            break;
        case "completo":
            porcentaje = 1.50;
            break;
        default:
            break;
    }

    return porcentaje;


}

// Colocar la primera letra en Mayúsculas

export function primeraLetra(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}


let saldo = 0

let option;
while (option != 0){
    option = prompt (`Elija su caballo ganador:
1.Thor
2.Thunder
3.Flash
4.Empiece a apostar
5.Retire su apuesta
0.salir`);

switch (option){
    case "1" :
        alert('Usted va a apostar al caballo Thor');
        break;
        case "2" :
        alert('Usted va a apostar al caballo Thunder');
        break;
        case "3" :
        alert('Usted va a apostar al caballo Flash');
        break;
        case "4" :
            const apuesta  = Number(prompt (' ingrese su dinero'));
            saldo += apuesta;
            alert(' dinero  ingresado con exito, su saldo es : ' + saldo)
        break;
        case "5" :
            const retiro  = Number (prompt ('Cuanto dinero desea retirar'));
            saldo -= retiro;
            alert(' dinero retirado con exito, su saldo es :' + saldo)
        break;
        case "0" :
            alert(' Gracias por visitarnos')
        break;
        default:
            alert ('ingrese una opcion valida')
            break
}

}

function getDaySwitch(day) {
    let result;
    switch (day) {
        case 1:
            result = "Lundi";
            break;
        case 2:
            result = "Mardi";
            break;
        case 3:
            result = "Mercredi";
            break;
        case 4:
            result = "Jeudi";
            break;
        case 5:
            result = "Vendredi";
            break;
        case 6:
            result = "Samedi";
            break;
        case 7:
            result = "Dimanche";
            break;
        default:
            result = "Numéro de jour invalide";
    }
    return result;
}

for (let i = 1; i < 8; i++) {
    console.log(getDaySwitch(i));
}

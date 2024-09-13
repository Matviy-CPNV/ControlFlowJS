function getDayLoop(day){
    let days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
    for (let i = 0; i < days.length; i++) {
        if (i === day) {
            return days[i];
        }
    }
    return "Invalid day";
}

for (let j = 0; j < 7; j++) {
    console.log(getDayLoop(j));
}

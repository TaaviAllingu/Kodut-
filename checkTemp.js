function checkTemp(Temp){
    if (Temp >=0 && Temp <= 20) { return -1

    }
    if (Temp >=21 && Temp <= 40) { return 0

    }
    if (Temp >=41 && Temp <= 60) { return 1

    } else {
        return "Temperatuur ei kuulu ühtegi vahemiku"
    }
}

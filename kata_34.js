function humanYearsCatYearsDogYears (humanYears) {
    let catYears = 0;
    let dogYears = 0;
    let men = 0;
    if (humanYears === 1) {
        men = 1
        catYears = 15
        dogYears = 15


    } else if (humanYears === 2) {
        men = 2
        catYears = 24
        dogYears = 24


    } else if (humanYears >= 3) {
        men = humanYears
        catYears = 24 + ((humanYears - 2) * 4)
        dogYears = 24 + ((humanYears - 2) * 5)

    }
    return [humanYears, catYears, dogYears];
}

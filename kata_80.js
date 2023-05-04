function twiceAsOld(dadYearsOld, sonYearsOld) {

    const a = (dadYearsOld - sonYearsOld * 2)
    if(a < 0) {
        return -a
    }
    return a

}
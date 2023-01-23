function aliasGen(name, lastname){
    const nameFirstLetter = name[0].toUpperCase();
    const lastNameFirstLetter = lastname[0].toUpperCase();
    if (firstName.hasOwnProperty(nameFirstLetter) && surname.hasOwnProperty(lastNameFirstLetter)) {
        return firstName[nameFirstLetter] + " " + surname[lastNameFirstLetter];
    }
    return "Your name must start with a letter from A - Z.";
}
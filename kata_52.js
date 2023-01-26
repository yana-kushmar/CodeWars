function htmlspecialchars(formData) {
    let el1 = /</g;
    let el2 = />/g;
    let el3 = /"/g;
    let el4 = /&/g;
    return formData.replaceAll(el4, "&amp;").replaceAll(el1, "&lt;").replaceAll(el2, "&gt;").replaceAll(el3, "&quot;");

}


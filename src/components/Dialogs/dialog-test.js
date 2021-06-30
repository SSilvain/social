export const funcTest = (text) => {
    let objFirst = { value: 0 };

    let objSecond = objFirst;
    // objSecond.name = "vasya";
    objSecond = { value: 0 };

    if (objFirst === objSecond) {
        alert(text + ", not changed");
    } else {
        alert(text + ", yes, changed");
    }
};

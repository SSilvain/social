export const funcTest = () => {
    let obj = {
        first: "one",
        second: "two",
    };
    let arr = Object.entries(obj);
    console.log(arr[0][1]);
};

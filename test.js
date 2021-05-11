// let user = {
//     name: "sunil",
//     address: {
//         city: "",
//         country: "india"
//     }
// };

// const d_obj = {};
// Object.keys(user).forEach((key) => {
//     if (!Object.keys(user[key]).length) {
//         d_obj[`user_${key}`] = user[key];
//     } else {

//     }

// });

// checkForNesting(obj) {

// }

const sum = function (a) {
    return function (b) {
        return function (c) {
            return a + b +c;
        }
    }
}

console.log(sum(1)(2)(3));
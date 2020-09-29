const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 },
];

//mapping by full name
const filtered = entrepreneurs.map((obj) => ({
    first: obj.first,
    last: obj.last,
}));
console.log(filtered);

//same again
const filtered2 = entrepreneurs.map(function(obj) {
    return { first: obj.first, last: obj.last };
});
console.log(filtered2);

//rename keys
const newArrayOfObj = entrepreneurs.map(({ first: firstName, last: lastName, ...rest }) => ({
    firstName,
    lastName,
    ...rest,
}));
console.log(newArrayOfObj);

//mapping by full name again
const newArray = newArrayOfObj.map(({ year, ...keepAttrs }) => keepAttrs);
console.log(newArray);

//single object
const result = newArrayOfObj.map(a => a.firstName);
console.log(result);

//filtred by age
const filtered3 = entrepreneurs.map(function(obj) {
    return { first: obj.first, last: obj.last, year: (2020 - obj.year) };
});
console.log(filtered3);

//filtred by 70s
const filtered4 = entrepreneurs.filter(function(obj) {
    return (1969 < obj.year && obj.year < 1980);
});
console.log(filtered4);

//filtred by age and by 70s
const filtered5 = filtered4.map(function(obj) {
    return { first: obj.first, last: obj.last, year: (2020 - obj.year) };
});
console.log(filtered5);

//rename keys
const newArrayOfObj2 = filtered5.map(({ first: firstName, last: lastName, ...rest }) => ({
    firstName,
    lastName,
    ...rest,
}));
console.log(newArrayOfObj2);
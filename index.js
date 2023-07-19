const lodash = require('lodash');

const array = [1,2,2,3,3,4,5,7,8,9];
const arrayUnico = lodash.uniq(array);
console.log(arrayUnico);
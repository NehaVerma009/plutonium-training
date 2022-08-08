const Mon = require('lodash')

const allMonths =function(){
let Array =['Januray', 'February', 'March', 'April', 'May' ,' June', 'July', 'August' , 'September', 'October', 'November', 'December']

let chunkedArray= Mon.chunk(Array,4)
console.log(chunkedArray)

}

module.exports.chunks= allMonths

const odd = function(){
    let num = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
    let tailNum = Mon.tail(num, 9) 

    console.log (tailNum)
}
 
module.exports.tailed = odd

const pairs= function (){
    let Arrays = [ ['horror','The Shining'], ['drama','Titanic'], ['thriller','Shutter Island'],['fantasy','Pans Labyrinth']]
    
    console.log(Mon.frompairs(Array));
}
module.exports.keyValue = pairs

const unions = function (){
const arr1 = [1, 2, 3, 4];
const arr2 = [2, 4, 6 ,8];
const arr3 = [1, 3, 5, 7];
const arr4 = [1, 4 ,5, 8];
console.log(Mon.union(arr1, arr2, arr3, arr4));
}
module.exports.uniqueArr = unions

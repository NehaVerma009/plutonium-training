const d =new Date();
const da = function printDate(Dat){
    console.log("Current Date is :", d.getDate())

}
module.exports.Bat = da

const Mon=function printMonth(Mo){
    console.log("current month is::",d.getMonth()+1)
  
  }

module.exports.months = Mon

const batch= function printBatchData(){
    console.log("Plutonium, W3D5 ,The topic for today is :Node Module js")

}

module.exports.info = batch




//printDate() : prints the current date
//- printMonth() : prints the current month
//- getBatchInfo() : prints batch name, week#, Day#, the topic being taught today is ….. For example - Radon, W3D3, the topic for today is Nodejs module system’

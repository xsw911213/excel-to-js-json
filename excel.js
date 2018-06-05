var xlsx = require('node-xlsx');
var fs = require('fs');
//读取文件内容
var obj = xlsx.parse(__dirname+'/member.xlsx');
var excelObj=obj[0].data;
// console.log(excelObj);

var data = [];

for(let i = 1 ; i < excelObj.length ; i++){
  if(excelObj[i].length > 0){
    let obj = {};
    obj.name = excelObj[i][0];
    obj.tel = excelObj[i][1] + '';
    obj.part = excelObj[i][2];
    
    obj.remark = excelObj[i][3];
    obj.index = i;
    console.log(obj.tel)
    if(obj.tel.length == 11){
      data.push(obj);
    }
    
  }
}
console.log(data);

fs.writeFileSync('./output/data.json',JSON.stringify(data))
fs.writeFileSync('./output/data.js',JSON.stringify(data))
// var data = [];
// for(var i in excelObj){
//     var arr=[];
//     var value=excelObj[i];
//     for(var j in value){
//         arr.push(value[j]);
//     }
//     data.push(arr);
// }
// var buffer = xlsx.build([
//     {
//         name:'sheet1',
//         data:data
//     }        
// ]);

//将文件内容插入新的文件中
// fs.writeFileSync('test1.xlsx',buffer,{'flag':'w'});
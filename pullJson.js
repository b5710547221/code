const axios = require('axios');
const fs  =  require('fs');
const URL =  'https://w4trcfg597.execute-api.us-east-1.amazonaws.com/production/v2/campaigns';

var data;


async function getData(URL){
   return  new Promise(resolve => {
    axios.get(URL, { 'headers': { 'x-api-key': 'dooXBtBatZ12ak7sz7prF84xoYTeeQdKa90iDJkg'}
    })
    .then((response) => {
    console.log(response.data.result);
    console.log(response.data.lines);
    //console.log(response.data.data);
    data = response.data.data;
    resolve(data);
    })
    .catch((error) => {
    console.log(error);
    }); 
   

   })
 
}

async function  start(){
  let data = await getData(URL);
  await save(data);
//return data;
}


start();


// getData(URL);
// data  = parseJSON(data)

// function parseJSON(string){
//   var result_of_parsing_json = JSON.parse(string);
//   document.body.appendChild(
//     document.createTextNode(result_of_parsing_json[0][0])
//   );
//   return result_of_parsing_json;
// } 
    
async function save(data){
  data = JSON.stringify(data);
fs.writeFile("data.json",data,function(err){
   if(err){
     return console.log(err);
   }
   console.log ("saved file");
});
}


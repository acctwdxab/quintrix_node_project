var axios=require('axios');
var URL="http://localhost:3000";

axios.get(URL+'/olympic/2022/ranking/42')
     .then(function(response){
     	console.log(response);
     })
     .catch(function(error){
        console.log(error);
     });



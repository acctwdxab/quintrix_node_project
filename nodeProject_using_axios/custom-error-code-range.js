var axios=require('axios');
var URL="http://localhost:3000";

axios.get(URL+'/olympic/2022/ranking/42',{
         validateStatus: function (status) {
                         return status < 500; 
                         // If response status code is less than 500 call the success function
                                          }
    })
     .then(function(response){
     	console.log(response);
     })
     .catch(function(error){
        console.log(error);
    });



var axios=require('axios');
var URL="http://localhost:3000";

axios.get(URL+'/olympic/2016/ranking/4')
     .then(function(response){
     	console.log(response);
     });


/* If response status code is in between 200 to 299, it is considered a success 
   and will result in success function being called. Any response status code outside 
   of 200 to 299 range is considered an error and will result in error function being called
*/   
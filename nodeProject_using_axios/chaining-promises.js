var axios=require('axios');
var URL="http://localhost:3000";

axios.get(URL+'/olympic/2022/ranking/42')
     .then(function(response){     	
     	return axios.get(URL+'/iso/country/'+response.data.Country);
     })
     .then(function(response){     	
     	return axios.get(URL+'/olympic/2016/medal/'+response.data.iso)
     })
     .then(function(response){
     	console.log(response.data)
     })
     .catch(function(error){
          console.log(error)
     });



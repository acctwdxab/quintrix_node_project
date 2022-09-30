var axios=require('axios');
var URL="http://localhost:3000";

axios.get(URL+'/olympic/2022/ranking/42')
     .then(function(response){      
      return axios.get(URL+'/iso/country/'+response.data.Country);
     })
     .then(function(response){      
      return axios.get(URL+'/olympic/2022/medal/'+response.data.iso)
     })
     .then(function(response){
      console.log(response.data)
     })
     .catch(function(error){          
         if (error.response) {
         // The request was made and the server responded with a status code
         // that falls out of the range of 2xx
           console.log(error.response.data);
           console.log(error.response.status);
           console.log(error.response.headers);
         } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
         } else {
            // Something happened in setting up the request that triggered an Error
           console.log('Error', error.message);
         }
           console.log(error.config);
     });





// Require axios library to make API requests
const axios = require('axios');

const PRIVATE_APP_ACCESS = "";

exports.main = (context, sendResponse) => {
    
 // set the parameters 
 let queryObject = {
    limit: 10
  };
// This is the identity of the service owner
   queryObject.portalId = context.params.portalid[0];

    // This checks to see if the parameters passed from the client contains an "after" link
    // We only want to do paging if the request contains an "after" link
    if (context.params.hasOwnProperty('after')) {
        queryObject.after = context.params.after[0];
      }
    
      axios.get('https://api.hubapi.com/cms/v3/hubdb/tables/891011/rows', {
        headers: {
            'Authorization': `Bearer ${context.secrets.library}`,
            'Content-Type': 'application/json'
          },

        params: queryObject
        
      })

      .then(function(response) {
            // sendResponse is what you will send back to services hitting your serverless function
            sendResponse({ body: { response: response.data }, statusCode: 200 });
      })

      .catch(function(error) {
        sendResponse({ body: { error: error }, statusCode: 500 });
      });
    
    

};


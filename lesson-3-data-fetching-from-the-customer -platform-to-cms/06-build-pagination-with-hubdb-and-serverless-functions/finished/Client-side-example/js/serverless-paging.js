let requestOptions = {
    'method': 'GET',
    'headers': {
        'Content-Type': 'application/json',
     }
  };
  
  let fetchedData = [];
  let nextLink = "";
  
  // Create a new div for every book
  function renderResponse(response) {
    let mainContainer = document.getElementById("myData");
    
    responseJson = JSON.parse(response);
    nextLink = responseJson?.response?.paging?.next?.after;
    
    let data = responseJson['response']['results'];
    fetchedData += data;
    for (let i = 0; i < data.length; i++) {
        let dataDiv = document.createElement("div");
        dataDiv.textContent = `Name:  ${data[i]['values']['name']}`;
        mainContainer.appendChild(dataDiv);
    }
  }
    
  // load more books
  // This function is called on a button in serverless-paging.html
  function fetchBooks() {
    
    // portalid lets you embed this in modules
    // /_hcms/api/ is the required prefix to your path
    let targetUrl = `/_hcms/api/books?portalid=12345678`;
    
    if (nextLink) {
      targetUrl += `&after=${nextLink}`;
      console.log(`Fetching ${targetUrl}`);
      
    } else if (fetchedData.length > 0) {
      window.alert('The library is exhausted');
      return;
    }
    
    // does intial loading of books
    fetch(targetUrl, requestOptions)
      .then(response => response.text())
      .then(result => renderResponse(result))
      .catch(error => window.alert(error));
    
  }
  
  fetchBooks();
  
  
  


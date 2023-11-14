// Step 1 create a function that'll called requestOptions. That’ll call our header and GET method.

// Step 2 Set up the empty variables we'll need. We'll set an empty array called fetchedBookData that'll hold information about our books. 

// Step 3 create a nextLink variable that will store parameters to see if there is a next in the response.

// Step 4 create a function called renderResponse. The renderResponse function will create a new div for every book and store it in a variable called mainContainer

// Step 5 use the JSON.parse method to convert the JSON object and store it in a variable called responseJson.

// Step 6 set the nextLink variable using ternary operators to add the after link if it exists in the response.

// Step 7 loop through the books in the HubDB table to create an element for every book.

// Step 8 fetchBooks function that will fetch more books when the user requests them. 

// Step 9 create a variable called targetURL. We will assign a targetURL with the value /_hcms/api/books?portalid=[your portalid].

// Step 10 Add an if statement that checks to see if there is a nextLink and uses string interpolation to add it to the targetURL. 

// Step 11 add the initial load of books we’ll fetch using the parameters targetURL and requestOptions.

// Step 12 call the FetchBooks function




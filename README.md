We have been challenged to come up with a mini web-application that will allow users to book and buy movie tickets.

For this to work we first have to have pur HTML code,
inside this code we will divide the expected and required elements into sections.

The sections required are **poster, title, runtime, showtime, and available tickets**

for our poster we will store in an image tag, for the film title we  will create a h2 element since it is a secondary title, for the runtime, showtime and available tickets we will put them in span tags nested inside a p tag.

As shown in our db.json, we will also require a movie description, we will also need a button that will allow the user to buy/ book the tickets.

Finally for our Html we will need a header, this is where our cinema name will go.

Now time to display our data!!.

**Deliverables**
See the first movie's details, including its **poster, title, runtime, showtime, and available tickets** when the page loads. 
The number of available tickets will need to be derived by subtracting the number of `tickets_sold` from the theater's `capacity`. You will need to make a GET request to the following endpoint to retrieve the film data:

STEPS TO SOLUTION
Firstly we add an event listener that listens for DOMContentLoaded, and for the call back function we pass in all of our data.

we first define our baseUrl variable that will store our URL that connects us tp the server, we then create the fetch function that we will pass the baseUrl variable as our parameter, we then create a .then with a .json() promise and under it we create another .then that will elp us tell the server what data we want from the server.

we finally create a .catch element that helps us display our error message incase we have a problem with our code.

we then come up with a function that will hold all of the elements in the HMTL code that will be manipulated. for this challenge we will choose them  by their idName.

we will then define a function that will store all the data of the film titles according to the second deliverable, to create a menu of all movie titles.

to create this we have to first come up with a fetch request targeting the the titles, since for this we will need to iterate through an array we will use a forEach function, we then pass the parameter through our function to give us the movie titles.
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
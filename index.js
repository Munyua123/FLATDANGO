document.addEventListener("DOMContentLoaded", () => {
  function addFilms(items) {
    // This is for the movie name
    let title = document.querySelector("#movieTitle");
    let posterTitle = document.createElement("h2");
    posterTitle.textContent = `${items.title}`;
    title.appendChild(posterTitle);

    let posterImage = document.querySelector("#posterImage");
    let image = document.createElement("div");
    image.innerHTML = `<img src = "${items.poster}" alt = "${items.title}" width = 200px>`;
    posterImage.appendChild(image);

    console.log(posterImage);

    let filmTimes = document.querySelector("#times");
    let showtime = document.createElement("p");
    showtime.textContent = `Showtime: ${items.showtime}`;
    let runTime = document.createElement("p");
    runTime.textContent = `Runtime: ${items.runtime}`;

    let availability = document.createElement("p");
    const capacity = `${items.capacity}`;
    const soldTickets = `${items.tickets_sold}`;
    const ticketsAvailable = capacity - soldTickets;
    availability.textContent = `Tickets available: ${ticketsAvailable}`;
    filmTimes.appendChild(showtime);
    filmTimes.appendChild(runTime);
    filmTimes.appendChild(availability);


    let movieDescription = document.querySelector("#movieDescription");
    let filmDescription = document.createElement("p");
    filmDescription.textContent = `${items.description}`;
    movieDescription.appendChild(filmDescription);
  }

  function fetchFilms() {
    const baseUrl = "http://localhost:3000/films/1";
    fetch(baseUrl)
      .then((res) => res.json())
      .then((items) => addFilms(items))
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  fetchFilms();
});

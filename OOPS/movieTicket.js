
class User{
    constructor(name){
        this.name = name
    }
}


class Movie{
    constructor(name, duration){
        this.name = name,
        this.duration = duration
    }
}

class ShowTime{
    constructor(movie, time){
        this.movie = movie;
        this.time = time;
        this.tickets = []
    }

    bookTicket(user) {
        this.tickets.push(user);
        console.log(`${user.name} booked a ticket for "${this.movie.name}" at ${this.time}.`);
    }

    availableSeats() {
        console.log(100 - this.tickets.length);
        
        return 100 - this.tickets.length; // Assuming 100 seats per showtime
    }
}


class Theater {
    constructor(){
        this.movies = [];
        this.showTime = [];
    }

    addMovie(movie){
        this.movies.push(movie)
    }

    addShowTime(showTime){
        this.showTime.push(showTime)
    }
}

const theater = new Theater();
const movie = new Movie('Inception', 148);
const showtime = new ShowTime(movie, '7:00 PM');

theater.addMovie(movie);
theater.addShowTime(showtime);

const user = new User('Alice');
showtime.bookTicket(user);
showtime.availableSeats()
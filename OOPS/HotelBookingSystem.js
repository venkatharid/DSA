/*1)bookroom, vacateroom, calculate, timeIn, timeOut, addguest*/

class Room{
    constructor(roomNumber, type, price){
        this.roomNumber = roomNumber,
        this.type = type,
        this.price = price,
        this.isBooked = false
    }

    book(){
        if(!this.isBooked){
            this.isBooked= false;
            console.log(`Room is ${this.roomNumber} has been booked`);
            return true;
        }
        console.log(`Room is ${this.roomNumber} has already booked`);
            return false;
    }

    checkout(){
        this.isBooked = false;
        console.log(`Room is ${this.roomNumber} is available now`);
    }
}

class Guest {
    constructor(name){
        this.name= name;
    }

    bookRoom(room){
        room.book()
    }

    checkoutRoom(room){
        room.checkout()
    }
}

class Hotel{
    constructor(){
        this.rooms = []
    }

    addRoom(room){
        this.rooms.push(room)
    }

    findAvailableRoom(type){
        return this.rooms.find(room => room.type === type && !room.isBooked);
    }
}

const hotel = new Hotel();

const room1 = new Room(101, 'Single', 100);
const room2 = new Room(102, 'Double', 200);

hotel.addRoom(room1);
hotel.addRoom(room2);

// Creating a guest and booking a room
const guest = new Guest('John Doe');
const availableRoom = hotel.findAvailableRoom('Single');
if (availableRoom) {
    guest.bookRoom(availableRoom); // Room 101 has been booked.
}

// Guest checks out of the room
//guest.checkoutRoom(availableRoom);
library = [
  book1 = {
    title: "Lord of the rings",
    author: "John Ronald",
    status : {
      own: true,
      reading: false,
      read: false
    }
  },
  book2 = {
    title: "The Boys",
    author: "Garth Ennis",
    status : {
      own: true,
      reading: false,
      read: false
    }
  },
  book3 = {
    title: "Avengers",
    author: "Stan Lee",
    status : {
      own: true,
      reading: false,
      read: false
    }
  }
];

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;
library[0].title = "firstBook";

var lib =  JSON.stringify(library);
console.log(lib);

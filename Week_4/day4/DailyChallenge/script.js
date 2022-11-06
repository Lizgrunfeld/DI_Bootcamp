// Instructions
// In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

// Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)
// Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”
// Instantiate a new Video instance and call the watch() method.
// Instantiate a second Video instance with different values.

class Video {
    constructor(title, uploader, time){
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }

    watch(){
        const sentence = `${this.uploader} watched all ${this.time} of ${this.title}`;
        console.log("sentence", sentence);
    }
}


const vid1 = new Video("Handmaid's Tale", "Liz", "7 hours");
const vid2 = new Video("The House of the Dragon", "Daniel", "10 hours");

vid1.watch();
vid2.watch();

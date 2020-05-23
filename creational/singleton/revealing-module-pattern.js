var ImageGallery = (function () {
  // Let's make sure no one can directly access our images
  let index = 0;
  let images = ["sun.jpg", "star.jpg", "moon.jpg"];  
  let paused = false;

  // We'll expose all these functions to the user
  function show () {
    console.log('Showing image...', images[index]);
  }

  function add (imageData) {
    images.push(imageData);
    console.log(`Image ${imageData} added.`);
  }

  function next () {
    index++;
    if (index >= images.length) {
      index = 0; // Reset index to beginning of array
    }
    console.log('Next Image is', images[index]);
  }

  
  function loadImages(imageArray) {
    images = imageArray;
    index = 0;
  }

  return {
    show: show,
    next: next,
    add: add,
    load: loadImages
  }
})(); // our IIFE function (surrounded with parens) is invoked here

ImageGallery.show(); // prints => Showing image sun
ImageGallery.next(); // prints => Next image is star.jpg
ImageGallery.show();

// Reload the data (you can fetch from remote api as well)
ImageGallery.load(["apple","orange","pears"]);
ImageGallery.show();  // prints => Showing image apple

// ImageGallery.next(); // prints => Next image is moon.jpg
// ImageGallery.next(); // prints => Next image is sun.jpg
// ImageGallery.next(); // prints => Next image is star.jpg

// ImageGallery.loadImages(); // error: not a function
//ImageGallery.images.push('rabbit.png'); // undefined error

// No argument

// const wallPainting = function (){
//     console.log("The wall has been painted red");
// };

// wallPainting();


// Single argument

// const wallPainting = function (colorPaint){
//     console.log("The wall has been painted " + colorPaint);
// };

// wallPainting("green");
// wallPainting("grey");


// Multiple argument

const wallPainting = function (colorPaint){
    console.log("The wall has been painted " + colorPaint);
    console.log("The north wall has been paint " + northWall);
    console.log("The south-east wall has been painted " + southEast);

};

const northWall = "orange";
const southEast = "grey";

wallPainting("orange");

wallPainting("grey");
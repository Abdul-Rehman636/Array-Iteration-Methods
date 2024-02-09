//Array Iteration Method

//1 forEach() Method

//For each is a method which performs specific operation on existing array elements.

var a = ["Mango", "Apple", "Banana"];

    a.forEach(function(value, index) {
        document.write(index + ":" + "We have the fruit that name is " + value + "<br>"); 
    });


//2 map() Method

//map is a method which creates a new array element by performing some operations.

var b = [29, 93, 47, 39];

    b.map((index, value) => {
        document.write(index + ":" + value + "<br>");
    });



//3 Filter method

//Filter is a method which provides us a output by our requirements by performing some operations.

var c = [29, 93, 22, 33, 48, 37, 88];

var d = c.filter((values) => {
        return values < 50;
    });

document.write(d + "<br>");

//Another Example of Filter Method

var e = [38, 29, 48, 20, 88, 92, 84];

var f = e.filter((g) => {
    return g > 50;
});

document.write(f + "<br>");


//4 Reduce Method

//Reduce is a method which reduce an array to a single value.

var h = [2, 3, 9, 4, 5, 8];

var i = h.reduce((j, k) => {
    return j + k;
});

document.write(i);
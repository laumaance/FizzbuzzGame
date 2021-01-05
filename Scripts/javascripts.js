const inputMin = document.getElementById("MinInput");
const inputMax = document.getElementById("MaxInput");
console.log("Hello world!");
// starting value on page refresh.
inputMin.value = 1;
inputMax.value = 100;

for (var i=1; i <= 100; i++)
{
    if (i % 15 == 0)
        console.log("FizzBuzz");
    else if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else
        console.log(i);
}
create();

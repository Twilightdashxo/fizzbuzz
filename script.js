    const num = document.getElementById("n");
    num.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            console.log(num.value);
            let n = num.value;
            if ((n % 3 == 0) && (n % 5 !== 0)) {
                document.getElementById("output").innerHTML = "Fizz";
            } else if ((n % 5 == 0) && (n % 3 !== 0)) {
                document.getElementById("output").innerHTML = "Buzz";
            } else if ((n % 3 == 0) && (n % 5 == 0)) {
                document.getElementById("output").innerHTML = "FizzBuzz";
            } else {
                document.getElementById("output").innerHTML = "";
            }
        }
    });
// testing commits again
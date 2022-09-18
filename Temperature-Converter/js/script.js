
    let temprature = () => {
        let opt = document.querySelector("#unit");
        let display = document.querySelector(".value");
        var a = document.querySelector(".input_scr").value;


        if (opt.value == "Celsius") {
            console.log(a, "C to F", opt.value)
            let F = a * (9 / 5) + 32
            display.innerHTML = F.toFixed(4) + " ºF"
        } else {
            console.log(a, "F to C", opt.value)
            let C = (a - 32) * (5 / 9)
            display.innerHTML = C.toFixed(4) + " ºC"
        }

        if (opt.value == "Fahrenheit") {
            console.log(a, "F to C", opt.value)
            let C = (a - 32) * (5 / 9)
            display.innerHTML = C.toFixed(4) + " ºC"
        } else {
            console.log(a, "C to F", opt.value)
            let F = a * (9 / 5) + 32
            display.innerHTML = F.toFixed(4) + " ºF"
        }
    }
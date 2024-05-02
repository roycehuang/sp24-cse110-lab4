function givemeasecond() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

setInterval(givemeasecond, 1000); //1000 ms = 1s
let count = 0;
let id = setInterval(() => {
    if (count === 10) {
        clearInterval(id);
    } else {
        count++;
        console.log(count);
    }
}, 1000);

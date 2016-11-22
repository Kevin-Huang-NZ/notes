    function selectFrom(lowerValue, upperValue) {
        var choices = upperValue - lowerValue + 1;
        return Math.floor(Math.random() * choices + lowerValue);
    }

    console.log(selectFrom(1, 8));
    console.log(selectFrom(1, 8));
    console.log(selectFrom(1, 8));
    console.log(selectFrom(1, 8));
    console.log(selectFrom(1, 8));
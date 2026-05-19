const bubbleSort = require("./bubbleSort");
const quickSort = require("./quickSort");

function generateArray(size) {
    return Array.from(
        { length: size },
        () => Math.floor(Math.random() * 10000)
    );
}

function test(size) {

    const array = generateArray(size);

    console.log(`\nARRAY SIZE: ${size}`);

    console.time("Bubble Sort");

    const bubble = bubbleSort(array);

    console.timeEnd("Bubble Sort");

    console.log(
        "Bubble comparisons:",
        bubble.comparisons
    );

    console.time("Quick Sort");

    const quick = quickSort(array);

    console.timeEnd("Quick Sort");

    console.log(
        "Quick comparisons:",
        quick.comparisons
    );
}

test(100);
test(1000);
test(5000);
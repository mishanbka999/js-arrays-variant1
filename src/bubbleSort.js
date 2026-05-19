function bubbleSort(arr) {
    let comparisons = 0;

    const array = [...arr];

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {

            comparisons++;

            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] =
                    [array[j + 1], array[j]];
            }
        }
    }

    return {
        sorted: array,
        comparisons
    };
}

module.exports = bubbleSort;
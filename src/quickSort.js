function quickSort(arr) {

    let comparisons = 0;

    function sort(array) {

        if (array.length <= 1) {
            return array;
        }

        const pivot = array[0];

        const left = [];
        const right = [];

        for (let i = 1; i < array.length; i++) {

            comparisons++;

            if (array[i] < pivot) {
                left.push(array[i]);
            } else {
                right.push(array[i]);
            }
        }

        return [
            ...sort(left),
            pivot,
            ...sort(right)
        ];
    }

    return {
        sorted: sort(arr),
        comparisons
    };
}

module.exports = quickSort;
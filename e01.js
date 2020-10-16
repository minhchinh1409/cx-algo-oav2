function bubble(array) {
    while(!array.sort()) {
        for ( let i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                t = array[i];
                array[i] = array[i+1];
                array[i+1] = t;
            }
        }
    }
    return array
}
console.log(bubble([7, 5, 9, 4]))
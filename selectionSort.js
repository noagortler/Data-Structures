function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {      // outer loop - starts at position 0

        let minIndx = i;                            // initialize min. value as value at position i

        for (let j = i + 1; j < arr.length; j++) {  // inner loop - starts at position i+1 (1)
            if (arr[j] < arr[minIndx]) {            // compare value of arr[j] and arr[minIndx]
                minIndx = j;                            // if value of arr[j] < arr[minIndx], set arr[j] as the minIndx
            }                                       // repeat through loop all values at arr[j] have been compared to minIndx
        }
        
        let temp = arr[i];                          // temp acts as a place holder for arr[i]
        arr[i] = arr[minIndx];                      // move the min. index into position i of array
        arr[minIndx] = temp;                        // grab arr[i] from temp and place it in minIndx previous position

    }                                               // end of for loop, continue on while j < arr.length
}

const array = [75, 42, 64, 31, 53];
console.log(array);

const copy = [...array]
console.log(selectionSort(copy));

// -- BREAKDOWN --

// each pass scans the entire array by comparing arr[j] arr[minIndx] to find the minimum value
// that minimum is then swapped into its correct position at the front of the unsorted portion

// PASS 1 - i = 0

// 1. minIndx = i = 0, arr[minIndx] = 75
// 2. j = 1, arr[1] = 42
// 3. 42 < 75? Yes -> minIndx = 1, arr[minIndx] = 42
// 4. j = 2, arr[2] = 64
// 5. 64 < 42? No -> minIndx stays 1, arr[minIndx] = 42
// 6. j = 3, arr[3] = 31
// 7. 31 < 42? Yes -> minIndx = 3, arr[minIndx] = 31
// 8. j = 4, arr[4] = 53
// 9. 53 < 31? No -> minIndx stays 3, arr[minIndx] = 31
// 10. swap arr[0] (75) <-> arr[3] (31)

// result: [31, 42, 64, 75, 53]


// PASS 2

// 1. minIndx = i = 1, arr[minIndx] = 42
// 2. j = 2, arr[2] = 64
// 3. 64 < 42? No -> minIndx stays 1, arr[minIndx] = 42
// 4. j = 3, arr[3] = 75
// 5. 75 < 42? No -> minIndx stays 1, arr[minIndx] = 42
// 6. j = 4, arr[4] = 53
// 7. 53 < 42? No -> minIndx stays 1, arr[minIndx] = 42
// 8. minIndx === i, no swap needed

// result: [31, 42, 64, 75, 53]


// PASS 3

// 1. minIndx = i = 2, arr[minIndx] = 64
// 2. j = 3, arr[3] = 75
// 3. 75 < 64? No -> minIndx stays 2, arr[minIndx] = 64
// 4. j = 4, arr[4] = 53
// 5. 53 < 64? Yes -> minIndx = 4, arr[minIndx] = 53
// 6. swap arr[2] (64) <-> arr[4] (53)

// result: [31, 42, 53, 75, 64]


// PASS 4

// 1. minIndx = i = 3, arr[minIndx] = 75
// 2. j = 4, arr[4] = 64
// 3. 64 < 75? Yes -> minIndx = 4, arr[minIndx] = 64
// 4. swap arr[3] (75) <-> arr[4] (64)

// FINAL RESULT: [31, 42, 53, 64, 75]




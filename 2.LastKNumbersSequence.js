function lastKNumbersSequence(n, k) {
    // n - length new arr
    // k - sum of previous k elements
    let newArr = [1];
    for (let i = 1; i < n; i++) {
        let start = Math.max(0, i - k);
        let curEl = newArr.slice(start, start + k).reduce((a, b) => a + b, 0);
        newArr.push(curEl);
    }
    return newArr
}
    console.log(lastKNumbersSequence(8,2));



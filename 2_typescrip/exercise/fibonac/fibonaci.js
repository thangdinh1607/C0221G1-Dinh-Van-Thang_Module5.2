function fibonacci(n) {
    var f0 = 0;
    var f1 = 1;
    var fn = 1;
    if (n < 0) {
        return -1;
    }
    else if (n == 0 || n == 1) {
        return n;
    }
    else {
        for (var i = 2; i < n; i++) {
            f0 = f1;
            f1 = fn;
            fn = f0 + f1;
        }
    }
    return fn;
}
function sumFibonacci() {
    var sum = 0;
    for (var i = 0; i < 20; i++) {
        sum += fibonacci(i);
    }
    console.log('dasdasd' + sum);
}

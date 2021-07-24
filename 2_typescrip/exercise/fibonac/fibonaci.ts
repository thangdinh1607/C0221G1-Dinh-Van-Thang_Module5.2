function fibonacci(n: number) {
    let f0 = 0;
    let f1 = 1;
    let fn = 1;
    if (n < 0) {
        return -1;
    } else if (n == 0 || n == 1) {
        return n;
    } else {
        for (let i = 2; i < n; i++) {
            f0 = f1;
            f1 = fn;
            fn = f0 + f1;
        }
    }
    return fn;
}

function sumFibonacci() {
    let sum = 0;
    for (let i= 0; i < 20; i++) {
        sum += fibonacci(i)
    }
    console.log('dasdasd' + sum)
}


function isPrime(number) {
    var check = true;
    if (number < 2) {
        check = false;
    }
    else if (number > 2) {
        for (var i = 2; i < number; i++) {
            if (number % i == 0) {
                check = false;
                break;
            }
        }
    }
    return check;
}
function sumArr(arr) {
    var sum = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var number = arr_1[_i];
        if (isPrime(number)) {
            sum += number;
        }
    }
    console.log('tong cac so nguyen to trong mang la : ' + sum);
}
var array = [1, 5, 9, 2, 6, 15, 19, 35, 51, 53];
sumArr(array);

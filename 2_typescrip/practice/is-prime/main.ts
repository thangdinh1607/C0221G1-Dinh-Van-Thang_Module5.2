function isPrime(number: number): boolean {
    let check = true;
    if (number < 2) {
        check = false;
    } else if (number > 2) {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                check = false;
                break;
            }
        }
    }
    return check;
}

function sumArr(arr: number[]){
    let sum =0;
    for(let number of arr){
        if(isPrime(number)){
            sum+=number
        }
    }
    console.log('tong cac so nguyen to trong mang la : ' + sum)
}
let array = [1, 5, 9, 2, 6, 15, 19, 35, 51, 53];
sumArr(array);

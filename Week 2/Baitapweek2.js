/* Arithmetic operators
các phép toán trong số học lập trình
1. ++ -- 

a++ (Post-increment):
Trong biểu thức này, giá trị của a được tăng lên một đơn vị sau khi giá trị hiện tại của a được sử dụng trong biểu thức.
Cụ thể, giá trị của a được sử dụng trước khi tăng lên một đơn vị.

++a (Pre-increment):
Trong biểu thức này, giá trị của a được tăng lên một đơn vị trước khi giá trị của a được sử dụng trong biểu thức.
Cụ thể, giá trị của a được tăng lên trước khi sử dụng.

2. * / %

Toán tử % trả về phần dư của phép chia hai giá trị số.
Nó được sử dụng để kiểm tra xem một số có chia hết cho một số khác hay không.
3. + -  
4. = , += , -= , *= , /=
*/

// bài tập 
var a = 10;
var h = 20;
/*
 * a: cạnh đáy của 1 hình tam giác
 * h: chiều cao của tam giác đó
 * Yêu cầu: khai báo biến s bằng diện tích của hình tam giác này 
 */

const s = (a * h) / 2
console.log('diện tích của hình tam giác',s)

var width = 10;
var height = 20;

/**
 * width: Chiều rộng của 1 hình chữ nhật
 * height: Chiều dài của hình chữ nhật
 * Yêu cầu: 
 * - Khai báo biến s là diện tích của hình chữ nhật này.
 * - Khai báo biến p là chu vi của hình chữ nhật này.
 */

const S = width * height
const p = (width + height) * 2
console.log('diện tích của hình chữ nhật',S);
console.log('chu vi của hình chữ nhật',p);

/**
 * r: Bán kính của 1 hình tròn
 * s: Diện tích của hình tròn đó
 * pi: 3.14
 * Yêu cầu: 
 * - Khai báo biến p là chu vi của hình tròn này.
 * - Khao báo biến s là diện tích của hình tròn này.
 */
// viết code ở đây.
var r = 4;
const pi = 3.14
const chuViHinhTron = 2 * pi * r
const dienTichHinhTron = pi * r * r

console.log(`chu vi hinh tron la ${chuViHinhTron}cm`);
console.log('dien tich hinh tron',dienTichHinhTron);

// Giới thiệu về function trong JavaScript
//* Hàm không có đối số:
function greet() {
    console.log("Xin chào!");
}

greet(); // In ra "Xin chào!"

//* Hàm với đối số
function greet(name) {
    console.log("Xin chào, " + name + "!");
}

greet("Nguyễn Văn A"); // In ra "Xin chào, Nguyễn Văn A!"

// Hàm trả về giá trị
function add(a, b) {
    let c = a + b
    return c;
}

let c = add(5, 3);
console.log(c); // In ra 8
c = add( 10,20)
console.log(c); // In ra 30

// hàm là biểu thức 
let multiply = function(a, b) {
    return a * b;
};
console.log(multiply(4, 6)); // In ra 24


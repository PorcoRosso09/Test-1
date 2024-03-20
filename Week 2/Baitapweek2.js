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
const chuvihinhtron = 2 * pi * r
const dientichhinhtron = pi * r * r

console.log('chu vi hinh tron',chuvihinhtron);
console.log('dien tich hinh tron',dientichhinhtron);

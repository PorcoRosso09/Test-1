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

// Vòng lặp for cơ bản
// for ([initialization]; [condition]; [final-expression]) {
// Giải thích:
// initialization (Khởi tạo): Được thực thi trước khi vòng lặp for bắt đầu, biểu thức này dùng để khởi tạo bộ đếm của vòng lặp. Khi kết thúc vòng lặp nó sẽ được giải phóng.
// condition (Điều kiện): Ở đây ta có thể đặt điều kiện cho vòng lặp, mỗi lần thực thi vòng lặp for thì nó sẽ check điều kiện này, nếu điều kiện trả về true thì sẽ thực hiện block code trong vòng lặp for và nếu trả về false thì sẽ dừng vòng lặp for.
// final-expression: Biểu thức này được thực thi sau mỗi lần lặp, dùng để tăng hoặc giảm bộ đếm của vòng lặp.
// Ngoài vòng lặp for cơ bản trên, ta còn có vòng lặp for...in. Nó được dùng để duyệt các phần tử của một object bất kỳ thông qua các key của object đó.

var arr = [ 1, 2, 3 ];
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
//--> output: 1 2 3

// Vòng lặp for...in
// Ngoài vòng lặp for cơ bản trên, ta còn có vòng lặp for...in. Nó được dùng để duyệt các phần tử của một object bất kỳ thông qua các key của object đó.
// Định nghĩa một đối tượng
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

// Sử dụng vòng lặp "for ... in" để lặp qua các thuộc tính của đối tượng
for (var key in person) {
    if (person.hasOwnProperty(key)) { // Đảm bảo rằng thuộc tính được lặp qua là thuộc tính của đối tượng, không phải là từ khóa thừa kế từ prototype
        console.log(key + ": " + person[key]);
    }
}

// vÍ DỤ 1
// Đối tượng thứ nhất: thông tin về một người
var person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    gender: "male"
};

// Đối tượng thứ hai: thông tin về một sản phẩm
var product = {
    name: "Laptop",
    brand: "Dell",
    price: 1000,
    inStock: true
};

// Đối tượng thứ ba: thông tin về một xe hơi
var car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022,
    color: "black"
};
// Cách 1: Không khởi tạo mảng
// Lặp qua các thuộc tính của đối tượng person1
console.log("Thông tin người:");
for (var key in person1) {
    if (person1.hasOwnProperty(key)) {
        console.log(key + ": " + person1[key]);
    }
}

// Lặp qua các thuộc tính của đối tượng product
console.log("\nThông tin sản phẩm:");
for (var key in product) {
    if (product.hasOwnProperty(key)) {
        console.log(key + ": " + product[key]);
    }
}

// Lặp qua các thuộc tính của đối tượng car
console.log("\nThông tin xe hơi:");
for (var key in car) {
    if (car.hasOwnProperty(key)) {
        console.log(key + ": " + car[key]);
    }
}

// VÍ DỤ 2
// Đối tượng thứ nhất: thông tin về một người
var person2 = {
    firstName: "Nam",
    lastName: "Phương",
    age: 18,
    gender: "male"
};

// Đối tượng thứ hai: thông tin về một sản phẩm
var product1 = {
    name: "MacBook",
    brand: "100000",
    price: 1000,
    inStock: true
};

// Đối tượng thứ ba: thông tin về một xe hơi
var car1 = {
    brand: "Mers",
    model: "C200",
    year: 2022,
    color: "Red"
};


// Cách 2: khởi tạo mảng rỗng chứa các thuộc tính 
let properties = [];

for (var key in person2) {
if (person2.hasOwnProperty(key)) //Kiểm tra xem đối tượng person1 có chứa thuộc tính với tên là key hay không.
properties.push(key + ": " + person2[key]); //Nếu thuộc tính tồn tại, nó sẽ được thêm vào mảng properties với cú pháp "key: value", trong đó key là tên thuộc tính và person1[key] là giá trị tương ứng của thuộc tính đó trong đối tượng person1.
}

for (var key in product1){
    if (product1.hasOwnProperty(key))
    properties.push(key + ": " + product1[key]);
}

for (var key in car1) {
    if (car1.hasOwnProperty(key))
    properties.push(key + ": " + car1[key])
}
console.log(properties);


// Tìm hiểu về Do...while. So sánh với for.
// Một câu lệnh khác dùng để thực hiện các vòng lặp đó là do...while. Khác với for và while, do...while thực thi code bên trong khối lệnh trước rồi mới check điều kiện ở cuối mỗi lần lặp.

var i = 0;
do {
    console.log("N" + i);
    i++;
} while (i < 5);

// // Sự khác biệt:
// for: Thường được sử dụng khi số lần lặp là biết trước.
// do-while: Thực thi ít nhất một lần trước khi kiểm tra điều kiện. Thường được sử dụng khi bạn muốn chắc chắn rằng khối mã sẽ được thực thi ít nhất một lần, ngay cả khi điều kiện là false từ đầu.

function tinderProfile(phone, nickName, relationship) // Định nghĩa hàm để tạo đối tượng
{
    return {
        phone: phone,
        nickName: nickName,
        relationship: relationship
    };
}
// const tinderprofile1 = (phone,nickName,relationship) => {
//     return {
//     phone: phone,
//     nickName: nickName,
//     relationship: relationship
// };}

// Sử dụng hàm để tạo các đối tượng
var profile1 = tinderProfile(123456789, "ShoukoNishimia", "Single");
var profile2 = tinderProfile(123233123, "Akaka", "Single");
var profile3 = tinderProfile(321321323, "Hanako", "inRelationship");
var profile4 = tinderProfile(312332132, "Nami", "Single");
var profile5 = tinderProfile(434243234, "Ichiko", "inRelationship");
var profile6 = tinderProfile(567567566, "Kimiko", "Single");

// Khởi tạo mảng để lưu trữ các profile
let ReadyProfiles = []
let NotReadyProfiles = []

// Lặp qua các profile để phân loại thành ReadyProfile và NotReadyProfile

var i = 1;
do {
    var currentProfile = eval("profile" + i);
    if (currentProfile.relationship === "Single") {
        ReadyProfiles.push(currentProfile);
    } else if (currentProfile.relationship === "inRelationship") {
        NotReadyProfiles.push(currentProfile);
    }
    i++;
} while (window["profile" + i] !== undefined);

// In ra thông tin của các ReadyProfile
console.log("Ready Profiles:");
console.log(ReadyProfiles);

// In ra thông tin của các NotReadyProfile
console.log("\nNot Ready Profiles:");
console.log(NotReadyProfiles);


// Arrow Function
// Ta có thể giản lược được dấu () với trường hợp có 1 tham số truyền vào.
// Ngoài ra, với arrow function ta có thể bỏ qua từ khoá return

const square = x => x * x;
console.log(square(5)); // In ra: 25

const sum = (a, b) => a + b;
console.log(sum(3, 4)); // In ra: 7

// Định nghĩa constructor function "Person"
// Một constructor function trong JavaScript được sử dụng để tạo ra các đối tượng mới. Bằng cách này, bạn có thể tạo ra nhiều đối tượng với các thuộc tính và phương thức tương tự mà không cần phải lặp lại mã nhiều lần.

function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Tạo ra một đối tượng "Person" mới
var person1 = new Person("Alice", 30);
var person2 = new Person("Bob", 25);

// In ra thông tin của các đối tượng
console.log(person1); // In ra: { name: 'Alice', age: 30 }
console.log(person2); // In ra: { name: 'Bob', age: 25 }

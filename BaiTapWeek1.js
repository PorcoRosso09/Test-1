/* - Biến được sử dụng để lưu trữ giá trị: 
Công thức: Var A = xx 
=> Khai báo biến A, gán giá trị XX cho nó */ 

// Khai báo 2 biến x, y nhận giá trị số bất kì
// Khai báo các biến sum, sub, mul, div lần lượt gán giá trị tổng, hiệu, tích, thương của x, y cho từng biến.
var x = 1; var y = 4;
var sum = x + y
var sub = x - y
var mul = x * y
var div = x / y
console.log(sum,sub,mul,div);

/*2. Các kiểu dữ liệu 
* Primitive types: 
- NUmber 
- String:
- Boolean */
var today = 'Sunday';
var isCloudy = true;
var currentTemperature = 30;
console.log(today,isCloudy,currentTemperature);

/* Specific types: 
- Undefined 
- Null */
var a;
let b = null;
console.log(a,b);

/* Reference types: 
- Array: mảng> mảng một chuỗi data cùng kiểu dữ liệu 
- Object: Sẽ bao gồm nhiều biến, có thể khác kiểu dữ liệu 
Object và Array khác nhau ở chỗ 
- Các phần tử trong array thường phải có kiểu dữ liệu giống nhau, còn value trong object có thể bao gồm bất kì kí tự nào bao gồm số nguyên, chuỗi, mảng */
let person = {
    name: 'Nam',
    age: 14,
    city: 'Ha Noi'
  };
  console.log (person);

 /* Hãy khai báo một mảng rỗng fruits. Sau đó, thêm vào mảng này các phần tử sau:

  "Apple"
  "Banana"
  "Orange"
  "Grape"
  "Mango" */
  
  let fruit = []
  fruit.push('apple'),
  fruit.unshift('orange'),
  fruit.push('banana'),
  fruit.push('grape'),
  fruit.push('mango'),
  console.log (fruit);
/*
Khai báo một array "listAnimal" chứa các object mô tả danh sách các con vật.
Mỗi con vật có 2 thuộc tính: name và age trong đó name có kiểu string, age có kiểu number.
 * {name}: string;
 * {age}: number;
*/
  let listAnimal = [
    {name: 'cat', age: 12,
    name1 : 'dog', age1: 10,
    name2: 'tiger', age2:5}
    ];
    console.log(listAnimal);
// cách 2
    let listAnimal1 = [
        {name: 'cat', age: 12},
        {name: 'dog', age: 10},
        {name: 'tiger',age:5}
        ];
        console.log(listAnimal1);

        
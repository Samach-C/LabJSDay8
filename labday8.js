// lab 1
// ให้สร้าง Class ชื่อ Calculator มี property และ method ดังนี้
//  - value คือค่าตัวเลขปัจจุบัน (เริ่มต้นเป็น 0 หรือตามที่กำหนด) เช่น new Calculator(10) ให้ value มีค่าเท่ากับ 10
//  - add() ให้รับค่าตัวเลขและรวมผลรวมเข้าใน value
//  - subtract() ให้รับค่าตัวเลขและหักออกจาก value
//  - multiply() ให้รับค่าตัวเลขและคูณตัวเลขกับ value
//  - divide() ให้รับค่าตัวเลขและนำไปหาร value
//  - show() ให้console.log ค่า value

// class Calculator {
//   constructor(_init = 0) {
//     this.value = _init
//   }
//   add(num) {
//     this.value += num
//     return this.value
//   }
//   subtract(num) {
//     this.value -= num
//     return this.value
//   }
//   multiply(num) {
//     this.value *= num
//     return this.value
//   }
//   divide(num) {
//     this.value /= num
//     return this.value
//   }

//   show() {
//     console.log(`Value = ${this.value}`)
//   }
// }

// let result = new Calculator(10)
// result.show()
// console.log(result.add(50))
// console.log(result.subtract(50))
// console.log(result.multiply(50))
// console.log(result.divide(50))


// Lab 2
// ให้สร้าง Class ชื่อ Sale
// - มี property ชื่อ name,amount,price
// - มี method calcPrice()
// - ให้เขียน code คำนวณราคาไว้ที่ method นี้
// ให้สร้าง Class ชื่อ Beverage สืบทอดมาจาก Sale
// - มี property ชื่อ amount, และ price
// - ให้สร้าง object ชื่อ beverage จาก Beverage โดย
// - name = “Pepsi”, amount = 3, price = 19
// - ให้ beverage เรียก method calcPrice() และแสดงผลของ calcPrice() ที่ได้

// class Sale {
//   constructor(_name,_amount,_price) {
//     this.name = _name
//     this.amount = _amount
//     this.price = _price
//   }

//   calcPrice() {
//     return this.amount * this.price
//   }
// } 

// class Beverage extends Sale {
//   constructor(_name, _amount, _price) {
//     super(_name, _amount, _price)
//   }
// }

// let result = new Beverage ('Pepsi', 3, 19)
// console.log(result.calcPrice())


// Lab-1
// จงเขียนฟังก์ชัน isArray(input) เพื่อตรวจสอบว่า input เป็น Array หรือไม่
// let arr = [1, 2, 3, 4]
// let obj = {
//   name: 'You'
// }

// let checkArr = (arr) => {
//   return Array.isArray(arr)
// }

// let result = checkArr(arr)
// let result2 = checkArr(obj)
// console.log(result)
// console.log(result2)


// lab 1
// ให้คำนวณผลรวมของ salaries ใน object โดยใช้ Object.keys, Object.values
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

// let key = Object.keys(salaries)
// console.log(key)
// let sumSalaries = key.reduce((prev, curr) => {
//   return prev += salaries[curr]
// }, 0)

// console.log(sumSalaries)

// let value = Object.values(salaries)
// console.log(value)
// let sumSalaries2 = value.reduce((prev, curr) => {
//   return prev += curr
// }, 0)

// console.log(sumSalaries2)


// Lab 2
// ให้เขียนฟังก์ชัน checkEmptyObj(obj) เพื่อเช็คว่า obj เป็น object ว่างหรือไม่ 
// let checkEmptyObj = obj => Object.keys(obj) == 0
// let empty1 = {}
// console.log(checkEmptyObj(empty1))



// ---------------------------------------//
// Lab 1
// จงเขียนฟังก์ชันหาค่าผลคูณของตัวเลข โดยพารามิเตอร์ของฟังก์ชันสามารถรับตัวเลขได้ไม่จำกัด
// let calMulti = (...nums) => {
//   let sum = 1
//   for (let num of nums) {
//     console.log(num)
//     sum *= num
//   }
//   return sum

// }
// let result = calMulti(1, 2, 3, 4, 5)
// console.log(result)


// Lab 2
// จงเขียนฟังก์ชัน filterOutOdds โดยพารามิเตอร์ของฟังก์ชันสามารถรับตัวเลขได้ไม่จำกัด 
// และให้ return ค่าเป็น array ของเลขที่เป็นเลขคู่
// let filterOutOdds = (...nums) => {
//   let odd = nums.filter((item) => {
//   console.log(item)
//   return item % 2 == 0
//   })
//   return odd
// }

// let result = filterOutOdds(1, 2, 3, 4, 5, 6, 7, 8)
// console.log(result)


// Lab 3
// จงเขียนฟังก์ชัน mergeObjects โดยพารามิเตอร์ของฟังก์ชันสามารถรับ Object ได้ไม่จำกัด 
// และให้ return ค่าเป็น Object ที่เกิดจาก Object ในพารามิเตอร์มา merge กัน
// let mergeObjects = (...obj) => {
//   console.log(obj)
//   let empty = {}
//   for (let i = 0; i < obj.length; i++) {
//     Object.assign(empty, obj[i])
//     console.log(obj[i])
//   }
//   return empty
// }
// let obj1 = {
//   fname: 'Samach',
//   lname: 'Chao-ophart'
// }
// let obj2 = {
//   nickName: 'Ood'
// }

// let result = mergeObjects(obj1, obj2)
// console.log(result)


// Rest and Spread operator
// Lab 4
// - จงรวม nums1 และ num2 เข้าด้วยกัน
// - จงสร้าง array ที่ได้จากการนำ nums1 และ nums2 มารวมกัน แต่ให้เพิ่ม 5 เข้าไปก่อน nums1 และเพิ่ม - 6, -1 เข้าไประหว่าง nums1 กับ nums2
// - หาผลรวมของทุก element ใน Array ที่ได้

// let nums1 = [1, -2, 3, 4];
// let nums2 = [8, 3, -8, 1];

// let nums3 = [5, ...nums1, -6, -1, ...nums2]
// console.log(nums3)

// let sum = nums3.reduce((prev, curr) => {
//   return prev += curr
// }, 0)

// console.log(sum)


// Lab 5
// - จงเขียนฟังก์ชันที่ใช้คุณสมบัติของ Spread operator เพื่อรับค่า array1
// แล้วคืนค่าเป็น array ที่มีการเปลี่ยนแปลงค่าของ index ที่ 3 ให้มีค่าเท่ากับ 
// ค่าเดิมยกกำลัง 2 โดยที่ array1 ไม่เกิดการเปลี่ยนแปลง
// let editArr = () => {
//   let newArr = [...arr]
//   console.log(newArr)
//   // if (newArr.length > 3){

//   // }
//   newArr[3] = newArr[3] ** 2
//   return newArr
// }

// let arr = [2, 3, 4, 5, 6]
// let result = editArr(arr)
// console.log(result)


// Lab 6
// - จงเขียนฟังก์ชันที่รับค่า ชื่อ นามสกุล และ งานอดิเรก ซึ่งงานอดิเรกอาจมี 1 หรือมากกว่า 1 ก็ได้ 
// แล้วคืนค่าเป็น ชื่อ, นามสกุล, งานอดิเรก และจำนวนงานอดิเรก 
// โดยใช้คุณสมบัติของ spread parameter
// let handlePerson = (fname, lname, ...hobbies) => {
//   console.log(hobbies)
//   return [fname, lname, ...hobbies]
// }

// let result = handlePerson('Samach', 'Chao-ophart', 'Html', 'CSS', 'Javascript')
// console.log(result)


// Lab 7
// จงเขียนฟังก์ชัน doubleAndReturnArgs โดยรับพารามิเตอร์มาเป็น Array 
// และตัวเลขกี่ตัวก็ได้ และ return ค่าเป็น Array ที่ประกอบด้วยค่าเดิมในพารามิเตอร์ที่เป็น 
// Array และค่าพารามิเตอร์ที่เป็นตัวเลขคูณสอง

// doubleAndReturnArgs([1, 2, 3], 4, 4)
// // expexted result: [1, 2, 3, 8, 8]
// doubleAndReturnArgs([2], 10, 4)
// // expexted result: [2, 20, 8]
// let doubleArr = (arr, ...num) => {
//   console.log(arr)
//   console.log(num)
//   let doubleArr = num.map((item) => item * 2)
//   console.log(doubleArr)
//   return arr.concat(...doubleArr)
// }

// let result = doubleArr([1, 2, 3], 4, 4)
// console.log(result)
// console.log('---------------------------')
// let result2 = doubleArr([2], 10, 4)
// console.log(result2)


// Lab 9
// - จงเขียนฟังก์ชัน cloneArray โดยรับพารามิเตอร์มาเป็น Array และ return 
// ค่าเป็น Array ที่มี element เหมือนกับพารามิเตอร์ที่รับเข้ามาทุกตัว
// let cloneArray = () => {
//   let newArr = [...arr]
//   console.log(newArr)
//   return newArr
// }

// let arr = [5, 6, 7, 8, 9]
// let result = cloneArray(arr)
// console.log(result)


// Lab 10
// - จงเขียนฟังก์ชัน cloneObject โดยรับพารามิเตอร์มาเป็น Object และ return 
// ค่าเป็น Object ที่มี key - value เหมือนกับพารามิเตอร์ที่รับเข้ามาทุกตัว
// let cloneObject = () => {
//   let newObj = {...obj}
//   console.log(newObj)
//   return newObj
// }

// let obj = {
//   name: 'Sombat',
//   surname: 'bat',
//   age: 18
// }
// let result = cloneObject(obj)
// console.log(result)


// Lab 11
// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร
// let [first, second, third] = ['Maya', 'Marisa', 'Chi']
// console.log(first)
// // Ans: Maya
// console.log(second)
// // Ans: Marisa
// console.log(third) 
// // Ans: Chi


// Lab 12
// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร
// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//   'Raindrops on roses',
//   'whiskers on kittens',
//   'Bright copper kettles',
//   'warm woolen mittens'
// ]

// console.log(raindrops)
// // Ans: Raindrops on roses
// console.log(whiskers)
// // Ans: whiskers on kittens
// console.log(aFewOfMyFavoriteThings)
// // Ans: Array (2)[Bright copper kettles,warm woolen mittens ]


// Lab 13
// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร
// let numbers = [10, 20, 30]

// [numbers[1], numbers[2]] = [numbers[2], numbers[1]]
// console.log(numbers)
// // Ans: ReferenceError


// Lab 14
// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร
// let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 }
// let { numPlanets, yearNeptuneDiscovered } = facts

// console.log(numPlanets)
// // Ans: 8
// console.log(yearNeptuneDiscovered)
// // Ans: 1846


// Lab 15
// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร
// let planetFacts = {
//   numPlanets: 8,
//   yearNeptuneDiscovered: 1846,
//   yearMarsDiscovered: 1659
// }
// let { numPlanets, ...discoveryYears } = planetFacts
// console.log(discoveryYears)
// // Ans: Object{ yearMarsDiscovered:1659,yearNeptuneDiscovered:1846 }


// Lab 16
// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร
// function getUserData({ firstName, favoriteColor = 'green' }) {
//   return `Your name is ${firstName} and you like ${favoriteColor}`
// }

// let result = getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' })
// console.log(result)
// // Ans: Your name is Alejandro and you like purple

// let result2 = getUserData({ firstName: 'Melissa' })
// console.log(result2)
// // Ans: Your name is Melissa and you like green

// let result3 = getUserData({});
// console.log(result3)
// // Ans: Your name is undefined and you like green //ไม่ได้ระบุชื่อเลยเป็น  undefined


// Lab 17
// ให้ใช้ Array destructuring ในการสลับค่าตัวแปร guest กับ admin
// let guest = 'Jane';
// let admin = 'Pete';
// [guest, admin] = ['Jane', 'Pete']
// [guest, admin] = [admin, guest]
// console.log(guest)
// console.log(admin)


// Lab 18
// จงเขียนฟังก์ชันตรวจสอบอายุ โดยรับข้อมูล user ที่อยู่ใน object ที่มี keys เป็น 
// firstName lastName และ age โดยถ้า user มีอายุมากกว่า 18 ให้แสดงผลเป็น
// การทักทายแล้วตามด้วยชื่อ - นามสกุล ในกรณีที่มีอายุน้อยกว่าหรือเท่ากับ 18 ให้แสดงผลว่า 
// ไม่มีสิทธิ์เข้าใช้งาน(ใช้ destructuring)
// let user = {
//   firstName: "Monica",
//   lastName: "Thaypun",
//   age: 20
// }
// let{firstName: f, lastName: l, age} = user

// function checkAge (){
//   age > 18 ?console.log('hello!',f,l) :console.log('No permission to access')
// //  console.log(age)
// }

// checkAge()


// Lab 19
// จงเขียน Object destructuring โดยกำหนดให้
// - ตัวแปร name เก็บค่า name property
// - ตัวแปร age เก็บค่า years property
// - ตัวแปร isAdmin เก็บค่า isAdmin property หากไม่มีค่าให้ default value เป็น false
// let user = {
//   name: 'John',
//   years: 27
// }

// let {name: nameProperty, years: ageProperty , isAdmin: isAdminProperty = 'false'} = user
// console.log(user)


// Lab 21
// ให้ใช้ Array destructuring โดยให้ a, b, c, d, e และ f 
// มีค่า 1, 2, 3, 4, 5, และ 6 ตามลำดับ
// let arr = [1, [2, [[[3, 4], 5], 6]]]

// let [a, [b, [[[c, d], e], f]]] = arr
// console.log(arr)


// Lab 22
// ให้ใช้ Object destructuring โดยให้ a เท่ากับ 5 และ b เท่ากับ 10
// const obj = { prop: 5, prop2: 10 }

// let { prop: a, prop2: b } = obj;

// console.log(obj)


// Lab 23
// a และ b มีค่าเท่าไร
// let a, b
// { a, b } = { a: 1, b: 2 }
//Ans: syntax error


// Lab 24
// a และ b มีค่าเท่าไร
// const [, , , a, b] = [1, 2, 3]
//Ans: undefined


// Lab 25
// ให้ใช้ destructuring โดยให้ x เท่ากับ 5 และ y เท่ากับ 100
// const q = { prop: 5, prop2: [10, 100] }

// let {prop: x, prop2:[z, y]} = q 
// console.log(x)
// console.log(y)


// Lab 26
// ให้ใช้ destructuring โดยให้ x เท่ากับ Hello และ y เท่ากับ b
// const q = {
//   prop: 'Hello',
//   prop2: {
//     prop2: {
//       nested: ['a', 'b', 'c']
//     }
//   }
// }

// let {
//   prop: x,
//   prop2: {
//     prop2: {
//       nested:[z, y, w]
//     }
//   }
// } = q;

// console.log(x)
// console.log(y)


// Lab 27
// ให้ใช้ for … of กับ names(ให้ destructuring object ในแต่ละ iteration)
// ในแต่ละ iteration ให้ console.log ค่า Full name ออกมา
// const names = [
//   { firstName: 'John', lastName: 'Doe' },
//   { firstName: 'Jack', lastName: 'Dann' },
//   { firstName: 'Joe', lastName: 'Dunne' }
// ]
// for (let item of names) {
//   let { firstName, lastName} = item
//   console.log(`${firstName} ${lastName}`)
// }


// Lab 28
// ให้ใช้ for … of กับ users(ให้ destructuring object ในแต่ละ iteration)
// ในแต่ละ iteration ให้ console.log ค่า user ตามด้วย age หาก age ไม่มีค่าให้ใช้ unknown
// const users = [
//   { user: "Name1" },
//   { user: "Name2", age: 2 },
//   { user: "Name2" },
//   { user: "Name3", age: 4 }
// ]

// for (let item of users) {

// let { user , age = 'unknown'} = item
//   console.log(`${user} ${age}`)
// }
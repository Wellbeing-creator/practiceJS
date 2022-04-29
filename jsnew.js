// 3+4
// let myName
// myName='Nastya'
// console.log(myName)
// console.log (console.log(10))

// const myNick = 'Q'
// console.log(myNick)

// const objectA = {
//     a: 10,
//     b: true
// }

// const copyOfA = objectA
// //меняем значение переменной, чтобы изменить объект
// copyOfA.a = 20

// copyOfA.c = 'abc'


// const myCity = {
//     city: 'Minsk',
//     popular: true,
//     country: 'Belarus'
// }
// console.log(myCity.city)
// console.log(myCity.popular)
// console.log(myCity.country)
// console.log(myCity)

// myCity.city = 'Brest'
// console.log(myCity.city)
// console.log(myCity)

// const strangePerson = {
//     name: 'Vasya',
//     height: '2m',
//     local: true
// } 
// console.log(strangePerson.height)

// strangePerson.town = 'Vileika'
// console.log(strangePerson.town)
// console.log(strangePerson)

// delete strangePerson.height
// console.log(strangePerson)
// ________________________
// const bdUser = {
//     userName: 'Petya',
//     userTown: 'Minsk'
// }
// console.log(bdUser)




// bdUser['userName'] = 'Vik'
// console.log(bdUser)

// const fullUserName = 'FIO'  //есть переменная
// bdUser[fullUserName] = 'Vik Brown' //присваиваем объекту свойство через переменную
// console.log(bdUser) //выведет новое свойство FIO, 
//                     // которое считалось переменной в квадратных скобках

// -------------------------------------

// const bdUser = {
//     userName: 'Petya',
//     info: {
//         userTown: 'Minsk',
//         isPopular: true
//     }
// }
// console.log(bdUser)
// console.log(bdUser.info.userTown)

// bdUser.info.userAdress = 'Gorodeckaya'
// console.log(bdUser)

// delete bdUser.info['isPopular'] //квадратные скобки заменяют свойство
// console.log(bdUser)

// ------------------------------------------------


// const localUser = 'Dan'
// const globalUser = 'admin'

// const userProfile = {
//     user1: localUser,
//     user2: globalUser
// }
// console.log(userProfile)
// ______________________________

// const userPhone = '804430422222'
// const userLog = 123456
// const userPhoneBook = {
//     userPhone,
//     userLog,
//     userName: 'Mike'
// }
// console.log(userPhoneBook)
// ________________________________


// const userPhoneBook = {
//     userName: 'Mike',
//     userAction () {
//         console.log('Greetings!!!')
//     }
// }
// console.log(userPhoneBook)
// userPhoneBook.userAction()
// --------------------------------------------------------------------

// const person ={
//     name: 'Bob',
//     age: 21
// }

// person2 = person

// person2.age = 26
// person2.isAdult = true

// console.log(person.age)
// console.log(person.isAdult)

// _____________________________

// const person ={
//     name: 'Bob',
//     age: 21
// }

// person2 = Object.assign({}, person)

// person2.age = 26
// person2.isAdult = true

// console.log(person)
// console.log(person2)

// ____________________
// вариант 2
// const person ={
//     name: 'Bob',
//     age: 21
// }

// person2 = {...person}

// person2.age = 26
// person2.isAdult = true

// console.log(person)
// console.log(person2)

// -----------------------------------

// // ВАРИАНТ3 КОПИРОВАНИЕ без мутаций
// const person ={
//     name: 'Bob',
//     age: 21
// }

// const person2 = JSON.parse(JSON.stringify(person))

// person2.age = 26
// person2.isAdult = true

// console.log(person)
// console.log(person2)

// ____________________________________________________________________________________
// ФУНКЦИИ

// let a = 5
// let b = 3
// let c

// c = a + b
// console.log(c)

// a = 8
// b = 12

// c = a + b
// console.log(c)

// --------------

// let a = 5
// let b = 3

// function sum(a, b){
//     const c = a + b
//     console.log(c)
// }
// sum(a, b)

// a = 8
// b = 12
// sum(a, b)

// -------------

// function myFn (a, b) {
//     let c
//     a = a + 1
//     c = a + b
//     return c
// }
// myFn(2, 5)
// ----------------------------------
// function myFace (eyes, brows) {
//     let face
//     eyes = eyes + 1
//     face = eyes + brows
//     return face
// }
// myFace(1, 2)
// console.log(myFace(1, 2))
// _____________________________________________

// const personOne = {
//     name: 'Bob',
//     age: 21
// }

// function increasePersonAge(person) {
//     person.age += 1
//     return person
// }

// increasePersonAge(personOne)
// console.log(personOne.age)
// ------------------------------

// // Copy of the object

// const personOne = {
//     name: 'Bob',
//     age: 21
// }

// function increasePersonAge(person) {
//     const updatedPerson = Object.assign({}, person)
//     updatedPerson.age += 1
//     return updatedPerson
// }

// const updatedPersonOne = increasePersonAge(personOne)
// console.log(personOne.age)
// console.log(updatedPersonOne.age)

// --------------------------------------------
// // Callbackfunction

// function writeLetter() {
// //код
// }

// function usePencil(useBlackColor) {
//     useBlackColor()
// }

// usePencil(writeLetter)
// ----------------------------------

// function printMyName() {
//     console.log('Bob')
// }
 
// setTimeout(printMyName, 1000)
// ----------------------------
// глобальные и локальные переменные

// let a
// let b
// function myFn() {
//     let b
//     a = true
//     b = 10
//     console.log(a)
// }
// myFn()

// console.log(a)
// console.log(b)
// ------------------

// const a = 5
// function myFn() {
//     function innerFn() {
//         console.log(a)
//     }
//     innerFn()
// }

// myFn()
// console.log(myFn())


// __________________________________________________________
// ОПЕРАТОРЫ

// const button = {
//     width: 200,
//     text: 'Buy'
// }

// const redButton = {
//     ...button,
//     color: 'red'
// }

// console.table(redButton)
// ---------------------------------

// const a = 'Меня зовут'
// const b = 'Настя'
// const dot = '.'
// const c = 'Я живу'
// const d = 'в Минске'

// const myName = a + ' ' + b + dot
// console.log(myName)
// const livingTown = `${c} ${d}${dot}`
// console.log(livingTown)

// __________________________________________

// const b = 'Настя'
// const d = 'Минске'

// const myName = 'Меня зовут '+ b +'.'
// console.log(myName)
// const livingTown = `Я живу в ${d}.`
// console.log(livingTown)
// ____________________________________________________

// ФУНКЦИОНАЛЬНЫЕ ВЫРАЖЕНИЯ И СТРЕЛОЧНЫЕ ФУНКЦИИ

// a = 5 
// b = 7

// const myExpression = function(a, b) {
//     let c
//     a = a + 1
//     c = a + b
//     return c
// }

// console.log (myExpression(10,20))


// _______________________________________________

//  const  myLetter= {
//      textLength: 20,
//      color: 'red',
//      pencil: 'black'
// }

// const newLetter = (myLetter, timeAdding =  Date()) => ({
//     ...myLetter,
//     timeAdding
// })

// myLetter.penColor = 'green'
// newLetter(myLetter)
// console.table(newLetter(myLetter))

// __________________________________________________________

// ***********Errors

// const getError = () => {
//     throw new Error('Some error')
// }
// getError()
// console.log ('continue...')
// ___________________________________________________

// МАССИВЫ

// const myArray = [1, 2, 3]
// console.log(myArray)

// myArray.forEach(el => console.log(el*2))
// console.log(myArray)

// __________________

// const myArray = [1, 2, 3]
// console.log(myArray)

// const newArray = myArray.map(el => el * 3)
// //myArray.forEach(el => console.log(el*2))
// console.log(myArray)
// console.log(newArray)
// _____________________________________________________________
// Деструктуризация в функциях

// const userProfile = {
//     name: 'Bob',
//     commentsQty: 23,
//     hasSignedAgreement: false,
// }

// const userInfo = ({ name, commentsQty}) => {
//     if (!commentsQty) {
//         return `User ${name} has no comments`
//     }
//     return `User ${name} has ${commentsQty} comments`
// }

// userInfo(userProfile)
// console.log (userInfo(userProfile))

// ----------------------------------

// const userProfile = {
//     name: 'Bob',
//     commentsQty: 23,
//     hasSignedAgreement: false
// }

// function userInfo(userProfile2) {
//     userProfile2.name = 'Nick', 
//     userProfile2.commentsQty += 25
//     return userProfile2
//     // if (!commentsQty) {
//     //     return `User ${name} has no comments`
//     // }
//     // return `User ${name} has ${commentsQty} comments`
// }

// userInfo(userProfile)
// console.log(userProfile.name)
// console.log(userProfile.commentsQty)

// -----------------------------------------

// const userProfile = {
//     name: 'Bob',
//     commentsQty: 23,
//     hasSignedAgreement: false
// }

// function userInfo(name, commentsQty) {
//     let userProfile2 = {name, commentsQty}
//     // name = 'Nick', 
//     // commentsQty += 25
//     return userProfile2
//     // console.log(userProfile2)
//     if (!commentsQty) {
//         return `User ${name} has no comments`
//     }
//     return `User ${name} has ${commentsQty} comments`
// }

// userInfo('Mike', 50)
// console.log(userInfo('Mike', 50))
// // console.log(userProfile.commentsQty)

// _________________________________________________________________

// ----------------------------------------
// GOOD

// const userProfile = {
//     name: 'Bob',
//     commentsQty: 23,
//     hasSignedAgreement: false
// }

// const userInfo = (userProfile2) => {
//     const {name, commentsQty} = userProfile2  
//     if (!commentsQty) {
//         return `User ${name} has no comments`
//     }
//     return `User ${name} has ${commentsQty} comments`
// }

// userInfo(userProfile)
// console.log (userInfo(userProfile))
// -------------------------------------------------------

// const person = {
//     age: 20
// }

// if (!person.name) {
//     console.log('Имя не указано')
// }

// ___________________________________
 

// class Comment {
//     constructor(text) {
//         this.text = text
//         this.votesQty = 0
//     }
//     upvote() {
//         this.votesQty +=1
//     }
// }

// const firstComment = new Comment('First comment')
// console.log(firstComment.text)
// --------------------------------------------
// ________________КЛАССЫ__________________

// class Comment {
//     constructor(text) {
//         this.text = text
//         this.votesQty = 0
//     }
//     upvote() {
//         this.votesQty +=1
//     }

// static mergeComments(first, second){
//     return `${first} ${second}`
//     }
// }

// class Rabbit {}
// let rabbit = new Rabbit();

// // это объект класса Rabbit?
// console.log( rabbit instanceof Rabbit );

// class User {

//     constructor(name) {
//       this.name = name;
//     }
  
//     sayHi() {
//       console.log(this.name);
//     }
  
//   }
  
//   // Использование:
//   let user = new User("Иван");
//   user.sayHi();
// ---------


// class Car {}
// let bmw = new Car();

// // bmw это объект класса Car?
// console.log( bmw instanceof Car );

// -----------------

class Cars {
    constructor(audi) {
        this.audi = audi
        this.speed = 0
    }
    driveFast() {
        this.speed += 20
        console.log(this.audi)
        console.log(this.speed)
    }
}

let audiX = new Cars('Minivan' + ' box')
audiX.driveFast()
audiX.driveFast()
audiX.driveFast()
audiX.driveFast()

// // let audiXXX = new Cars('Truck')
// // audiXXX.driveFast()
// // audiXXX.driveFast()
// // audiXXX.driveFast()
// // audiXXX.driveFast()

// ------------------------------------------------

// class Rectange {
//     width
//     height

//     constructor(w, h) {
//         this.width = w
//         this.height = h
//     }

//     calcArea() {
//         return this.width * this.height
//     }
// }

// const rect = new Rectange(5, 10)
// const rect2 = new Rectange(5, 70)
// rect.calcArea()
// console.log(rect.calcArea())
// console.log(rect2.calcArea())
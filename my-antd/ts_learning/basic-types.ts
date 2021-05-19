let isDone: boolean = false
// let isDone: boolean = 123  Wrong

let age: number = 20
let binaryNumber: number = 0b1111

let firstName: string = 'viking'
let message: string = `Hello ${firstName}`

// undefined和null类型的区别
// strictNullChecks null和undefined是否相同
let u: undefined = undefined
let n: null = null

// 宽泛的约束条件
let notSure: any = 4
notSure = "it is a string"
notSure = true 

// notSure.myName   Yes
// notSure.getName()  Yes

// 联合类型
let numberOrString: number | string = 234
numberOrString = "abc"

// 数组
let arrOfNumbers: number[] = [1,2,3,4,5] 
// let arrOfNumbers: number[] = [1,2,3,4,5, "aaa"] Wrong
// arrOfNumbers.push("str")  Wrong

function test(){
  console.log(arguments)
}

// 明确数组元素类型， 第一个元素是string, 第二个是Number
let user: [string, number] = ["111", 20]
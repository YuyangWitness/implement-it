// 泛型，定义的时候不指定类型，在使用的时候来指定类型

function echo<T>(arg: T): T {
  return arg
}

let result = echo("hello")


function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}

let result2 = swap(["123", 44])

interface IWithLength{
  length: number
}

// 约束泛型
// T extends IWithLength表示传入的T这个类型一定要有length
function echoWithLength<T extends IWithLength>(arg: T): T{
  console.log(arg.length)
  return arg
}

let result3 = echoWithLength([1, 2, 3])
let str = echoWithLength("123")
let obj = echoWithLength({length: 2})
console.log(result3)

// class的泛型
class Queue<T> {
  private data: T[] = []
  push(item: T) {
    return this.data.push(item)
  }
  pop(): T | undefined {
    return this.data.shift()
  }
}

let q = new Queue<number>()
q.push(123)


// interface的泛型
interface KeyPaire<T, U> {
  key: T
  value: U
}

let kp1: KeyPaire<string, number> = {
  key: "123",
  value: 123
}
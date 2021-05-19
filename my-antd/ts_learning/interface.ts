interface Person {
  name: string
  age: number 
}


// age可选属性
interface Person2 {
  name: string
  age?: number
}

// readonly只读属性
interface Person3 {
  readonly id: number
}

let p: Person3 = {
  id: 123
}

// p.id = 123   Wrong

// 必须完全匹配Person
let viking: Person = {
  name: "yag",
  age: 34,
}


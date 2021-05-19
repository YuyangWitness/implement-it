function add(x: number, y: number): number {
  return x + y
}


// add(2) Wrong
// add(2, 3, 4) Wrong
let result = add(2, 3)



// 可选参数只可以放在后面
function add2(x: number, y: number, z?: number): number {
  if(typeof z === 'number') {
    return z
  }
  return x + y
}

// 函数类型
const add3: (x: number, y: number, z?: number) => number = add2

export {}
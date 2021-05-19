/**
 * 
 * 写一个 mySetInterVal(fn, a, b),每次间隔 a,a+b,a+2b,...,a+nb 的时间，然后写一个 myClear，停止上面的 mySetInterVal
 * 
 */

function mySetInterVal(fn, a, b) {
  this.time = 0
  this.a = a
  this.b = b
  this.fn = fn
}

mySetInterVal.prototype.start = function() {
  this.handle = setTimeout(() => {
    this.fn()
    this.time++
    this.start()
  }, this.a + this.time * this.b)
}

mySetInterVal.prototype.stop = function() {
  clearTimeout(this.handle)
  this.time = 0
}

const m = new mySetInterVal(() => {console.log("hello")}, 1000, 1000)

m.start()
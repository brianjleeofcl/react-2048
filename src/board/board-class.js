class Board {
  constructor(n) {
    this.array = Array(n * n).fill(0)
    this.scale = n
    this.score = 0
  }

  get matrix() {
    const len = this.array.length ** 0.5
    const arr = []
    for (let i = 0; i < len; i++) {
      arr.push(this.array.slice(i * len, (i + 1) * len))
    }
    return arr
  }

  set matrix(mtx) {
    this.array = [].concat(...mtx)
  }

  init() {
    const index1 = Math.floor(Math.random() * this.array.length)
    let index2 = Math.floor(Math.random() * this.array.length)
    while (index1 === index2) {
      index2 = Math.floor(Math.random() * this.array.length)
    }

    this.newSquare(index1)
    this.newSquare(index2)
    this.calcScore()
  }

  newSquare(index) {
    this.array[index] = Math.random() > .8 ? 4 : 2
  }

  calcScore() {
    this.score = this.array.reduce((a,b) => a + b, 0)
  }
}

module.exports = Board;

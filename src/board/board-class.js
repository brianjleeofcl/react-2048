class Board {
  constructor(n) {
    this.array = Array(n * n).fill(0)
    this.scale = n
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
}

module.exports = Board;

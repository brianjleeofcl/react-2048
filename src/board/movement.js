import Board from './board-class'

const movements = {
  left(board) {
    const matrix = Array.from(board.matrix)

    for (const row of matrix) {
      let done = 0
      for (let i = 1; i < row.length; i++) {
        if (row[i] && (row[done] === row[i])) {
          row[done] += row[i]
          row[i] = 0
          done++
        }
        if (row[i] && row[done] && (row[done] !== row[i])) {
          done++
        }
        if (row[i] && !row[done]) {
          row[done] = row[i]
          row[i] = 0
        }
      }
    }

    const output = new Board(board.scale)
    output.matrix = matrix
    return output
  },

  right(board) {
    const matrix = Array.from(board.matrix)

    for (const row of matrix) {
      row.reverse()
      let done = 0
      for (let i = 1; i < row.length; i++) {
        if (row[i] && (row[done] === row[i])) {
          row[done] += row[i]
          row[i] = 0
          done++
        }
        if (row[i] && row[done] && (row[done] !== row[i])) {
          done++
        }
        if (row[i] && !row[done]) {
          row[done] = row[i]
          row[i] = 0
        }
      }
      row.reverse()
    }

    const output = new Board(board.scale)
    output.matrix = matrix
    return output
  },

  up(board) {
    const array = Array.from(board.array)
    const n = board.scale
    const matrix = []

    for (let i = 0; i < board.scale; i++) {
      matrix[i] = []
    }

    for (let i = 0; i < array.length; i++) {
      matrix[i % n].push(array[i])
    }

    for (const row of matrix) {
      let done = 0
      for (let i = 1; i < row.length; i++) {
        if (row[i] && (row[done] === row[i])) {
          row[done] += row[i]
          row[i] = 0
          done++
        }
        if (row[i] && row[done] && (row[done] !== row[i])) {
          done++
        }
        if (row[i] && !row[done]) {
          row[done] = row[i]
          row[i] = 0
        }
      }
    }

    const outputArr = []
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        outputArr[j * n + i] = matrix[i][j]
      }
    }

    const output = new Board(n)
    output.array = outputArr
    return output
  },

  down(board) {
    const array = Array.from(board.array)
    const n = board.scale
    const matrix = []

    for (let i = 0; i < board.scale; i++) {
      matrix[i] = []
    }

    for (let i = 0; i < array.length; i++) {
      matrix[i % n].push(array[i])
    }

    for (const row of matrix) {
      row.reverse()
      let done = 0
      for (let i = 1; i < row.length; i++) {
        if (row[i] && (row[done] === row[i])) {
          row[done] += row[i]
          row[i] = 0
          done++
        }
        if (row[i] && row[done] && (row[done] !== row[i])) {
          done++
        }
        if (row[i] && !row[done]) {
          row[done] = row[i]
          row[i] = 0
        }
      }
      row.reverse()
    }

    const outputArr = []
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        outputArr[j * n + i] = matrix[i][j]
      }
    }

    const output = new Board(n)
    output.array = outputArr
    return output
  }
}

export default movements;

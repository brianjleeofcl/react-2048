import Board from './board-class'

const movements = {
  left(board) {
    const matrix = Array.from(board.matrix)
    const n = board.scale

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

    const output = new Board(n)
    output.matrix = matrix

    if(eql(board.array, output.array)) {
      return board
    } else {
      const emptySpots = []
      for (let i = 0; i < n; i++) {
        if (!output.array[(n - 1) + i * n]) {
          emptySpots.push((n - 1) + i * n)
        }
      }
      const newIndex = emptySpots[Math.floor(Math.random() * emptySpots.length)]
      output.newSquare(newIndex)
      output.calcScore()
      return output
    }
  },

  right(board) {
    const matrix = Array.from(board.matrix)
    const n = board.scale

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

    const output = new Board(n)
    output.matrix = matrix

    if(eql(board.array, output.array)) {
      return board
    } else {
      const emptySpots = []
      for (let i = 0; i < n; i++) {
        if (!output.array[i * n]) {
          emptySpots.push(i * n)
        }
      }
      const newIndex = emptySpots[Math.floor(Math.random() * emptySpots.length)]
      output.newSquare(newIndex)
      output.calcScore()
      return output
    }
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

    if(eql(board.array, output.array)) {
      return board
    } else {
      const emptySpots = []
      for (let i = n ** 2 - n; i < n ** 2; i++) {
        if (!output.array[i]) {
          emptySpots.push(i)
        }
      }
      const newIndex = emptySpots[Math.floor(Math.random() * emptySpots.length)]
      output.newSquare(newIndex)
      output.calcScore()
      return output
    }
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

    if(eql(board.array, output.array)) {
      return board
    } else {
      const emptySpots = []
      for (let i = 0; i < n; i++) {
        if (!output.array[i]) {
          emptySpots.push(i)
        }
      }
      const newIndex = emptySpots[Math.floor(Math.random() * emptySpots.length)]
      output.newSquare(newIndex)
      output.calcScore()
      return output
    }
  }
}

function eql(arr1, arr2) {
  return arr1.every((_, i) => arr1[i] === arr2[i])
}

export default movements;

import movement from './movement'

export default function(board) {
  function eql(arr1, arr2) {
    return arr2.every((_, i) => arr1[i] === arr2[i])
  }
  const results = {
    up: movement.up(board).array,
    down: movement.down(board).array,
    left: movement.left(board).array,
    right: movement.right(board).array
  }
  const arr = []

  for (const direction in results) {
    arr.push(eql(board.array, results[direction]))
  }

  return arr.every(bool => !bool)
}

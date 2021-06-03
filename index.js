const sum = arr=>arr.reduce((a,b)=>a+b,0)

function Arrayplus(arr1,arr2){
  return sum(arr1) + sum(arr2)
}

console.log(Arrayplus([1, 2, 3], [4, 5, 6]))

const arrPlus =(arr1,arr2) =>[...arr1, ...arr2].reduce((a,b)=>a+b,0)

console.log(arrPlus([1, 2, 3], [4, 5, 6]))
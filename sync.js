const fs = require('fs')
const puppeteer = require('puppeteer')

let newArray = []
const array = ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "a10"]
const array2 = ["b1", "b2", "b3", "b4", "b5"]
newArray = [...array, ...array2]

const reducing  = (datas) =>{
  console.warn('datas-->', datas)
    const newArray2 = newArray.reduce((acc, item) =>{
          if(datas.findIndex(e => e == item) == -1){
              acc.push(item)
          }
          return acc
     },[])
     newArray = [...newArray2]
     console.warn('reducing result--->', newArray2)
}

reducing(newArray.slice(-4))
console.warn('array globl-->', newArray)

console.warn('aca-->', newArray.slice(-4))

let txt = "this is 'playwright' classe's!@#$!@#$!@#$!@#$!#@$"
console.log(txt)
console.log(txt.length)


let txt2 = 'this is \\ "playwright" classe\\\'s!@#$!@#$!@#$!@#$!#@$'
console.log(txt2)
console.log(txt2.length)

let txt3 = '    playwrightplay     '

console.log(txt3.charAt(5).includes('right'))
console.log(txt3.includes('right'))
// console.log(txt3.match('play'))
console.log(txt3.slice(5, 10))
console.log(txt3.repeat(2))
let txt4 = 'playw_right'
let first = txt4.split('_')[0];
let second = txt4.split('_')[1];



console.log(first)
console.log(second)

console.log(txt3 +'\n' + txt3.repeat(2))

// String toUpperCase()
// String toLowerCase()
// String concat()
// String trim()
// String trimStart()
// String trimEnd()
// String repeat(2)
// String replace('right', 'rgt')
// String replaceAll()
// String split()
const a = 12;
const b = 23;
const c = a + b;
// document.write("<h3>" + c + "</h3>")
document.write(`
                <h3> ${a} + ${b} = ${c} </h3>
            `)
// document.write('<ul>')

const house = {
  sqft: 1678,
  rooms: 4,
  baths: 3
}

const sqft = document.getElementById('sqft')
const rooms = document.getElementById('rooms')
const baths = document.getElementById('baths')

sqft.innerText = house.sqft
rooms.innerText = house.rooms
baths.innerText = house.baths

const students = [
  {
    name: 'Alice',
    grades: [90, 89, 87, 98 , 100]
  },
  {
    name: 'Bob',
    grades: [87, 76, 56, 67 , 78]
  },
  {
    name: 'Charlie',
    grades: [87, 76, 56, 67 , 78]
  }
]

const jlist = $("#jlist")
const sname = $("#sname")
for (let j=0; j<students.length; j++) {
  const jli = $(`<li>${students[j].name}</li>`)
  jlist.append(jli)
}

function addStudentFn() {
  jlist.append(`<li>${sname.val()}</li>`)
}

const addStudentBtn = $("#addStudent")
addStudentBtn.click(addStudentFn)


// jlist.append("<li>Bob</li>")
// jlist.append("<li>Charlie</li>")

const list = document.getElementById('list')
let listItems = ''
// for (let i = 0; i < students.length; i++) {
//   // document.write(`<li> Item ${i}</li>`)
//   listItems += `
//     <li>
//         ${students[i].name}
//         ${students[i].grades}
//     </li>
//     `
// }

listItems = students.map(item =>`<li>${item.name}${item.grades}</li>`).join('')

list.innerHTML = listItems
// document.write('</ul>')

const hello123 = document.getElementById("hello")
hello123.style.color = "red"

// console.log(jQuery)
const hello234 = jQuery("#calc")
hello234.css({
  color : 'green',
  backgroundColor: 'yellow',
})

hello123.innerHTML = "Life's Good <button>Yay</button>"

function handleAddBtn() {
  // alert('handleAddBtn')
  const aInputFld = document.getElementById('a');
  const bInputFld = document.getElementById('b');
  const cInputFld = document.getElementById('c');
  const aValue = parseInt(aInputFld.value)
  const bValue = parseInt(bInputFld.value)
  const cValue = add(aValue, bValue)
  cInputFld.value = cValue
  console.log(aValue, bValue, cValue)
}

function add(a, b) {
  return a + b
}

function multiply(c, d) {
  return c * d
}

function divide(n, d) {
  return n / d
}

function totalArray(array) {
  let total = 0
  for(let i=0; i<array.length; i++) {
    total = add(total, array[i])
  }
  return total
}

const aliceTotalGrades = totalArray(students[0].grades)
console.log(aliceTotalGrades)
const aliceAverage = divide(aliceTotalGrades, students[0].grades.length)
console.log(aliceAverage)
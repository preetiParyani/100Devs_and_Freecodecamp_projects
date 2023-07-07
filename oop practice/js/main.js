// let user = {
//     name: 'preeti'
// }

// user.age = prompt(`${user.name} please enter your age`)

// console.log (user.name)
// console.log(user.age)

// executes the body for each key among object properties    
// 

let user = {}
user.name = 'john'
user.surname = 'smith'
user.name = 'pete'
// console.log(user.name)
delete user.name
// console.log(user)

let obj ={}
function isEmpty(obj){
    for(let key in obj){
        alert (false);
    }
    alert (true);
}
isEmpty(obj)

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
let sum = 0
for(let key in salaries){
    sum += salaries[key]
}

alert(sum)

// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

function multiplyNumeric(obj){
    for(let prop in obj){
        if(typeof obj[prop] == 'number'){
            obj[prop] *= 2
        }
    }
}
multiplyNumeric(menu)
console.log(menu)

let array = [1,2,3,4,5]

array.forEach(val => {
    console.log(val + 'Rao')
});

let new_array = array.map( val => {
    return val**2
})
console.log(new_array)

let array1 = new_array.filter(val => {
    if(val > 4) { return true} 
    else { return false}
})

console.log(array1)

let arry2 = array.find(val => {
    if(val === 5) { return true}
})
console.log(arry2)

async  function random() {
    let data = await fetch('https://randomuser.me/api/')
    let show = await data.json()

    console.log(show.results)
}

random()
// Inputs
var totalArr = []

document.addEventListener('input', (e) =>{
    e.preventDefault()
    var billInput = document.getElementById('bill').value
    var numPeople = document.getElementById('number-of-people').value
    if(numPeople = 0){
        numPeople = 1
    }
    var total = document.getElementById('total')
    var totalAmount = numPeople * billInput
    total.innerHTML = `$${totalAmount}`
    totalArr.push(totalAmount)
    
    console.log(totalArr)
})
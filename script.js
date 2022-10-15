// Global access to all important stuff
const BillInput = document.getElementById('Bill-input')
const TipInput = document.getElementById('tip-input')
const NumberOfPeopleDiv = document.getElementById('Number-of-People')
const PerPersonTotalDiv = document.getElementById('Total-Per-Person')
// ======

let NumberOfPeople = Number(NumberOfPeopleDiv.innerText)

const CalculateBill = () => {
    const Bill = Number(BillInput.value)
    const Tip = Number(TipInput.value)

    const tipPercentage = Tip / 100
    const TipAmount = Bill * tipPercentage
    const TotalBill = Bill + TipAmount
    const PerPersonTotal = TotalBill / NumberOfPeople
    console.log({PerPersonTotal})
    
    PerPersonTotalDiv.innerText = `$${PerPersonTotal.toFixed(2).toLocaleString('en-US')}`
}
const increasePeople = () => {
    NumberOfPeople += 1
    NumberOfPeopleDiv.innerText = NumberOfPeople

    CalculateBill()
}
const DecreasePeople = () => {
    if(NumberOfPeople <= 1) {
        alert('Hey, You cant have less than 1 Person!')
        return
    }
    else {
        NumberOfPeople -= 1
        NumberOfPeopleDiv.innerText = NumberOfPeople

        CalculateBill()
    }
}
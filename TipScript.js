const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')

//Get number of people from number of people div
let numberOfPeople = Number(numberOfPeopleDiv.innerText)

//Calculate total bill per person
const calculateBill = () => {
    //get bill from user input & convert it into a number
    const bill = Number(billInput.value)
    // get the tip from user and convert it into percentage
    const tippercentage = Number(tipInput.value)/100

    // get the total tip amount
    const tipAmount = bill* tippercentage
    
    //calculate the total 
    const total = tipAmount+bill

    //calculate the per person total 
    const perPersonTotal = total/numberOfPeople

    //update the perPersonTotal on DOM & show it to user
    perPersonTotalDiv.innerText = '$' + perPersonTotal.toFixed(2)
}

const increasePeople = () => {
numberOfPeople += 1

numberOfPeopleDiv.innerText = numberOfPeople

//calculate the bill based on new number of people
calculateBill()
}

const decreasePeople = () => {
    if(numberOfPeople <=1){
        return 
    }
    numberOfPeople -= 1
    
    numberOfPeopleDiv.innerText = numberOfPeople
    
    //calculate the bill based on new number of people
    calculateBill()
    }


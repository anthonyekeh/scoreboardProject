let addOneToHomeBtn = document.getElementById("add-one-to-home-btn")
let addTwoToHomeBtn = document.getElementById("add-two-to-home-btn")
let addThreeToHomeBtn = document.getElementById("add-three-to-home-btn")
let addOneToGuestBtn = document.getElementById("add-one-to-guest-btn")
let addTwoToGuestBtn = document.getElementById("add-two-to-guest-btn")
let addThreeToGuestBtn = document.getElementById("add-three-to-guest-btn")
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let homeCount = 0
let guestCount = 0


function addOneToHome() {
    homeCount += 1
    homeScore.textContent = homeCount
} 

function addTwoToHome() {
    homeCount += 2
    homeScore.textContent = homeCount
}

function addThreeToHome() {
    homeCount += 3
    homeScore.textContent = homeCount
}

function addOneToGuest() {
    guestCount += 1
    guestScore.textContent = guestCount
}

function addTwoToGuest() {
    guestCount += 2
    guestScore.textContent = guestCount
}

function addThreeToGuest() {
    guestCount += 3
    guestScore.textContent = guestCount
}
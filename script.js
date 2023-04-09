const userChoiceDisplay=document.createElement('h1')
const computerChoiceDisplay=document.createElement('h1')
const resultDisplay=document.createElement('h1')
const gameGrid=document.getElementById('game')
gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay)
const choices=['rock', 'paper', 'scissors']
let userChoice
let computerChoice
const handleClick=(e) =>{
  userChoice=e.target.id
  userChoiceDisplay.innerHTML='User choice: ' + userChoice
  generateComputerChoice()
  getResult()
  }
for(let i=0;i<choices.length;i++){
  const button=document.createElement('button')
  button.id=choices[i]
  button.innerHTML=choices[i]
  button.addEventListener('click', handleClick)
  gameGrid.appendChild(button)
}
    const generateComputerChoice=() => {
    const randomChoice =choices[Math.floor(Math.random() * choices.length)] 
    computerChoice=randomChoice
    computerChoiceDisplay.innerHTML='Computer choice: ' + computerChoice
  }
  const getResult=() => {
  switch (userChoice + computerChoice) {
    case 'rockscissors':
    case 'paperrock':
    case 'scissorspaper':
    resultDisplay.innerHTML="You win!" 
      break
    case 'rockpaper':
    case 'paperscissors':
    case 'scissorsrock':
    resultDisplay.innerHTML="You lost!"
      break
    case 'rockrock':
    case 'paperpaper':
    case 'scissorsscissors':
    resultDisplay.innerHTML="It's a tie!"
      break

  }
  }
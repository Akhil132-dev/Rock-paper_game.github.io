let userscore = 0;
let computerscroe = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBored_div = document.querySelector('.score-borde');
const result_div = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const s_div = document.getElementById('s');
function getcomputerchoic() {
    const choices = ['r', 'p', 's'];
    const random_number = Math.floor(Math.random() * 3);
    return choices[random_number];
}
function convertToword(letter) {
    if (letter === 'r') return "Rock";
    if (letter == 'p') return 'Paper'
    return 'Scissors'
}
function wins(userchoice, computerchoice) {
    userscore += 1;
    userScore_span.innerHTML = userscore
    const smalluserword = "user".fontsize(3).sup();
    const smallcompuword = "comp".fontsize(3).sup();

    result_div.innerHTML = `${convertToword(userchoice)}${smalluserword}  Beats   ${convertToword(computerchoice)}${smallcompuword} .You Win!`
    document.getElementById(userchoice).classList.add("greenglow")
    setTimeout(() => document.getElementById(userchoice).classList.remove("greenglow"), 300)
}
function lose(userchoice, computerchoice) {
    computerscroe += 1;
    computerScore_span.innerHTML = computerscroe
    const smalluserword = "user".fontsize(3).sup();
    const smallcompuword = "comp".fontsize(3).sup();
    result_div.innerHTML = `${convertToword(userchoice)}${smalluserword}  Loses to ${convertToword(computerchoice)}${smallcompuword} .You Lost!`
    document.getElementById(userchoice).classList.add("Redglow")
    setTimeout(() => document.getElementById(userchoice).classList.remove("Redglow"), 300)
}
function draw(userchoice, computerchoice) {
    const smalluserword = "user".fontsize(3).sub();
    const smallcompuword = "comp".fontsize(3).sub();
    result_div.innerHTML = `${convertToword(userchoice)}${smalluserword}  Equals ${convertToword(computerchoice)}${smallcompuword} .It's a Draw!`
    document.getElementById(userchoice).classList.add("Grayglow ")
    setTimeout(() => document.getElementById(userchoice).classList.remove("Grayglow"), 300)
}
function Gamepad(userChoice) {
    const computer_choice = getcomputerchoic();
    switch (userChoice + computer_choice) {
        case 'rs':
        case 'pr':
        case 'sp':

            wins(userChoice, computer_choice);
            console.log('USER WIN!'); break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, computer_choice);
            console.log('computer WIN!'); break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, computer_choice);
            console.log('Its a Draw!'); break;
    }
}


function main() {
    rock_div.addEventListener('click', () => Gamepad("r")
    )
    paper_div.addEventListener('click', () => Gamepad("p")
    )
    s_div.addEventListener('click', () => Gamepad("s")
    )
}
main();











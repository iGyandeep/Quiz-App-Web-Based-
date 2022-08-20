const questions = [
    {
        'que': 'Which of the following is markup language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'PHP',
        'correct': 'a' 
    },
    {
        'que': 'What year was JavaScript launched?',
        'a': '1996',
        'b': '1995',
        'c': '1994',
        'd': 'None of these',
        'correct': 'b'
    },
    {
        'que': 'What does CSS stand for?',
        'a': 'Hype Text Markup Language',
        'b': 'Cascading Style Sheet',
        'c': 'Jason Object Notation',
        'd': 'None',
        'correct': 'b'
    },
    {
        'que': 'Who was the developer of C programming language?',
        'a': 'Brendan Eich',
        'b': 'Guido van Rossum',
        'c': 'Bjarne Stroustrup',
        'd': 'Dennis Ritchie',
        'correct': 'd'
    },
    {
        'que': 'Which of the following is not a web browser?',
        'a': 'Edge',
        'b': 'Chrome',
        'c': 'Youtube',
        'd': 'FireFox',
        'correct': 'c'
    },
    {
        'que': 'In computer world, Trojan refer to:',
        'a': 'Virus',
        'b': 'Malware',
        'c': 'Worm',
        'd': 'Spyware',
        'correct': 'b'
    },
    {
        'que': 'Who was the developer of C++ programming language?',
        'a': 'Brendan Eich',
        'b': 'Guido van Rossum',
        'c': 'Bjarne Stroustrup',
        'd': 'Dennis Ritchie',
        'correct': 'c'
    },
    {
        'que': 'Which protocol is used to recevied e-mail?',
        'a': 'POP3',
        'b': 'SMTP',
        'c': 'HTTP',
        'd': 'FTP',
        'correct': 'a'
    },
    {
        'que': 'In which year "@" sign was first chosen for its use in e-mail address?',
        'a': '1976',
        'b': '1980',
        'c': '1977',
        'd': '1972',
        'correct': 'd'
    },
    {
        'que': 'Which of the following statement about functions of false?',
        'a': 'A function can call itself.',
        'b': 'A function can call another function.',
        'c': 'Constants can appear in the formal argument list.',
        'd': 'Constants can appear in the formal argument list.',
        'correct': 'c'
    }
]

let index = 0;
let total = questions.length;
let right = 0, wrong = 0;
const quesBox = document.getElementById("quesBox")
const optionInput = document.querySelectorAll('.options')
const loadQuestion = () => {

    if (index == total) {
        return endQuiz();
    }
    else {
        reset();
    }
    const data = questions[index]
    // console.log(data)
    quesBox.innerText = data.que;
    optionInput[0].nextElementSibling.innerText = data.a;
    optionInput[1].nextElementSibling.innerText = data.b;
    optionInput[2].nextElementSibling.innerText = data.c;
    optionInput[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer()
    console.log(ans, data.correct)
    if (ans === data.correct) {
        right++;
    }
    else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    optionInput.forEach(
        (input) => {
            if(input.checked) {
                answer = input.value;
            }
        }
    )
    return answer;
}

const reset = () => {
    optionInput.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style="text-align:center">
        <h3> Thank you for playing the quiz.</h3>
        <h2> ${right} / ${total} are correct.</h2>
    </div>
    `
}

const finalSubmit = () => {
    endQuiz();
}

loadQuestion();
const inquirer = require('inquirer')
const fs = require('fs')

const questions = [
    {
        question: 'What is the name of your project?',
        answer: ''
    },
    {
        question: 'Breif description of the project',
        answer: ''
    },
    {
        question: 'How do you install this project?',
        answer: ''
    },
    {
        question: 'How do you use this project?',
        answer: ''
    },
    {
        question: 'Who contributed to this project?',
        answer: ''
    },
    {
        question: 'Enter your Github username',
        answer: ''
    },
    {
        question: 'Enter your email',
        answer: ''
    },
    {
        question: 'What licenses do you have?',
        answer: ''
    },
];

inquirer
    .prompt([
        {
            type: 'input',
            message: `${questions[0].question}`,
            name: 'question[0]',
        },
        {
            type: 'input',
            message: `${questions[1].question}`,
            name: 'question[1]',
        },
        {
            type: 'input',
            message: `${questions[2].question}`,
            name: 'question[2]',
        },
        {
            type: 'input',
            message: `${questions[3].question}`,
            name: 'question[3]',
        },
        {
            type: 'input',
            message: `${questions[4].question}`,
            name: 'question[4]',
        },
        {
            type: 'input',
            message: `${questions[5].question}`,
            name: 'question[5]',
        },
        {
            type: 'input',
            message: `${questions[6].question}`,
            name: 'question[6]',
        },
        {
            type: 'list',
            choices: ['Apache 2.0', 'MIT', 'Github', 'GPLv2', 'Modzilla'],
            message: `${questions[7].question}`,
            name: 'question[7]',
        },
    ])
    .then((response) =>
        writeAnswers(response)
    )

function writeFile(badge) {
    fs.writeFile('./WrittenREADME.md',
        `# ${questions[0].answer}\n${questions[7].answer}![image](${badge})<br>\n${questions[1].answer}\n## Instalation\n${questions[2].answer}\n## Usage\n${questions[3].answer}\n## Contributions\n${questions[4].answer}\n## Questions\n${questions[5].answer}<br>${questions[6].answer}`,
        err => {
            if (err) {
                console.error(err);
            }
        })
}

function writeAnswers(data) {
    for (i = 0; i < 7; i++) {
        questions[i].answer = data.question[i]
    }
    console.log(questions[7].answer)
    let badge = null
    if (data.question[7] === 'Apache 2.0') {
        badge = ('https://img.shields.io/badge/license-Apache2.0-blue%27')
    } else if (data.question[7] === 'MIT') {
        badge = ('https://img.shields.io/badge/license-MIT-blueviolet%27')
    } else if (data.question[7] === 'Github') {
        badge = ('https://img.shields.io/badge/license-github-success%27')
    } else if (data.question[7] === 'GPLv2') {
        badge = ('https://img.shields.io/badge/license-GPLv2-yellowgreen%27')
    } else if (data.question[7] === 'Modzilla') {
        badge = ('https://img.shields.io/badge/license-Modzilla-orange%27')
    }
    writeFile(badge)
}
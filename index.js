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
        //TODO: add list of options
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
        //NOT YET COMPLETE
        {
            type: 'list',
            choices: ['test1', 'test2'],
            message: `${questions[7].question}`,
            name: 'question[7]',
        },
    ])
    .then((response) =>
        writeAnswers(response)
    )

function writeFile() {
    fs.writeFile('./README.md',
        `# ${questions[0].answer}\n\n${questions[1].answer}\n# Instalation\n${questions[2].answer}\n# Usage\n${questions[3].answer}\n# Contributions\n${questions[4].answer}\n# Questions\n${questions[5].answer}<br>${questions[6].answer}`,
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
    writeFile()
}
// declearing variables 

let btn = document.querySelector('#new-qoute');
let qoute = document.querySelector('.qoute');
let person =document.querySelector('.person');

//creating an aray for the argument
 const qoutes = 
 [{
    qoute: '"The moment you remove your limits, you are free to live as you wish"',
    person: 'Kyle Garret'
 }, {
    qoute: '"A loving heart is a kind heart. Love is kind."',
    person: 'Albert J. Shamon'
 }, {
    qoute: '"Confidence is the defining difference between the common and the uncommon person."',
    person: 'Keith Johnson'
 },{
    qoute: '"All it takes to be different and feel differently is to think and act differently. Make happiness and living a happy life a goal."',
    person: 'Michele Moore'
 },{
    qoute: '"Clarity is the one right path that stands out to get you where you want to go."',
    person: 'Wynn Davis'
 },{
    qoute: '"Every day you make memories. Funnel todays experiences into tomorrows happy reflections."',
    person: 'Jeane Eddy Westin'
 },{
    qoute: '"An artist has more than two eyes."',
    person: 'Haliburton'
 },{
    qoute: '"The learned understand the reason of the art, the unlearned feel the pleasure."',
    person: 'Marcus Fabius Quintilianus'
 },{
    qoute: '"The artist belongs to his work, not the work to the artist."',
    person: 'Novalis'
 },{
    qoute: '"With each place I will go I will treasure memories like gold."',
    person: 'Sharon J. Hall'
 }, ];

 btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * qoutes.length);

    qoute.innerText = qoutes[random].qoute;
    person.innerText = qoutes[random].person;
 })
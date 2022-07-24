// DOM manipulation: using even listener to call the li to perform some basic functions 

//document.querySelector('#football').addEventListener
// ('click', function(e){
//     console.log('football is clicked');

//     const target = e.target;

//     if(target.matches('li')) {
//         target.style.backgroundColor = 'lightgrey'
//     }
// })

//for event delagation
document.querySelector('#sports').addEventListener
('click', function(e){
    
    console.log(e.target.getAttribute('id') + 'is clicked');

    const target = e.target;

    if(target.matches('li')) {
         target.style.backgroundColor = 'lightgrey'
     }
});

//to add new list to the current list

const sports = document.querySelector('#sports'); //this is to call the main elemet which is the ul with an # of sport
const newSport = document.createElement('li'); // this is to tell the computer where to apend the new element about to be created 

newSport.innerText = 'Ruby';
newSport.setAttribute('id', 'ruby');

sports.appendChild(newSport);



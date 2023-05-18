//require = require("esm")(module);

import express from 'express';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import morgan from 'morgan';

const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cors());
// app.use(morgan('dev'));

const hello = function sayHello(){
for (let i =0;i< 5; i++){
  console.log("LET = " + i)
}
//  var is accessible inside the function outside the for loop  ==> scoped to function
//  let is not accessibke outside the for loop ==> scoped to the block
//  const ===> scoped to block , const is read-only it can't be re-assigned
}





const person = 
{

"name": "sunny",
jaddu(){

  console.log('JADDU IS BEST ALL-ROUNDER')
},
"loves": function(res){
  const feel = "'Mahi maar raha hai!!!!!!!'"
  console.log('Mahi maar raha hai!!!!!!!')
  res.send(feel);
  
}

}

app.get('/hello', (req, res) => {

  //res.send('Hello, World!');
  hello()
  //console.log(person)
  //res.send(person.loves());
  person.jaddu();
  person.fan = "csk";
  console.log(person);
  person.loves(res);

});


const first = [1,2,3];
const second = [4,5,6];


app.get('/new', (req, res) => {

  res.send('Hello, World!');
  const combined = first.concat(second);

  const combined2 = [...first,'a',...second];
  console.log(combined2);


  const first1 = {'name':'Sunny'};
  const second1 = {'Job':'Coding'};
  const final = {...first1,...second1, 'location':'Ulhas'}
  console.log(final)



});



const person1 = {
name: "Mosh",
walk(){
  console.log("walk");
}
};

const person2 = {
name: "Mosh",

};


class SinglePerson {
  constructor(name){
    this.name = name
  }

  walk(){
    console.log('walk');
  } 

}


class Teacher extends SinglePerson{
constructor(name, degress){
super(name);
this.degree = 'Enginerr';

}

teach(){
console.log('teaches');
}
}


const personObj = new SinglePerson('SUnny')
const teacherObj = new Teacher('Mosh','MS')


app.get('/classes', (req, res) => {

  res.send('Hello, World!');
  console.log(personObj);
  teacherObj.walk();
  console.log(teacherObj);

});



const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

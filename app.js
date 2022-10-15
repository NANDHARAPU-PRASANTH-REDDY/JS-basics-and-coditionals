// now we are going to write the program for luckky draw winners
let user = [
    {name:'prsanth',email:'prasanth@gmail.com'},
    {name:'rohith',email:'rohith@gmail.com'},
    {name:'karthik',email:'karthik@gmail.com'},
    {name:'tharun',email:'tharun@gmail.com'},
    {name:'chandu',email:'chandu@gmail.com'},
    {name:'jenni',email:'jenni@gmail.com'},
    {name:'somu',email:'somu@gmail.com'},
    {name:'tinkul',email:'tinkul@gmail.com'},
    {name:'mama',email:'mama@gmail.com'},
    {name:'metro',email:'metro@gmail.com'}


]
let winner = Math.random()*user.length
let perfect = Math.floor(winner)
let luckky_winner_name = user[perfect].name
let luckky_winner_email = user[perfect].email
console.log(luckky_winner_name)
console.log(luckky_winner_email)
// now we are going to discuss about the conditional statements in the java script
let age = 19
if (age>18){
    console.log('user is eligible for voting')
}
else{
    console.log('user is not eligible for voting')
}
let wether = 'rainy'
if(wether=='sunny'){
   console.log('wear cooling glases')
}
else if(wether=="rainy"){
    console.log('buy an umbrella')
}
else if(wether=="cool"){
    console.log('wear sweter')
}
// special of triple eqaal to symbol
let ager=18
let my_age ="18"
if(ager==my_age){
    console.log('yes')
}
else{
    console.log('no')
}
// now we are going to discuss about the ternary operator
// syntax:condition? (true):(false)
// let food = 'chicken'
// let food1='chicken'
// let juice='orange'
// let result=(food==food1)?(juice=='pulpi')?'good combo':'bad combo':'not matched';
// console.log(result)






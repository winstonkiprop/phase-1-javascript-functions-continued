// code your solution here

 function saturdayFun(activity ='roller-skate' ){
     return `This Saturday, I want to ${activity}!`
 }
  function  mondayWork(name ='go to the office') {
      return`This Monday, I will ${name}.`
  }
  function wrapAdjective(style) {
    let result =(function(activity) {
        return "You are " +style+ activity+
        style + "!"
    })
    let emphatic = result;
    return emphatic;   
} 
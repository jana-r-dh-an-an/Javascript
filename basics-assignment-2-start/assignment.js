const task3Element = document.getElementById('task-3');

function one1(){
  
    alert("jana");
}
one1();

function two2(name){
    alert(name)
}
two2("janardhanan");
task3Element.addEventListener('click',one1)

function threePara(one,two,three){
   const result=`${one} ${two} ${three}`;
    return result;
}
const final=threePara("this is ","janardhanan ","Learning Js")
alert(final);
 

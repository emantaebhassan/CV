let turn='x';
let title=document.querySelector('.title');
let squares=[];
function win(num1,num2,num3){
   // title.innerHTML='${squares[num1]} winner';
document.getElementById('item'+num1).style.background='black';
document.getElementById('item'+num2).style.background='black';
document.getElementById('item'+num3).style.background='black';
setInterval(function(){title.innerHTML+='.'},1000)
setTimeout(function(){location.reload()},4000)
}
function winner(){
for(let i=1;i<=9;i++){
 squares[i]=document.getElementById('item'+i).innerHTML;
}
if(squares[1]==squares[2]&&squares[2]==squares[3]&&squares[2]!=''){
   if(squares[1]=='x')
   {
    title.innerHTML='x winner' ;
   }
   else if(squares[1]=='o')
   {
    title.innerHTML='o winner';
   }
    win(1,2,3)
}
else if(squares[4]==squares[5]&&squares[4]==squares[6]&&squares[4]!=''){
    if(squares[4]=='x')
    {
     title.innerHTML='x winner' ;
    }
    else if(squares[4]=='o')
    {
     title.innerHTML='o winner';
    }
    win(4,5,6)
}
else if(squares[7]==squares[8]&&squares[8]==squares[9]&&squares[9]!=''){
    if(squares[7]=='x')
    {
     title.innerHTML='x winner' ;
    }
    else if(squares[7]=='o')
    {
     title.innerHTML='o winner';
    }
    win(7,8,9)
}
else if(squares[1]==squares[4]&&squares[4]==squares[7]&&squares[4]!=''){
    if(squares[1]=='x')
    {
     title.innerHTML='x winner' ;
    }
    else if(squares[1]=='o')
    {
     title.innerHTML='o winner';
    }
    win(1,4,7)
}
else if(squares[2]==squares[5]&&squares[5]==squares[8]&&squares[5]!=''){
    if(squares[2]=='x')
    {
     title.innerHTML='x winner' ;
    }
    else if(squares[2]=='o')
    {
     title.innerHTML='o winner';
    }
    win(2,5,8)
}
else if(squares[3]==squares[6]&&squares[6]==squares[9]&&squares[6]!=''){
    if(squares[3]=='x')
    {
     title.innerHTML='x winner' ;
    }
    else if(squares[3]=='o')
    {
     title.innerHTML='o winner';
    }
    win(3,6,9)
}
else if(squares[1]==squares[5]&&squares[5]==squares[9]&&squares[5]!=''){
   
    if(squares[1]=='x')
    {
     title.innerHTML='x winner' ;
    }
    else if(squares[1]=='o')
    {
     title.innerHTML='o winner';
    }
     win(1,5,9)
}
else if(squares[3]==squares[5]&&squares[5]==squares[7]&&squares[5]!=''){
    if(squares[3]=='x')
    {
     title.innerHTML='x winner' ;
    }
    else if(squares[3]=='o')
    {
     title.innerHTML='o winner';
    }
    win(3,5,7)
}
}
function game(id){
    let element=document.getElementById(id);
if(turn=='x'&&element.innerHTML=='')
{
    element.innerHTML='x';
    turn='o';
    title.innerHTML='o';
}
else if(turn=='o'&&element.innerHTML=='')
{
    element.innerHTML='o';
    turn='x';
    title.innerHTML='x';
}
winner();
}
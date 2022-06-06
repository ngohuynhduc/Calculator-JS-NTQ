const numbers=document.getElementsByClassName('button-group__btn__text');
const result= document.getElementById('result')

for (let number of numbers) {
    number.addEventListener('click',function() {
        // if(result.innerHTML=="0")
        // {
        //     result.innerHTML='';
        // }
        result.innerHTML += this.value
        result.innerHTML.toLocaleString("en");
    });
}
const equal=()=>{
    let res=result.innerHTML;
    let output=eval(res);
    result.innerHTML = output;
}
const undo=()=>{
    console.log("abc");
    let res=result.innerHTML
    result.innerHTML =res.substring(0,res.length-1);
}
const clean=()=> {
    result.innerHTML ="";
}
const reverseNumber=()=>{
    let conv=parseFloat(result.innerHTML);
    let reverse=-conv;
    result.innerHTML=reverse;
}
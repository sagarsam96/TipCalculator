//nodes from document
const money = document.getElementById("money");
const message= document.getElementById("message");
const submit= document.getElementById("submit");
const display= document.getElementById("display");
const total = document.getElementById("total");

//functions

const node = (elem)=> {return (document.createElement(elem));}
const appendNode = (parent, child)=>{ return parent.appendChild(child)}
const doSomething =(x)=>{ return x.money}


// print(id, paisa, peghaam, res);
const print=(id, paisa, peghaam, res)=> {
    let zero = node("li"), 
    one= node("span"),
    two= node("span"),
    three= node("span");

    three.title= peghaam;
    peghaam= peghaam.length>9? peghaam.slice(0, 9)+"...": peghaam;

    one.innerHTML=`Id: ${id}`;
    two.innerHTML=`Money: ₹${paisa}`;
    three.innerHTML=`Message: ${peghaam}`;
    
    appendNode(display, zero);
    appendNode(zero, one);
    appendNode(one, two);
    appendNode(two, three);
}

//class
const tip = [
    {
         "id": 0000,
        "money":0,
        "message":"no message"

    }
]

//variable
let count =0;

//eventhandlers
submit.addEventListener("click", ()=>{
    
    if(money.value && message.value){
    
    const paisa= money.value;
    const peghaam = message.value;
    let id=count++;
    const object = { id:id, money:paisa, message:peghaam}
    tip.push(object);
    const moneyArray = tip.map(doSomething)
    const res = moneyArray.reduce( (acc, curr)=>{ acc= acc+(+(curr)); return acc})
    print(id, paisa, peghaam, res);
    total.style.display="block";
    total.innerText=`₹${res}`;
    money.value="";
    message.value="";
     }
 })
 
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
    let one= node("li"),
    two= node("span"),
    three= node("span");
    

    one.innerText=id;
    two.innerText=paisa;
    three.innerText=peghaam;
    
    appendNode(display, one);
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

let count =0;

//eventhandlers
submit.addEventListener("click", ()=>{
    
    if(money.value && message.value){
    
    const paisa= money.value;
    const peghaam = message.value;
    let id=count++;

    console.log(`id: ${id}, Money: ${paisa}, Message: ${peghaam}`);

    const object = { id:id, money:paisa, message:peghaam}
    tip.push(object);
    console.log(tip);
    
    const moneyArray = tip.map(doSomething)
    const res = moneyArray.reduce( (acc, curr)=>{ acc= acc+(+(curr)); return acc})
    console.log(res);

    print(id, paisa, peghaam, res);
    total.style.display="block";
    total.innerText=res;
    money.value="";
    message.value=""}
 })
 
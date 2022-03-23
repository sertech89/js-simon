
   
let cont=document.getElementById("cont")
let cont2=document.getElementById("cont2")
let btn=document.getElementById("btn")
let btn2=document.getElementById("btn2")


btn.addEventListener("click", function(){
    let array=[]
    let array2=[]
    let array3=[]

    for( i=0; i<5; i++){
        array.push(Math.floor(Math.random() * 100) +1)   
    }
    console.log(array)
    cont.innerHTML=`Prova a ricordare questi numeri ? <br> ${array}`
    
    let timer=setTimeout(() => {
        cont.classList.add("none")
    }, 5000);
    
    let timer2=setTimeout(() => {
        cont.classList.add("none")
        for(i=0;i<5;i++){
            let num=parseInt(prompt("Quali numeri sono usciti ?"))
            array2.push(num)      
        }
        
        console.log(array2)
        for(y=0;y<5;y++){
            if(array.includes(array2[y])){
                array3.push(array2[y])
            }
        }
        console.log(array3)
        cont2.innerHTML+=`<p>i numeri erano: ${array}</p>`
        cont2.innerHTML+=`<p>i numeri che hai indovinato sono: ${array2}</p>`
        cont2.innerHTML+=`<p>i numeri corretti sono: ${array3}</p>`
        cont2.innerHTML+=`<p>il tuo punteggio è: ${array3.length}</p>`
    
    }, 5100);
})

btn2.addEventListener("click", function(){
    cont2.innerHTML=""
    cont.innerHTML=""
    cont.classList.remove("none")
})
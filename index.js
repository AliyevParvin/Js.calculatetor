let input1=document.getElementById("text");
let input2=document.getElementById("text1");
let btn=document.querySelector("#addBtn")
let btn1=document.querySelector("#subBtn")
let btn2=document.querySelector("#mulBtn")
let btn3=document.querySelector("#divBtn")
let list=document.getElementById("textlist")
btn.addEventListener("click" ,function(){
    
    
        let li=document.createElement("li");
        li.innerHTML=(parseInt(input1.value)+parseInt(input2.value));
        list.appendChild(li)
        li.addEventListener("click",function(){
         this.remove()

    }
    )
}



)
    btn1.addEventListener("click",function(){

    let li=document.createElement("li");
    li.innerHTML=(parseInt(input1.value)-parseInt(input2.value));
    list.appendChild(li)
    li.addEventListener("click",function(){
     this.remove()

}
)
}



)
btn2.addEventListener("click",function(){
    
        let li=document.createElement("li");
        li.innerHTML=(parseInt(input1.value)*parseInt(input2.value));
        list.appendChild(li)
        li.addEventListener("click",function(){
         this.remove()
    
    }
    )
    }
    

    )
    btn3.addEventListener("click",function(){
        
            let li=document.createElement("li");
            li.innerHTML=(parseInt(input1.value)/parseInt(input2.value));
            list.appendChild(li)
            li.addEventListener("click",function(){
             this.remove()
        
        }
        )
        }
    
        )
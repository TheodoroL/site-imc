const btn = document.querySelector("button"); 
const  peso =  document.querySelector(".peso"); 
const altura = document.querySelector(".altura"); 
const resposta = document.querySelector("#resposta"); 

function IMC(valor1, valor2){

    let valor_altura = parseFloat(valor1.replace(",", "."))

    let imc = (Math.floor(valor2)/(valor_altura*valor_altura)).toFixed(2)
    return imc 
    
}




btn.addEventListener("click", ()=>{

    if(altura.value !== "" && peso.value !==""){
        let valor = IMC(altura.value, peso.value)
        if(valor !=  "NaN"){
            resposta.value = valor
        }

    }
    else{
        alert("Porfavor, coloca todos os os dados que estão pedindo")
    }
})


let contador = 0

function selecionadorPrato(hm){
    const boxClicado = document.querySelector(".container1 .selecionador");  
    
    if (boxClicado !== null) {
        boxClicado.classList.remove("selecionador");
        contador-=1
    }
    hm.classList.add("selecionador");
    contador+=1;
    console.log(contador);
    confirmador();
}
function selecionadorBebida(hm){
    const boxClicado = document.querySelector(".container2 .selecionador");  
    if (boxClicado !== null) {
        boxClicado.classList.remove("selecionador");
        contador-=1
    }
    hm.classList.add("selecionador");
    contador+=1;
    
    confirmador();
}
function selecionadorSobremesa(hm){
    const boxClicado = document.querySelector(".container3 .selecionador");  
    if (boxClicado !== null) {
        boxClicado.classList.remove("selecionador");
        contador-=1
    }
    hm.classList.add("selecionador");
    contador+=1;
    
    confirmador();
}

function confirmador(){
    const botao = document.querySelector(".button")
    
    if (contador === 3){
        botao.classList.add("finalizador")
        botao.innerHTML = "Fechar pedido"
    }
}
function zap(){
    const prato = document.querySelector(".container1 .selecionador p").innerHTML;
    const bebida = document.querySelector(".container2 .selecionador p").innerHTML;
    const sobremesa = document.querySelector(".container3 .selecionador p").innerHTML;
    const precoP = Number(document.querySelector(".container1 .selecionador p:nth-child(4)").innerHTML);
    const precoB = Number(document.querySelector(".container2 .selecionador p:nth-child(4)").innerHTML);
    const precoS = Number(document.querySelector(".container3 .selecionador p:nth-child(4)").innerHTML);
    
    const soma = precoP+precoB+precoS
    console.log(soma);

    const mensagem = encodeURIComponent(`Olá, gostaria de fazer o pedido:\n- Prato: ${prato}\n- Bebida: ${bebida}\n- Sobremesa: ${sobremesa}\nTotal: R$ ${soma.toFixed(2).replace(".",",")}`)
    if (contador === 3){
        
        location.href = `https://wa.me/?text=${mensagem}`
    }
}


/*Olá, gostaria de fazer o pedido:
- Prato: Frango Yin Yang
- Bebida: Coquinha Gelada
- Sobremesa: Pudim
Total: R$ 27.70*/










let botao_enviar = document.getElementById("btn_enviar")
var cont = 0;

botao_enviar.addEventListener("click", ()=>{
    let mensagem = document.getElementById("textarea_mensagem");
    console.log(mensagem.value);
    let espaco_mensagem = document.querySelector(".campo_leitura");

    /***Criando a bloco corpo_mensagem*******/
    let div = document.createElement("div");
    div.classList.add("corpo_mensagem");

    let div_mensagem = document.createElement("div");
    div_mensagem.classList.add("mensagem");

    let p = document.createElement("p");

    p.innerHTML = mensagem.value;
    div_mensagem.append(p);
    div.append(div_mensagem);

    let div_mensagem_botao = document.createElement("div");
    div_mensagem_botao.classList.add("mensagem_botoes")

    cont++;
    let botao_excluir = document.createElement("button");
    botao_excluir.type = "button";
    botao_excluir.innerHTML = "Excluir";
    botao_excluir.classList.add("btn_excluir")

    let botao_editar = document.createElement("button");
    botao_editar.type = "button";
    botao_editar.innerHTML = "Editar";
    botao_editar.classList.add("btn_editar")

    
    div_mensagem_botao.append(botao_editar)
    div_mensagem_botao.append(botao_excluir)
    div.append(div_mensagem_botao);

    espaco_mensagem.append(div);

    div.scrollIntoView({ behavior: 'smooth', block: 'end' });

    botao_editar.addEventListener("click", ()=>{
        let teste = prompt("Insira sua mensagem editada: ");
        p.innerHTML = teste;
    })

    botao_excluir.addEventListener("click", ()=>{
        div.remove();
    })
})


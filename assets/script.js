
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
        p.classList.add("escondido");
        botao_editar.classList.add("escondido");
        let btn_aceitar = document.createElement("button");
        btn_aceitar.type = "button";
        btn_aceitar.innerHTML = "Aceitar";
        btn_aceitar.classList.add("btn_aceitar");
        div_mensagem_botao.append(btn_aceitar);
        div_mensagem_botao.classList.add("mensagem_botoes_invertido");

        let textarea = document.createElement("textarea");
        textarea.classList.add("textarea_mensagem_editado");
        textarea.innerHTML = p.innerHTML;
        div_mensagem.append(textarea);

        btn_aceitar.addEventListener("click", ()=>{
            p.innerHTML = textarea.value;
            textarea.remove();
            btn_aceitar.remove();
            p.classList.remove("escondido");
            botao_editar.classList.remove("escondido");
            div_mensagem_botao.classList.remove("mensagem_botoes_invertido");
        })
    })

    botao_excluir.addEventListener("click", ()=>{
        div.remove();
    })
})


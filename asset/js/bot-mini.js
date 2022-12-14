var num = 0
const send_message = ()=>{
    var getInput = document.getElementById("userInput").value 

    var filter = getInput.toLowerCase()
    get_conversation(filter)
    
    document.getElementById("userInput").value = ""
}
function demoAnswer(){
    var box = document.querySelector(".containt-message")
    var bot_div = document.createElement("div")
    bot_div.className = "bot_div"

    var custon_res = [
        "Olá seja muito ben-vindo! Gostaria de fazer-te algumas perguntas, podemos começar?"
    ]
    var box_div = document.createElement("div")
    box_div.className = "box_div"
    var logo = "<img src='./asset/img/log.png'  height='50px'>"
    
    
    box_div.innerHTML = logo + "<br>"+ "<div class = 'bot_div' >"+ custon_res +"</div>"
    box.append(box_div)
    btn_sender("sim podemos")
    btn_sender("não podemos")
}
const get_conversation = (user,bot)=>{
    
    var box = document.querySelector(".containt-message")
    var div = document.createElement("div")
    var bot_div = document.createElement("div")
    div.className = "boxSms"
    bot_div.className = "bot_div"

    var bot_response = conversation(user.toLowerCase())
    var box_div = document.createElement("div")
    box_div.className = "box_div"
    var logo = "<img src='./asset/img/log.png'  height='50px'>"
    var listen = [
        "",
        "Qual é o seu nome?",
        "És de que país?",
        "e qual é a tua cidade?",
        "bem "+localStorage.getItem("name")+", tens filhos?",
        "muito bem "+localStorage.getItem("name")+", Tu gostas de um animal doméstico?",
        "Qual é a tua situação actual?, trabalhas ou estudante!",  
        "Como é conseguir um emprego na cidade de "+localStorage.getItem("cidade")+"?",
        "Quais das áreas que mais emprega as pessoas na cidade de "+localStorage.getItem("cidade")+"?",      
        "Quais são os serviços de táxis há na cidade de "+localStorage.getItem("cidade")+" ?",
        "Gostas de séries? "+localStorage.getItem("name"),
        "incrível "+localStorage.getItem("name")+". Qual é a tua séries favorita? "+localStorage.getItem("name"),
        "Qual é o serviço TV que usas, NetFlix, Youtube? Canal+ ou outros? Escreve-as!",
        "Será que, tu frequentou um shoping este més? "+localStorage.getItem("name"),
        "Qual do shoping tu me encomendaria? "+localStorage.getItem("name"),
        "Porque, tu me encomendaria o shoping "+localStorage.getItem("shoping")+"? "+localStorage.getItem("name"),
        "Já usou um cartão crédito?",
        ""+localStorage.getItem("name")+" Neste més, comprou um ítens online?",
        "Quantos gastou este més fazendo compras?",
        "Quem faz as compras em sua casa? "+localStorage.getItem("name"),
        "Só falta mais um pouco, para terminamos. Está bem? "+localStorage.getItem("name"),
        
        "Qual é o serviço de táxi, que mais usas? "+localStorage.getItem("sTaxi"),
        "Quantos gastou este més usando o "+localStorage.getItem("sTaxi"),
        "Quais dos serviços de táxis que realizou uma publicidade este més?"+ localStorage.getItem("sTaxi")+" ?",

        "Se um amigo quer chegar na cidade de "+localStorage.getItem("cidade")+", em que hótel ficaria? de tua preferência?",

        "quantos gastas para pagamentos mensal da "+localStorage.getItem("sTV")+"?",
        "Quais dos canais mais adorada por ti na "+localStorage.getItem("sTV")+"?",
        "Qual das personagens que gostas na série de "+localStorage.getItem("serie")+"?",
        "E por que gostas do autor "+localStorage.getItem("seriw")+"?",
        "Já assistiu o NETFLIX?",     

        "gostaria muito saber mais sobre a "+localStorage.getItem("sTV")+" Mas, infelizmente a nossa pesquisa termina por aqui "+
        "agradeço pela tua paciência! "+localStorage.getItem("name")+
        " e para a tua segurança estas conversas não são guardadas, podes atualizar a página e tudo sumirá! obrigada..",
        "não há mais assunto no momento "+localStorage.getItem("name")
    ]
    
    box.append(div)
    if(user == ""){
        div.style.display = "none"
        emoji2() 
        box_div.innerHTML = logo + "<br>"+"<img src = './asset/img/emoji100(2).png' height='50px';>"
        box.append(box_div)
    }else{
            div.innerHTML = user
            
            if(bot_response == undefined){

                if(num < listen.length -1){
                    var ls = listen[num += 1]
                    box_div.innerHTML = logo + "<br>"+ "<div class = 'bot_div' >"+ls+ "</div>"
                    box.append(box_div)
                    console.log(ls)
                    bot_learning(ls, user)
                }else{
                    box_div.innerHTML = logo + "<br>"+ "<div class = 'bot_div' >não há mais assunto no momento "+
                    localStorage.getItem("name")+"</div>"
                    box.append(box_div)
                }
                
                
            }else{
                box_div.innerHTML = logo + "<br>"+ "<div class = 'bot_div' >"+ bot_response+ "</div>"
                box.append(div)
                box.append(box_div)                 
        }
    }
}
const btn_sender = (text)=>{
    var box = document.querySelector(".containt-message")
    var bot_div = document.createElement("div")
    var btn = document.createElement("label")
    
    bot_div.className = "bot_div"
    btn.className = "btn_sender"

    btn.append(text)

    btn.addEventListener("click",()=>{
        get_conversation(text)
    })

    box.append(btn)
}
function conversation (conversation){
    return conversation_demo(conversation)
}
// bot learning new response
const bot_learning = (quest, answer)=>{
    return bot_learning_response(quest, answer)
}

function emoji1(){
    var box = document.querySelector(".containt-message")
    var div = document.createElement("div")
    div.className = "boxSms"
    div.style.backgroundColor = "transparent"
    div.innerHTML = "<img src = './asset/img/emoji100(4).png' height='50px';>"
    box.append(div)
}
function emoji2(){
    var box = document.querySelector(".containt-message")
    var div = document.createElement("div")
    div.className = "boxSms"
    div.style.backgroundColor = "transparent"
    div.innerHTML = "<img src = './asset/img/emoji100(2).png' height='50px';>"
    box.append(div)
}
function emoji3(){
    var box = document.querySelector(".containt-message")
    var div = document.createElement("div")
    div.className = "boxSms"
    div.style.backgroundColor = "transparent"
    div.innerHTML = "<img src = './asset/img/emoji100(3).png' height='50px';>"
    box.append(div)
}
function emoji4(){
    var box = document.querySelector(".containt-message")
    var div = document.createElement("div")
    div.className = "boxSms"
    div.style.backgroundColor = "transparent"
    div.innerHTML = "<img src = './asset/img/emoji100.png' height='50px';>"
    box.append(div)
}
function emoji5(){
    var box = document.querySelector(".containt-message")
    var div = document.createElement("div")
    div.className = "boxSms"
    div.style.backgroundColor = "transparent"
    div.innerHTML = "<img src = './asset/img/emoji2100.png' height='50px';>"
    box.append(div)
}
function emoji6(){
    var box = document.querySelector(".containt-message")
    var div = document.createElement("div")
    div.className = "boxSms"
    div.style.backgroundColor = "transparent"
    div.innerHTML = "<img src = './asset/img/emoji3100.png' height='50px';>"
    box.append(div)
}
function change_icon(){
    var img ="./asset/img/sen-icon100.png"
    document.querySelector("#like").setAttribute("src", img)
    document.querySelector("#btnss").setAttribute("style", "background-color: rgba(58, 9, 155, 0.96);")
}


demoAnswer()
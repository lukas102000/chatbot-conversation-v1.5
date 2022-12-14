const conversation_demo = (conversation)=>{
    const listen = {
        "oi":"olá",
        "olá": "olá",
        "como estás?": "estou bem e tu?",
        "como estás": "estou bem e tu?",
        "como vás": "vou bem e tu?",
        "Tudo bem?": "tudo e contigo?",
        "tambm estou bem": "o dia como foi?",
        "também bem": "o dia como foi?",
        "também": "o dia como foi?",
        "bem e o seu?": "normal",
        "foi bom": "okay",
        "foi bom e o seu?": "normal",
        "boa tarde": "boa tarde, como estás?",
        "bom dia": "bom dia, como estás?",
        "boa noite": "boa noite, como estás?",
        "que horas são?": "não sei, veja ao seu celular, por favor",
        "e os seus": "normal",
        "que situação?": "situação, financeira, trabalho, etc... tu estudas?, ou trabalhas",
        "não":"está bem",
        "sim estudo": "qual é o teu académico?",
        "sim trabalho": "gostas do teu trabalho?",
        "sim gosto do meu trabalho": "que bom",
        "não podemos": "está bem",
        "sim podemos": "está bem, estás preparada para começar?",
        "sim estou prepada": "então vamos começar",
        "não estou preparada": "está bem!"
    }
    return listen[conversation]
}
const quetions = (op)=>{
    listen = [
        "Como tem sido os teus dias?",
        "Como está correndo as tuas actividades?",
        "Qual é a tua situação actual?",
        "Tu tens filhos?",
        "Tu gostas de um animal doméstico?",
        "Como se chama o seu animal doméstico?",
        "Que cidade tu és?",
        "Quais são os serviços de táxis há em tua cidade?",
        "Já usou um cartão crédito esse més?",
        "Quantos já gastou este més?",
        "Neste més. tu comprou um ítens online?",
        "Qual é o serviço TV que usas, NetFlix, Youtube? Canal +? Escreve-a",
        "Será que, tu frequentou um shoping este més?",
        "Qual do shoping tu me encomendaria?",
        "Qual é o serviço de táxi, que mais usas? "+localStorage.getItem("sTaxi"),
        "Estudas?",
        "Trabalhas?",
        "Só falta mais um pouco, para terminamos...",
        "És de que país?",
        "Qual é a tua séries favorita?",
        "Se um amigo quer chegar em "+localStorage.getItem("país")+", em que hótel ficaria? de tua preferência?",
        "quantos gastas para pagamentos mensal da "+localStorage.getItem("sTV"),
        "Quais dos serviços de táxis que realizou uma publicidade este més?",
        "Quantos gastou este més usando o "+localStorage.getItem("sTaxi"),
        "Como é conseguir um emprego em "+localStorage.getItem("cidade"),
        "Quais das áreas que mais emprega as pessoas em "+localStorage.getItem("cidade"),
        "Quais dos canais mais adorada por ti na "+localStorage.getItem("sTV"),
        "Qual das personagens que gostas na série de "+localStorage.getItem("serie"),
        "Porque, tu me encomendaria o shoping "+localStorage.getItem("shoping")+"?"
    ]
    var random = Math.floor(Math.random() * listen.length)
    var result = listen[random]
    return result
}
const bot_learning_response = (quest, _user)=>{
    if(quest == "Que cidade tu és?"){
        save_cidade()
    }
    if(quest == "És de que país?"){
        save_pais()        
    }
    if(quest == "Qual é o serviço TV que usas, NetFlix, Youtube? Canal +? Escreve-a"){
        save_STV()        
    }
    if(quest == "Quais são os serviços de táxis há em tua cidade?"){
        save_sTaxi()
    }
    if(quest == "Qual é a tua séries favorita?"){
        save_series()
    }
    if(quest == "Qual do shoping tu me encomendaria?"){
        save_shoping()
    }
}

function save_pais(){
    var box = document.querySelector(".containt-message")
    var inp = document.createElement("input")
    var box_div = document.createElement("div")
    box_div.className = "box_div"
    var logo = "<img src='./asset/img/Chatbot-Logo-Modern-bot-logo-Graphics-14298242-1.jpg'  height='50px'>"
    
    inp.setAttribute("id", "idpais")
    inp.className = "inp-res"
    var btn = document.createElement("button")

    btn.className = "btn-res"
    btn.innerHTML = "Enviar"

    document.getElementById("sendBtn").style.display = "none"
        btn.addEventListener("click",()=>{
            var getter = document.getElementById("idpais").value
            localStorage.setItem("país", getter)
            box_div.innerHTML = logo + "<br>"+ "<div class = 'bot_div' >"+getter+"Podemos continuar?</div>"
            document.getElementById("sendBtn").style.display = "flex"
            document.querySelector(".btn-res").style.display = "none"
            
            box.append(box_div) 
            btn_senders("Sim podemos continuar")
            var getter = document.getElementById("inpgeter").value = ""
        })
        box.append(inp)
        box.append(btn)
        


}
function save_cidade(){
    var box = document.querySelector(".containt-message")
    var inp = document.createElement("input")
    var box_div = document.createElement("div")
    box_div.className = "box_div"
    var logo = "<img src='./asset/img/Chatbot-Logo-Modern-bot-logo-Graphics-14298242-1.jpg'  height='50px'>"
    inp.setAttribute("id", "idcidade")
    inp.className = "inp-res"
    var btn = document.createElement("button")
    btn.className = "btn-res"
    btn.innerHTML = "Enviar"

    document.getElementById("sendBtn").style.display = "none"
        btn.addEventListener("click",()=>{
            var getter = document.getElementById("idcidade").value
            localStorage.setItem("cidade", getter)
            document.getElementById("sendBtn").style.display = "flex"
            document.querySelector(".btn-res").style.display = "none"          
            box_div.innerHTML = logo + "<br>"+ "<div class = 'bot_div' >Podemos continuar?</div>"
            box.append(box_div)
            btn_senders("Sim podemos continuar")
            var getter = document.getElementById("inpgeter").value = ""
        })
        box.append(inp)
        box.append(btn)
}
function save_sTaxi(){
    var box = document.querySelector(".containt-message")
    var inp = document.createElement("input")
    var box_div = document.createElement("div")
    box_div.className = "box_div"
    var logo = "<img src='./asset/img/Chatbot-Logo-Modern-bot-logo-Graphics-14298242-1.jpg'  height='50px'>"
    inp.setAttribute("id", "idTaxi")
    inp.className = "inp-res"
    var btn = document.createElement("button")
    btn.className = "btn-res"
    btn.innerHTML = "Enviar"
    document.getElementById("sendBtn").style.display = "none"
        btn.addEventListener("click",()=>{
            var getter = document.getElementById("idTaxi").value
            localStorage.setItem("sTaxi", getter)
            document.getElementById("sendBtn").style.display = "flex"
            document.querySelector(".btn-res").style.display = "none"
            box_div.innerHTML = logo + "<br>"+ "<div class = 'bot_div' >Podemos continuar?</div>"
            box.append(box_div) 
            btn_senders("Sim podemos continuar")
            var getter = document.getElementById("inpgeter").value = ""
        })
        box.append(inp)
        box.append(btn)
}
function save_STV(){
    var box = document.querySelector(".containt-message")
    var inp = document.createElement("input")
    var box_div = document.createElement("div")
    box_div.className = "box_div"
    var logo = "<img src='./asset/img/Chatbot-Logo-Modern-bot-logo-Graphics-14298242-1.jpg'  height='50px'>"
    inp.setAttribute("id", "idsTV")
    inp.className = "inp-res"
    var btn = document.createElement("button")
    btn.className = "btn-res"
    btn.innerHTML = "Enviar"
    document.getElementById("sendBtn").style.display = "none"
        btn.addEventListener("click",()=>{
            var getter = document.getElementById("idsTV").value
            localStorage.setItem("sTV", getter)
            document.getElementById("sendBtn").style.display = "flex"
            document.querySelector(".btn-res").style.display = "none"
            box_div.innerHTML = logo + "<br>"+ "<div class = 'bot_div' >Podemos continuar?</div>"
            box.append(box_div) 
            btn_senders("Sim podemos continuar")
            var getter = document.getElementById("inpgeter").value = ""
        })
        box.append(inp)
        box.append(btn)
}
function save_series(){
    var box = document.querySelector(".containt-message")
    var inp = document.createElement("input")
    var box_div = document.createElement("div")
    box_div.className = "box_div"
    var logo = "<img src='./asset/img/Chatbot-Logo-Modern-bot-logo-Graphics-14298242-1.jpg'  height='50px'>"
    inp.setAttribute("id", "idseries")
    inp.className = "inp-res"
    var btn = document.createElement("button")
    btn.className = "btn-res"
    btn.innerHTML = "Enviar"
    document.getElementById("sendBtn").style.display = "none"
        btn.addEventListener("click",()=>{
            var getter = document.getElementById("idseries").value
            localStorage.setItem("serie",getter)
            document.getElementById("sendBtn").style.display = "flex"
            document.querySelector(".btn-res").style.display = "none"
            box_div.innerHTML = logo + "<br>"+ "<div class = 'bot_div' >Podemos continuar?</div>"
            box.append(box_div) 
            btn_senders("Sim podemos continuar")
            var getter = document.getElementById("inpgeter").value = ""
        })
        box.append(inp)
        box.append(btn)
}
function save_shoping(){
    var box = document.querySelector(".containt-message")
    var inp = document.createElement("input")
    var box_div = document.createElement("div")
    box_div.className = "box_div"
    var logo = "<img src='./asset/img/Chatbot-Logo-Modern-bot-logo-Graphics-14298242-1.jpg'  height='50px'>"
    inp.setAttribute("id", "idshoping")
    inp.className = "inp-res"
    var btn = document.createElement("button")
    btn.className = "btn-res"
    btn.innerHTML = "Enviar"
    document.getElementById("sendBtn").style.display = "none"
        btn.addEventListener("click",()=>{
            var getter = document.getElementById("idshoping").value
            localStorage.setItem("shoping",getter)
            document.getElementById("sendBtn").style.display = "flex"
            document.querySelector(".btn-res").style.display = "none"
            box_div.innerHTML = logo + "<br>"+ "<div class = 'bot_div' >Podemos continuar?</div>"
            box.append(box_div) 
            btn_senders("Sim podemos continuar")
            var getter = document.getElementById("inpgeter").value = ""
        })
        box.append(inp)
        box.append(btn)
}
const btn_senders = (text)=>{
    return btn_sender(text)
}
var num = 0

const conversation_demo = (conversation)=>{
    const listen = {
        "oi":"olá",
        "olá": "olá",
        "como estás?": "estou bem e tu?",
        "como estás": "estou bem e tu?",
        "como vás": "vou bem e tu?",
        "tudo bem?": "tudo e contigo?",
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

const bot_learning_response = (quest, _user)=>{
    if(quest == "e qual é a tua cidade?"){
        save_cidade()
    }
    if(quest == "És de que país?"){
        save_pais()        
    }
    if(quest == "Qual é o serviço TV que usas, NetFlix, Youtube? Canal+ ou outros? Escreve-as!" ){
        save_STV()        
    }
    if(quest == "Quais são os serviços de táxis há na cidade de "+localStorage.getItem("cidade")+" ?" ){
        save_sTaxi()
    }
    if(quest == "incrível "+localStorage.getItem("name")+". Qual é a tua séries favorita? "+localStorage.getItem("name") ){
        save_series()
    }
    if(quest == "Qual do shoping tu me encomendaria? "+localStorage.getItem("name") ){
        save_shoping()
    }
    if(quest == "Qual é o seu nome?"){
        save_name()
    }
}
function save_name(){
    var box = document.querySelector(".containt-message")
    var inp = document.createElement("input")
    var box_div = document.createElement("div")
    box_div.className = "box_div"
    var logo = "<img src='./asset/img/log.png'  height='50px'>"
    
    inp.setAttribute("id", "idname")
    inp.className = "inp-res"
    var btn = document.createElement("button")

    btn.className = "btn-res"
    btn.innerHTML = "Enviar"

    document.getElementById("sendBtn").style.display = "none"
        btn.addEventListener("click",()=>{
            var getter = document.getElementById("idname").value
            localStorage.setItem("name", getter)
            box_div.innerHTML = logo + "<br>"+ "<div class = 'bot_div' >"+getter+" Podemos continuar?</div>"
            document.getElementById("sendBtn").style.display = "flex"
            document.querySelector(".btn-res").style.display = "none"
            
            box.append(box_div) 
            btn_senders("Sim podemos continuar")
            
        })
        box.append(inp)
        box.append(btn)

}
function save_pais(){
    var box = document.querySelector(".containt-message")
    var inp = document.createElement("input")
    var box_div = document.createElement("div")
    box_div.className = "box_div"
    var logo = "<img src='./asset/img/log.png'  height='50px'>"
    
    inp.setAttribute("id", "idpais")
    inp.className = "inp-res"
    var btn = document.createElement("button")

    btn.className = "btn-res"
    btn.innerHTML = "Enviar"

    document.getElementById("sendBtn").style.display = "none"
        btn.addEventListener("click",()=>{
            var getter = document.getElementById("idpais").value
            localStorage.setItem("país", getter)
            box_div.innerHTML = logo + "<br>"+ "<div class = 'bot_div' >"+localStorage.getItem("name")+" Podemos continuar?</div>"
            document.getElementById("sendBtn").style.display = "flex"
            document.querySelector(".btn-res").style.display = "none"
            
            box.append(box_div) 
            btn_senders("Sim podemos continuar")
            
        })
        box.append(inp)
        box.append(btn)

}
function save_cidade(){
    var box = document.querySelector(".containt-message")
    var inp = document.createElement("input")
    var box_div = document.createElement("div")
    box_div.className = "box_div"
    var logo = "<img src='./asset/img/log.png'  height='50px'>"
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
            box_div.innerHTML = logo + "<br>"+ "<div class = 'bot_div' >"+localStorage.getItem("name")+" Podemos continuar?</div>"
            box.append(box_div)
            btn_senders("Sim podemos continuar")
            
        })
        box.append(inp)
        box.append(btn)
}
function save_sTaxi(){
    var box = document.querySelector(".containt-message")
    var inp = document.createElement("input")
    var box_div = document.createElement("div")
    box_div.className = "box_div"
    var logo = "<img src='./asset/img/log.png'  height='50px'>"
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
            box_div.innerHTML = logo + "<br>"+ "<div class = 'bot_div' >"+localStorage.getItem("name")+" Podemos continuar?</div>"
            box.append(box_div) 
            btn_senders("Sim podemos continuar")
            
        })
        box.append(inp)
        box.append(btn)
}
function save_STV(){
    var box = document.querySelector(".containt-message")
    var inp = document.createElement("input")
    var box_div = document.createElement("div")
    box_div.className = "box_div"
    var logo = "<img src='./asset/img/log.png'  height='50px'>"
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
            box_div.innerHTML = logo + "<br>"+ "<div class = 'bot_div' >"+localStorage.getItem("name")+" Podemos continuar?</div>"
            box.append(box_div) 
            btn_senders("Sim podemos continuar")
            
        })
        box.append(inp)
        box.append(btn)
}
function save_series(){
    var box = document.querySelector(".containt-message")
    var inp = document.createElement("input")
    var box_div = document.createElement("div")
    box_div.className = "box_div"
    var logo = "<img src='./asset/img/log.png'  height='50px'>"
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
            box_div.innerHTML = logo + "<br>"+ "<div class = 'bot_div' >"+localStorage.getItem("name")+" Podemos continuar?</div>"
            box.append(box_div) 
            btn_senders("Sim podemos continuar")
            
        })
        box.append(inp)
        box.append(btn)
}
function save_shoping(){
    var box = document.querySelector(".containt-message")
    var inp = document.createElement("input")
    var box_div = document.createElement("div")
    box_div.className = "box_div"
    var logo = "<img src='./asset/img/log.png'  height='50px'>"
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
            box_div.innerHTML = logo + "<br>"+ "<div class = 'bot_div' >"+localStorage.getItem("name")+" Podemos continuar?</div>"
            box.append(box_div) 
            btn_senders("Sim podemos continuar")
            
        })
        box.append(inp)
        box.append(btn)
}
const btn_senders = (text)=>{
    return btn_sender(text)
}
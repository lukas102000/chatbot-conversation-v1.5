var getInput = document.getElementById("userInput")
getInput.addEventListener("keyup",(event)=>{
    if(event.keyCode === 13){
        send_message()
    }
})

const send_message = ()=>{
    var getInput = document.getElementById("userInput").value 

    var filter = getInput
    get_conversation(filter)
    
    document.getElementById("userInput").value = ""
}
function demoAnswer(){
    var box = document.querySelector(".containt-message")
    var bot_div = document.createElement("div")
    bot_div.className = "bot_div"

    var custon_res = [
        "Olá seja muito ben-vindo! E será um prazer ter uma conversa contigo, isto ajudará-nos a melhorar a qualidades"+
        " das nossas pesquisas online.",
        " NOTA: Algumas perguntas serão repetitiva, para ajudar o flúxo da conversa",
        " Podemos continuar?"
    ]
    var box_div = document.createElement("div")
    box_div.className = "box_div"
    var logo = "<img src='./asset/img/Chatbot-Logo-Modern-bot-logo-Graphics-14298242-1.jpg'  height='50px'>"
    
    
    box_div.innerHTML = logo + "<br>"+ "<div class = 'bot_div' >"+ custon_res +"</div>"
    box.append(box_div)
    btn_sender("sim podemos")
    btn_sender("não podemos")
}
const get_conversation = (_user,bot)=>{
    
    var box = document.querySelector(".containt-message")
    var div = document.createElement("div")
    var bot_div = document.createElement("div")
    div.className = "boxSms"
    bot_div.className = "bot_div"

    var bot_response = conversation(_user)
    var bot_quest = question()
    var box_div = document.createElement("div")
    box_div.className = "box_div"
    var logo = "<img src='./asset/img/Chatbot-Logo-Modern-bot-logo-Graphics-14298242-1.jpg'  height='50px'>"
    
    
    
    
    box.append(div)
    if(_user == ""){
        div.style.display = "none"
        emoji2() 
    }else{
            div.innerHTML = _user
            if(bot_response == undefined){
                box_div.innerHTML = logo + "<br>"+ "<div class = 'bot_div' >"+ bot_quest+ "</div>"
                box.append(box_div)
                bot_learning(bot_quest, _user)
            }else{
                if(bot_response == "está bem, estás preparada para começar?"){
                    box_div.innerHTML = logo + "<br>"+ "<div class = 'bot_div' >"+ bot_response+ "</div>"
                    box.append(div)
                    box.append(box_div)
                    btn_sender("sim estou prepada")
                    btn_sender("não estou preparada")
                }else{
                    box_div.innerHTML = logo + "<br>"+ "<div class = 'bot_div' >"+ bot_response+ "</div>"
                    box.append(div)
                    box.append(box_div)   
                }
                if(bot_response == "então vamos começar"){
                    box_div.innerHTML = logo + "<br>"+ "<div class = 'bot_div' >"+ bot_quest+ "</div>"
                    box.append(box_div)
                }
                
        }
    }
    document.querySelector("#like").setAttribute("src", "./asset/img/emoji100(2).png")
    document.querySelector("#btnss").setAttribute("style", "background-color: white")
}
const btn_sender = (text)=>{
    var box = document.querySelector(".containt-message")
    var bot_div = document.createElement("div")
    var btn = document.createElement("button")
    
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
// importando as questões aleatorios
const question = ()=>{
    return quetions()
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
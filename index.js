
const tickets = [
    {title: "Проектор не включается", room: "203", category: "Оборудование", done: false},
    {title: "Не закрывается окно", room: "105", category: "Аудитория", done: false},
    {title: "В коридоре не горит свет", room: "Коридор, 2-й этаж", category: "Другое", done: true}
]


const caseIn = document.getElementById("caseIn")
const where = document.getElementById("where")
const categoryList = document.getElementById("categoryList")
const addTicket = document.getElementById("addTicket")
const massageCase = document.getElementById("massageCase")
const massageWhere = document.getElementById("massageWhere")
const massageSelect = document.getElementById("massageSelect")
const massageAdd = document.getElementById("massageAdd")
const ticketList = document.getElementById("ticketList")


function cleanTickedList(){
    ticketList.innerHTML = ""

    tickets.forEach((tick) => {
        const item = document.createElement("li")
        if (tickets.done){
            item.textContent = `${tick.title} · ${tick.room} · ${tick.category} · Выполнено`
        } else {
            item.textContent = `${tick.title} · ${tick.room} · ${tick.category} · Открыта`
        }
        ticketList.append(item)
    })
}
cleanTickedList()

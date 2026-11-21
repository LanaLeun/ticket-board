
const tickets = [
    { title: "Проектор не включается", room: "203", category: "Оборудование", done: false },
    { title: "Не закрывается окно", room: "105", category: "Аудитория", done: false },
    { title: "В коридоре не горит свет", room: "Коридор, 2-й этаж", category: "Другое", done: true }
]


const caseIn = document.getElementById("caseIn")
const where = document.getElementById("where")
const categoryList = document.getElementById("categoryList")
const addTicket = document.getElementById("addTicket")
const messageCase = document.getElementById("messageCase")
const messageWhere = document.getElementById("messageWhere")
const messageSelect = document.getElementById("messageSelect")
const messageAdd = document.getElementById("messageAdd")
const ticketList = document.getElementById("ticketList")


function cleanTickedList() {
    ticketList.innerHTML = ""

    tickets.forEach((tick, index) => {
        const item = document.createElement("li")
        if (tick.done) {
            item.textContent = `${tick.title} · ${tick.room} · ${tick.category} · Выполнено`
        } else {
            item.textContent = `${tick.title} · ${tick.room} · ${tick.category} · Открыта`
            const add = document.createElement('button');
            add.textContent = "Выполнить";
            item.append(add);

            add.addEventListener('click', () => {
                tick.done = true
                cleanTickedList()
            })
        }
        const delet = document.createElement('button');
        delet.textContent = "Удалить";

        item.append(delet);
        ticketList.append(item)

        delet.addEventListener('click', () => {
            tickets.splice(index, 1)
            cleanTickedList()
        })
    })
}
cleanTickedList()

addTicket.addEventListener('click', () => {
    const caseInValue = caseIn.value.trim()
    const whereValue = where.value.trim()
    const categoryListValue = categoryList.value.trim()

    if (caseInValue === "" && whereValue === "" && categoryListValue === "") {
        messageAdd.textContent = "Введите данные"
        return
    } if (caseInValue === "") {
        messageCase.textContent = "Введите проблему"
    } if (whereValue === "") {
        messageWhere.textContent = "Введите место"
    } if (categoryListValue === "") {
        messageSelect.textContent = "Выберите категорию"
    } else {

        const newTick = { title: caseInValue, room: whereValue, category: categoryListValue, done: false }
        tickets.push(newTick)
        caseIn.value = ""
        where.value = ""
        categoryList.value = ""
        cleanTickedList()
    }
})
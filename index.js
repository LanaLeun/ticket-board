
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
const showHint = document.getElementById("showHint")


function cleanTickedList() {
    ticketList.innerHTML = ""

    if (tickets.length === 0) {
        const item = document.createElement("li")
        item.textContent = "Заявок пока нет"
        ticketList.append(item)
        return
    }

    if (showHint.checked && !tickets.some(t => !t.done)) {
        const item = document.createElement("li")
        item.textContent = "Открытых заявок нет"
        ticketList.append(item)
        return
    }

    if (showHint.checked) {
        tickets.forEach((tick, index) => {
            const item = document.createElement("li")
            if (tick.done === false) {
                item.textContent = `${tick.title} · ${tick.room} · ${tick.category} · Открыта`
                const complet = document.createElement('button');
                complet.textContent = "Выполнить";
                complet.className = "completStyle"

                item.append(complet);
                complet.addEventListener('click', () => {
                    tick.done = true
                    cleanTickedList()
                })

                const delet = document.createElement('button');
                delet.textContent = "Удалить";
                delet.className = "deletStyle"

                item.append(delet);
                ticketList.append(item)

                delet.addEventListener('click', () => {
                    tickets.splice(index, 1)
                    cleanTickedList()
                })
            }
        })
    } else {
        tickets.forEach((tick, index) => {
            const item = document.createElement("li")
            if (tick.done) {
                item.textContent = `${tick.title} · ${tick.room} · ${tick.category} · Выполнено`
            } else {
                item.textContent = `${tick.title} · ${tick.room} · ${tick.category} · Открыта`
                const complet = document.createElement('button');
                complet.textContent = "Выполнить";
                complet.className = "completStyle"

                item.append(complet);

                complet.addEventListener('click', () => {
                    tick.done = true
                    cleanTickedList()
                })
            }
            const delet = document.createElement('button');
            delet.textContent = "Удалить";
            delet.className = "deletStyle"

            item.append(delet);
            ticketList.append(item)

            delet.addEventListener('click', () => {
                tickets.splice(index, 1)
                cleanTickedList()
            })
        })
    }
}
cleanTickedList()
showHint.addEventListener('change', cleanTickedList)

addTicket.addEventListener('click', () => {
    const caseInValue = caseIn.value.trim()
    const whereValue = where.value.trim()
    const categoryListValue = categoryList.value.trim()
    messageAdd.textContent = ""
    messageCase.textContent = ""
    messageWhere.textContent = ""
    messageSelect.textContent = ""

    if (caseInValue !== "" && whereValue !== "" && categoryListValue !== "") {
        const newTick = { title: caseInValue, room: whereValue, category: categoryListValue, done: false }
        tickets.push(newTick)
        caseIn.value = ""
        where.value = ""
        categoryList.value = ""
        cleanTickedList()
    } if (caseInValue === "") {
        messageCase.textContent = "Введите проблему"
    } if (whereValue === "") {
        messageWhere.textContent = "Введите место"
    } if (categoryListValue === "") {
        messageSelect.textContent = "Выберите категорию"
    } 
})
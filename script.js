let Library = []
let container = document.querySelector(".container")
let addButton = document.querySelector(".newBook")
let pop = document.querySelector(".popup")
let submit = document.querySelector(".submit")
let text = document.querySelector(".text")
let auth = document.querySelector(".authText")
let pageT = document.querySelector(".pageText")
let yes = document.querySelector(".Yes") 
let no = document.querySelector(".No")
let bookIndex = 0;
pop.style.visibility = "hidden"



function Book(title, author, pages, isRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead;
    this.addBook = function() {
        bookIndex++
            Library.unshift([this.title,  this.author, this.pages,  this.isRead, bookIndex])
    }
    

}




function Display() {
    for ( let i = 0; i < Library.length; i++) {
        let element = document.createElement("div")
        element.classList.add("element")
        element.setAttribute("id", bookIndex)
        let title = document.createElement("p")
        title.textContent =   "Title: " + Library[i][0]
        title.classList.add("title")
        title.classList.add("self")
        let writer = document.createElement("p")
        writer.textContent =  "Author: "  + Library[i][1]
        writer.classList.add("author")
        writer.classList.add("self")
        let pages = document.createElement("p")
        pages.textContent =  "Pages: " +Library[i][2]
        pages.classList.add("self")
        pages.classList.add("pages")
        let red = document.createElement("p")
        red.textContent = Library[i][3]
        red.classList.add("red")
        let remove = document.createElement("button")
        remove.textContent = "X"
        remove.classList.add("delete")
        remove.addEventListener("click", (e) => {
            element.remove()
            let index = Library.findIndex((array) => {
                return array.findIndex((other) => {
                    return other == element.id
                })
            })
        
            Library.splice(index, 1)

        })
        let toggle = document.createElement("button")
        toggle.textContent = "change read"
        toggle.classList.add("toggle")
        toggle.addEventListener("click", () => {
            if (red.textContent == "Read: no") {
                red.textContent = "Read: yes"
            } else {
                red.textContent = "Read: no"
            }


        })
        element.appendChild(toggle)
        element.appendChild(remove)
        element.appendChild(red)
        element.appendChild(pages)
        element.appendChild(writer)
        element.appendChild(title)
        container.appendChild(element)
    }
}






addButton.addEventListener("click", () => {
    if (pop.style.visibility === "hidden") {
        pop.style.visibility = "visible";
      } else {
        pop.style.visibility = "hidden";
      }
})

function Del() {
    while (container.firstChild) {
        container.firstChild.remove()
    }

}


let conclude;
submit.addEventListener("click", () => {


    

    let textValue = text.value
    let AuthorValue = auth.value
    let pageValue = pageT.value
    conclude = yes.checked ? "Read: yes" : "Read: no"

    if (textValue == "" || AuthorValue == "" || pageValue == "") {
        return;
    }


    let Bk = new Book(textValue, AuthorValue, pageValue, conclude)
    Bk.addBook()
    Del()
    Display()

    
})

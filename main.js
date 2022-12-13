const body = document.querySelector("body")

const header = document.createElement("header")
header.append("header")
body.appendChild(header)

const main = document.createElement("main")
main.append("main")
body.appendChild(main)

const footer = document.createElement("footer")
footer.append("CONTACT ME")
footer.append("name")
footer.append("address")
footer.append("phone")
footer.append("email")
footer.append("links")
body.appendChild(footer)

const projectList = document.createElement("ul")
projectList.classList.add("project-list")
main.appendChild(projectList)

for (let i = 0; i <= 5; i++) {
    let div = document.createElement("li")
    div.classList.add("project-container")
    div.append("test")

    projectList.appendChild(div)
}
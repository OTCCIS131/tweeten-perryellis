var x = document.getElementsByClassName("glyphicon glyphicon-heart");

let buttons = x;
buttons = Array.from(buttons)
buttons.forEach(button => {
    button.addEventListener("click", e =>{
        let currentCount = button.nextSibling.textContent.trim()
        currentCount = parseInt(currentCount)
        newCount = currentCount + 1
        button.nextSibling.textContent = newCount
    })
})
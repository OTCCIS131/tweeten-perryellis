// let buttons = document.getElementsByClassName("glyphicon glyphicon-heart");

// buttons = Array.from(buttons)
// buttons.forEach(button => {
//     button.addEventListener("click", e =>{
//         let currentCount = button.nextSibling.textContent.trim()
//         currentCount = parseInt(currentCount)
//         newCount = currentCount + 1
//         button.nextSibling.textContent = newCount
//     })
// })


// JQuery for each button
$(function(){
    $('.glybtn').click(event => {
     
        let currentCount = $(event.target).next().text()
       let newCount = parseInt(currentCount) + 1
 
        $(event.target).next().text(newCount)

    })
})
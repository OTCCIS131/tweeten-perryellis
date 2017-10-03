let buttons = document.getElementsByClassName("glyphicon glyphicon-heart");

buttons = Array.from(buttons)
buttons.forEach(button => {
    button.addEventListener("click", e =>{
        let currentCount = button.nextSibling.textContent.trim()
        currentCount = parseInt(currentCount)
        newCount = currentCount + 1
        button.nextSibling.textContent = newCount
    })
})

//jquery
// $("#like").click(function(){
//     num = parseInt($(".glyphicon glyphicon-heart").text());
//     $(".glyphicon glyphicon-heart").text(num+1);
// })
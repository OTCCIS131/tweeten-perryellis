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
    $(document).on('click', '.glybtn', function() {
        let currentCount = $(event.target).next().text()
        let newCount = parseInt(currentCount)+1
        $(event.target).next().text(newCount)
        
    })
    var fullDate = new Date()
    var twoDigitMonth = ((fullDate.getMonth().length+1) === 1)? (fullDate.getMonth()+1) :(fullDate.getMonth()+1)
  var currentDate =  twoDigitMonth + "/" + fullDate.getDate() + "/" + fullDate.getFullYear();
    
    $('.tweetbtns').click(function(event){
        event.preventDefault()
        let newTweet = $(".newest").val()
        if (newTweet.trim() == '') return;
        
    
        $('.tweetsub').prepend("<div class=\"panel panel-default tweeter\">" +
                                "<div class=\"panel-body\">" +
                                    "<div><img src=\"allie&i.jpg\" alt=\"Allie&I\" class=\"tweetimage\">" +
                                    "<div class=\"tweetdate\"> <h4>Perry Ellis    &nbsp;</h4></div> <div class=\"tweetdate\"><h6>  &#64;perryellis &#9679; " + currentDate + "</h6></div>" +
                                    "<div id=\"retweetmessage\"><br>" + newTweet + "</div>" +
                                    "<div class=\"reply\"><span class=\"glyphicon glyphicon-comment glybtn\"></span><span>0</span></div>" +
                                    "<div class=\"retweet\"><span class=\"glyphicon glyphicon-retweet glybtn\"></span><span>0</span></div>" +
                                    "<div class=\"likes\"><span class=\"glyphicon glyphicon-heart glybtn\"></span><span>0</span></div>" +
                                    "<div class=\"message\"><span class=\"glyphicon glyphicon-envelope glybtn\"></span><span>0</span></div>" +
                                    "</div></div>")
    
        $(".newest").val("")
    })


});


// $(function(){
//     $('.glybtn').click(event => {
     
//         let currentCount = $(event.target).next().text()
//        let newCount = parseInt(currentCount) + 1
 
//         $(event.target).next().text(newCount)

        

//     })


//     $('.').click(function(event) {
//         event.preventDefault()
//         let newTweet = $(".newest").val()
//         if (newTweet.trim() == '') return
    
//     $('.tweeter').clone().insertAfter(".tweeter")
//     $("#retweetmessage").replaceWith(newTweet)
//     })

    


// })


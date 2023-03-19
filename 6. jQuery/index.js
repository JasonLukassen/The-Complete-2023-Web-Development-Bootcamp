
/*
$("h1").addClass("big-title margin-50");
$("h1").text("Good Bye");
*/

/*
$("button").css("backgroundColor", "red")
$("button").html("<em>Hey</em>")
*/

/*
$("a").attr("href","https://facebook.com")
*/

/*
$("h1").click(function(){
    $("h1").css("color", "red");
})
*/

/*
for(let i = 0; i < 5; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        document.querySelector("h1").style.color = "purple";
    })
}

$("button").click(function(){
    $("h1").css("color", "purple");
})
*/

/*
$("body").keypress(function(event){
    $("h1").html(event.key)
})
*/


$("h1").on("click", function(){
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
})
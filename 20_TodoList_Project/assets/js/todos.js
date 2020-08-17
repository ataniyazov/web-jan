// alert("Connected!");

// check off a specific todes by clicking it
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
})

// click on 'trash icon' to delete todos
 $("ul").on("click", "span", function(event){
     $(this).parent().fadeOut(500, function(){
         $(this).remove();
        })
     event.stopPropagation();
 })
 
//  enter todos by hitting the enter key
$("input[type='text']").keypress(function(event){
    if (event.which == 13) {
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
})

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});
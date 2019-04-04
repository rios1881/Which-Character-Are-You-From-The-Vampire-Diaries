$("button").click(function() {
    var Number=$(".age").val();
    var Species=$(".species").val();
    if (  Number  > 100 && Species === "vampire"        ){
        $("p").text("vampire");
    }else if (  Number < 100     ){
        $("p").text("werewolf");
    }else{
        $("p").text("check your responses");
    }
    if ( Species === "vampire"     ){
        $("p").text("vampire");
    }else if ( Species === "werewolf"  ){
        $("p").text("werewolf");
    }else{
        $("p").text("check your response");
    }
});
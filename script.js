$(document).ready(function()
                 {
    $("a.button").on("click",function()
                    {
      var element=$("div.topMenu");
      element.animate({height:"40%"},400);
        console.log(element);
    
       
    });
    $("button.close").on("click",function()
                        {
         var element=$("div.topMenu");
      element.animate({height:"0%"},400);
        
    });
    $("div.pagelink a.link").on("click",function()
                               {
        var id='#'+$(this).text();
        var top=$(id).offset().top;
        $("html,body").animate({scrollTop:top},1000);
        console.log(id);
        console.log(top);
    });
    $("div.topMenu a.link").on("click",function()
                               {
        var id='#'+$(this).text();
        var top=$(id).offset().top;
        $("html,body").animate({scrollTop:top},1000);
        console.log(id);
        console.log(top);
    });
})
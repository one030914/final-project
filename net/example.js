$(function(){
    var index = 0;//標記當前圖片索引
    setInterval(function(){
        if(index == $(".box-img").length() - 1){
            index = 0;
            $(".box-img").css("opacity","0");
            $(".box-img").eq(index).css("opacity","1");
        }else{
            index++;
            $(".box-img").css("opacity","0");
            $(".box-img").eq(index).css("opacity","1");
        }
     
    },2000)
})
$(function () {  
    //遍历选项卡  
    $('li').each(function (index) {  
        $(this).click(function () {  
            var linode = $(this);  
            $('.content').removeClass("content"); 
            //将原来显示的区域进行隐藏  
            $('.tab').removeClass("tab"); 
            //移除选项卡的特效  
            $(linode).addClass("tab"); 
            //给鼠标划入的选项卡添加tab  
            $('div').eq(index).addClass("content"); 
            //显示划入标签下的内容  
        })  
    });  
});  

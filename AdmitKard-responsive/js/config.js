$(document).ready(function() {
    
    $(".set > a").on("click", function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass("active");
            $(this).siblings('.content').slideUp(200);
            $(".set > a i").removeClass("fa-minus").addClass("fa-plus");
        } else {
            $(".set > a i").removeClass("fa-minus").addClass("fa-plus");
            $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
            $(".set > a").removeClass("active");
            $(this).addClass("active");
            $('.content').slideUp(200);
            $(this).siblings('.content').slideDown(200);
        }
    });

//Tab Js
    $(".tab_content").hide();
    $(".tab_content:first").show();

// if in tab mode 
    $("ul.tabs li").click(function() {
		
        $(".tab_content").hide();
        var activeTab = $(this).attr("rel"); 
        $("#"+activeTab).fadeIn();		

        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");

        $(".tab_drawer_heading").removeClass("d_active");
        $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
	  
    });
	
    $('ul.tabs li').last().addClass("tab_last");    
    
});
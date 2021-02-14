$(document).ready(function() {

     $(".name-bottom").focus(function ()  
    { 
        $(this).css({'box-shadow': 'none', 'outline': 'none', 'background' : '#F3EAE6', 'border': '1px solid #6e5b58', 'color': '#6e5b58'});          
    });
	
	$(".name-bottom").keypress(function ()  
    { 
        $(this).css({'box-shadow': 'none',  'outline': 'none', 'background' : '#F3EAE6', 'border': '1px solid #6e5b58', 'color': '#6e5b58'});          
    });
	
	$(".name-bottom").blur(function ()  
    { 
        $(this).css({'box-shadow': 'none',  'outline': 'none', 'background' : '#8A4E3C', 'border': '1px solid #403533', 'color': '#F3EAE6'});          
    });
	
});
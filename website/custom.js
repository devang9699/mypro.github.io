$(document).ready(function(){

	$('.slick_slider').slick({
		autoplay:true,
		autoplaySpeed: 1000,
		dots: true,
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode:false,
		arrows:false


	}); 






	$('.slick-text-slider').slick({
		arrows:true,
		
		slidesToShow: 1,
		slidesToScroll: 1

		

	}); 



	var url=window.location.href;
	url = url.substr(url.lastIndexOf("/") + 1);
	

	
	$('.navbar ul li ').each(function(){


		 var href = $(this).find('a').attr('href');
		 if(url == href){

			 $( this ).parent().find( 'li.active' ).removeClass( 'active' );
			 $( this ).addClass( 'active' ); 	
		 	
		 }
		});


	


		$(".accordion .question a").on("click", function(){
			if ($(this).hasClass("active")){
	  			console.log("if clicked");
	  			$(this).removeClass("active");
	  			$(this).parent().siblings(".content").slideUp(200);
	  
	 	    	$(".accordion .question a i").removeClass("fa-minus").addClass("fa-plus");
			
			}else{
	 			 console.log("else clicked");
	  			$(".accordion .question a i").removeClass("fa-minus").addClass("fa-plus");
	  			$(this).find("i").removeClass("fa-plus").addClass("fa-minus");  

	  			$(".accordion .question a").removeClass("active");
	 		 	$(this).addClass("active");
	  
	  			$(".content").slideUp(200);
	 			$(this).parent().siblings(".content").slideDown(200);
			}
		});
  		
  		$('.carousel-slider').slick({
		
		slidesToShow: 5,
		slidesToScroll: 1,
		infinite:true
		});


  		
		$('.nav-button').on("click",function()
			{
				$('.navbar').toggleClass('active');
			
				if($('.navbar').hasClass('active'))
				{
					$('#logo').hide();
					$('.mobile-menu-icon_open').hide(200);
					$('.mobile-menu-icon_close').show(200);

	
				}
				else
				{
					$('#logo').show();
					$('.mobile-menu-icon_close').hide(200);
					$('.mobile-menu-icon_open').show(200);
				}
				
			}); 
		$('.call').on("click",function()
			{
				
				$('.phone-section').toggleClass('active');
				if($('.phone-section').hasClass('active'))
				{
					$('.phone-section').show(100);
				}
				else
				{	
					$('.phone-section').hide(100);
				}
			}); 
		$('.dropdown').click(function(){
			$(this).find('.dropdown-content').slideToggle();
			$(this).toggleClass('active');

  		});
});








 				







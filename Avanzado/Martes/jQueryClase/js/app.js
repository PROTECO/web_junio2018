$(document).ready(function(){
	$(".b1h").click(function(){
		$("p").hide();
	});
	$(".b1s").click(function(){
		$("p").show();
	});
	$(".b2h").click(function(){
		$("h1").hide();
	});
	$(".b2s").click(function(){
		$("h1").show();
	});
	$(".b3h").click(function(){
		$("h2").hide();
	});
	$(".b3s").click(function(){
		$("h2").show();
	});

	$("#irarticulo1").click(function(){
		var posicion=$("#articulo1").offset().top;
		$("html,body").animate({
			scrollTop: posicion
		},800);
	});
	$("#irarticulo2").click(function(){
		var posicion=$("#articulo2").offset().top;
		$("html,body").animate({
			scrollTop: posicion
		},800);
	});

	$("#irarticulo3").click(function(){
		var posicion=$("#articulo3").offset().top;
		$("html,body").animate({
			scrollTop: posicion
		},800);
	});

	$(".boton1").click(function(){
		$(".img-responsive").fadeOut();
	});

	$(".boton2").click(function(){
		$(".img-responsive").fadeIn();
	});

	$("#articulo2")
	.mouseenter(function(){
		$("#articulo2").addClass("cambialetra");
	})
	.mouseout(function(){
		$("#articulo2").removeClass("cambialetra");
	});
});
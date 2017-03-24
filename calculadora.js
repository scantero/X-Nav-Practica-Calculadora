$(document).ready(function(){

	var display = "";
	var equalpush = false;
	var rootpush = false;
	var rootval = 0;
	$("#displayscreen").val(0);

	$(".num").click(function(){
		if(display == "Sintax err"){
			display = "";
		}
		if (!equalpush){
			display += $(this).html();
		}
		else{
			display = $(this).html();
			equalpush = false;
		}
		$("#displayscreen").val(display);
	});

	$(".operator").click(function(){
		if (display != "" || display != 0){
			display += $(this).html();
			$("#displayscreen").val(display);
		}
	});

	$(".operatormult").click(function(){
		if (display != "" || display != 0){
			display += "*";
			$("#displayscreen").val(display);
		}
	});

	$(".operatordivide").click(function(){
		if (display != "" || display != 0){
			display += "/";
			$("#displayscreen").val(display);
		}
	});

	function equals(){
		try{
			if (equalpush){
				$("#displayscreen").val(display);
			}
			else{
				if (!rootpush){
					$("#displayscreen").val(eval(display));
					display = eval(display);
				}
				else{
					rootpush = false;
					if (display == "Math err"){
						$("#displayscreen").val(display);
					}
					else{
						$("#displayscreen").val(rootval);
						display = rootval;
					}
				}
				equalpush = true;
			}
		}
		catch (e){
			console.log(e);
			display = "Sintax err";
			$("#displayscreen").val(display);
			equalpush = true;
		}
	};


	$("#equal").click(equals);


	$("#reset").click(function(){
		display = "";
		$("#displayscreen").val(0);
	});

	$(".operatorpi").click(function(){
		display += 3.14;
		$("#displayscreen").val(display);
	});

	$(".operatorroot").click(function(){
			if (display != "" || display != 0){
				display = Math.sqrt(parseInt(display));
				if(isNaN(display)){
					display = "Math err";
					rootpush = true;
					equalpush = true;
				}
				else{
					rootpush = true;
				}
				rootval = display;
				$("#displayscreen").val(display);
			}
			display = "";

	});

	$(".operatorbrack").click(function(){
		display += $(this).html();
		$("#displayscreen").val(display);
	});

	$("#backspace").click(function(){
		display = display.slice(0, -1);
		$("#displayscreen").val(display);
	});

	$(window).keypress(function(e){
		if(e.which == 8){
			e.preventDefault();
			display = display.slice(0, -1);
			$("#displayscreen").val(display);
		}else if(e.which == 13){
			e.preventDefault();
			equals();
		}else if(e.which == 42){
			display += '*';
		}else if(e.which == 43){
			display += '+';
		}else if(e.which == 45){
			display += '-';
		}else if(e.which == 46){
			display += ".";
		}else if(e.which == 47){
			display += '/';
		}else if (e.which == 48){
			display += 0;
		}else if(e.which == 49){
			display += 1;
		}else if(e.which == 50){
			display += 2;
		}else if(e.which == 51){
			display += 3;
		}else if(e.which == 52){
			display += 4;
		}else if(e.which == 53){
			display += 5;
		}else if(e.which == 54){
			display += 6;
		}else if(e.which == 55){
			display += 7;
		}else if(e.which == 56){
			display += 8;
		}else if(e.which == 57){
			display += 9;
		}
		equalpush = false;
		$("#displayscreen").val(display);
	});


});

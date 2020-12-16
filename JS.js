var question=[`what's the radius of earth?`,`what's the distance between earth and sun ?`,`what's the name of the central black hole in milky way?`]
var sun=[{
	answer: "149.6 million km",
	value:true
},
	{answer:"140 thousand year",
	value:false
},
{answer:"100 thousand light year",
	value:false

}

]

var earth=[

	{answer:"12000 km",
	value:false
},
{answer:"100 km",
	value:false

},
	{answer: "6,371 km",
	value:true
}

]

var blackhole=[{
	answer: "scorpion B*",
	value:false
},
	{answer:"Sagittarius B*",
	value:false
},
{answer:"Sagittarius A*",
	value:true

}

]



$(document).ready(function(){
	$("#earth").hide()
	$("#thesun").hide()
	$("#blackhole").hide()
	$("#score").hide()

	

	$("#earth").append(`<p id="p1">${question[0]}<p>`)

	for (var i=0 ;i<earth.length;i++){
	
	 $("#earth").append(`<button class='btn1' id=${earth[i].value} > ${earth[i].answer} </button>`);
	}




	$("#thesun").append(`<p id="p2">${question[1]}<p>`)
	for (var i=0 ;i<sun.length;i++){
	
	 $("#thesun").append(`<button class="btn2"  id=${sun[i].value}>${sun[i].answer} </button>`);

	}



	$("#blackhole").append(`<p id="p3">${question[2]}<p>`)
	for (var i=0 ;i<sun.length;i++){
	 $("#blackhole").append(`<button class="btn3"  id={${blackhole[i].value}>${blackhole[i].answer} </button>`);
	}


    $('.btn').on('click', function(event) { 
    $('.heartpage').hide();
	$('#earth').slideDown(2000)

});



 
var score=0

 $('.btn1').click( function(event) { 

  var bClick = $('.btn1').attr("id");
    if (bClick === true){
    	score+=1
    	$("#earth").hide(2000);
         $('#thesun').slideDown(2000)
    	
}

   	 $("#earth").hide();
         $('#thesun').slideDown(2000)
});







     $('.btn2').on('click', function(event) {  
     	var aclick=$('.btn2').attr("id");
         if (aclick===true){
    	score+=1
    
    $("#thesun").hide(2000);
        $('#blackhole').slideDown(2000)
    }
        $("#thesun").hide();
        $('#blackhole').slideDown(2000)

     
});











      $('.btn3').on('click', function(event) {  
    	var cclick=$('.btn3').attr("id");

        if (cclick===true){
    	score+=1
    
    $("#blackhole").hide(2000);
    $('#score').slideDown(2000)
    $('#score').append(`<p id='p4'>your score is : ${score}<p>`)
    
}

    $("#blackhole").hide();
    $('#score').slideDown(2000)
    $('#score').append(`<p id='p4'>your score is : ${score}<p>`)

    
})

  
 })




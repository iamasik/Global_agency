/*---------Striky------*/
$(document).ready(function(){
    $('.about').waypoint(function(direction){
        if(direction=="down"){
            $('nav').addClass('striky');
        }else{
            $('nav').removeClass('striky');
        }
    },{
        offset:'300px;'
    })
})

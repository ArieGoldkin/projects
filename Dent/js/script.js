
//    MENU FIXED POSITION

$(document).ready(function() {   
   var nav = $('.menu');

    var totalSpaceFromTop = function() {
        var topPageSpace = $('.wrapper').css('marginTop');
        var topHeader = $('.topHeader').css('height');        
        if (topPageSpace && topHeader) {   
            var topPageSpaceNoPx = topPageSpace.replace("px","");
            var topHeaderNoPx = topHeader.replace("px","");
            return parseInt(topPageSpaceNoPx) + parseInt(topHeaderNoPx); // + parseInt(logoNoPx);            
        }
        return 0;
    };

    var totalSpaceFromTop = totalSpaceFromTop();

   $(window).scroll(function () {

       if ($(this).scrollTop() >= totalSpaceFromTop) {
          nav.addClass("f-menu");

       } else {
        nav.removeClass("f-menu");
       }

   });

//    var slides = [ [img1,dot1],[],[] ]

   //for refactor - object oriented 

   //SLIDER IMAGE
   
    var slideIndex = 0;
    var time = 3000;
    var playing = true;
    var slideInterval = setInterval(init, time);
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

   
    //this is the function that runs the images
    function init() {
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; 
        }
        slideIndex++;
        if (slideIndex > slides.length) {
        slideIndex = 1;
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block"; 
        dots[slideIndex-1].className += " active";
    }

    

    $('.playSlider').click(function(){
        if(playing = true ){
            clearInterval(slideInterval);
        }
        return slideInterval = setInterval(init, time);   
    });

    $('.stopSlider').click(function(){
        clearInterval(slideInterval);
    });

    $('.moveRight').click(function(){
        init(slideIndex++);
    });

    $('.moveLeft').click(function(){
        init(slideIndex-1);
    });

    // form verification
    
    $('#myForm').submit(function (e) {
  
        e.preventDefault();
        var inputsArray = ["firstName","lastName","phone","email"];
        inputsArray.forEach(function(inputName) {
            var element = $('.' + inputName);
            if(element.length) {
                var elementValue = element.val();
                if(elementValue) {
                    LegalChars = new RegExp("^[a-zA-Z\-\u0590-\u05FF ]+$");
                    var numberReg = /^[0-9]+$/;

                    // console.log(inputName + " value: " + elementValue); //test
                    if(inputName == inputsArray[0] || inputName == inputsArray[1]) { // firstName or lastName
                        if (!LegalChars.test(elementValue)){
                            // innerText someting went wrong
                            return false;
                        } else {
                        return elementValue;
                        }
                        
                    }
                    else if (inputName == inputsArray[2]) { // phone
                        debugger;
                        if (!numberReg.test(elementValue)) {
                            console.log("numbers only!");
                        } else {
                           console.log(elementValue);
                        }
                       
                    }
                    else if (inputName == inputsArray[3]) { // email
                        return;
                    }       
                    return;             
                }
            }
            else {
                console.log(inputName + " element not found");
            }
                        
        });




        
        // var firstNameElement = $('.firstName');
        // if(firstNameElement) {
        //     var firstNameValue = firstNameElement.val();
        // }
        

        
        // var fname = $('.firstName').val();
        // var lastName = $('.lastName').val();
        // var phone = $('.phone').val();
        // var fname = $('.email').val();
       
        // if(!fname) {
        //     $('.errorBox').css("visibility", "visible");
        //     $('.errorBox').innerText = "First name is required";
        //     return false;
        // }
        // if(!lastName) {
        //     alert("lastname not found");
        //     return false;
        // }
        // if(!phone) {
        //     alert("phone not found");
        //     return false;
        // }
        // if(!email) {
        //    alert("email not found");
        //     return false;
        // }
      });
}); //END READY


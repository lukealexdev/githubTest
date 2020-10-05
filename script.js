$("#invoice-type-generate").click(function () {
   
    $("#life-support-dropdown").addClass("hidden")
    
    $("#additional-items").addClass("hidden")
    
});

function myFunction () {
    
    var x = document.getElementById("services").value;
    
    if (x == "basic" || "intermediate" || "advanced") {
        
            $("#hospital-group").removeClass("hidden");
        
            $("#process-group").removeClass("hidden");
        
        }
    
}

    $("#auto-button").click(function () {
        
    var y = $('input[name="hospital-radio"]:checked').val();    
               
        if (y == "no") {
            
            $("#area-group").removeClass("hidden");
    
            $("#odometer-group").removeClass("hidden"); 
    
            $("#times-group").removeClass("hidden"); 
            
            
            } else if (y == "yes") {
                
            $("#area-group").removeClass("hidden");
    
            $("#odometer-group").removeClass("hidden"); 
                
            $("#times-group").addClass("hidden");     
                
            }
        
         $("#raf-category-1").addClass("hidden"); 
        
        $("#raf-category-2").addClass("hidden");
        
        $("#raf-category-3").addClass("hidden"); 
        
        $("#additional-items").removeClass("hidden")
        
        
    });

$("#yes-button").click(function () {
   
    $("#times-group").addClass("hidden");     
    
});

$("#no-button").click(function () {
    
    var z = $('input[name="optradio"]:checked').val();    
    
    if (z == "auto") {
   
    $("#times-group").removeClass("hidden"); 
        
        }
    
});


$("#manual-button").click(function () {
   
    $("#area-group").addClass("hidden");
    
    $("#odometer-group").addClass("hidden"); 
                
    $("#times-group").addClass("hidden");
    
    var x = document.getElementById("services").value;
    
    if (x == "basic") {
        
        $("#raf-category-1").removeClass("hidden"); 
        
        $("#raf-category-2").addClass("hidden");
        
        $("#raf-category-3").addClass("hidden"); 
        
    }
    
    if (x == "intermediate") {
        
        $("#raf-category-2").removeClass("hidden"); 
        
        $("#raf-category-1").addClass("hidden");
        
        $("#raf-category-3").addClass("hidden");
        
    }
    
     if (x == "advanced") {
        
        $("#raf-category-3").removeClass("hidden"); 
         
         $("#raf-category-1").addClass("hidden");
        
        $("#raf-category-2").addClass("hidden");
        
    }
    
    $("#additional-items").removeClass("hidden")
    
    
});

function myFunction2() {
    
    var x = document.getElementById("services").value;
    
    var y = $('input[name="hospital-radio"]:checked').val();    
    
    var z = $('input[name="optradio"]:checked').val();  
    
    
    if (x == "basic" && z == "manual") {
        
          $("#raf-category-1").removeClass("hidden"); 
         
         $("#raf-category-2").addClass("hidden");
        
        $("#raf-category-3").addClass("hidden");
        
        
        }
    
        if (x == "intermediate" && z == "manual") {
        
          $("#raf-category-2").removeClass("hidden"); 
         
         $("#raf-category-1").addClass("hidden");
        
        $("#raf-category-3").addClass("hidden");
        
        
        }
    
        if (x == "advanced" && z == "manual") {
        
          $("#raf-category-3").removeClass("hidden"); 
         
         $("#raf-category-1").addClass("hidden");
        
        $("#raf-category-2").addClass("hidden");
        
        
        }
    
}






//$("#auto-button").click(function () {
//   
//  $("#area-group").removeClass("hidden");
//    
//    $("#odometer-group").removeClass("hidden"); 
//    
//    $("#raf-category-1").addClass("hidden"); 
//    
//    $("#times-group").removeClass("hidden"); 
//    
//});
//    
//
//function myFunction() {
//    
//  var x = document.getElementById("services").value;
//    
//var y = $('input[name="optradio"]:checked').val();
//    
//    
//  
//    if (x == "basic" || "intermediate" || "advanced") {
//        
//        $("#process-group").removeClass("hidden");
//        
//        $("#area-group").removeClass("hidden");
//    
//        $("#odometer-group").removeClass("hidden");  
//    
//        $("#times-group").removeClass("hidden"); 
//        
//    
//    }
//    
//      if (y == "auto" || "manual" ) {
//        
//          
//        $("#times-group").removeClass("hidden");  
//        
//        
//    }
//    
//    if (x == "hospital") {
//        
//        $("#times-group").addClass("hidden");
//    }
//    
//    
//    $("#manual-button").click(function () {
//   
//  $("#area-group").addClass("hidden");
//    
//    $("#odometer-group").addClass("hidden"); 
//    
//    $("#times-group").addClass("hidden"); 
//        
//    
//    if (x == "basic") {
//    
//    $("#raf-category-1").removeClass("hidden"); 
//    
//    $("#raf-category-2").addClass("hidden");
//        
//    $("#raf-category-3").addClass("hidden");    
//    
//    }
//    
//    if (x == "intermediate") {
//    
//    $("#raf-category-2").removeClass("hidden"); 
//        
//     $("#raf-category-1").addClass("hidden");
//        
//    $("#raf-category-3").addClass("hidden");    
//    
//    }
//    
//    if (x == "advanced") {
//    
//    $("#raf-category-3").removeClass("hidden"); 
//        
//     $("#raf-category-1").addClass("hidden");
//        
//    $("#raf-category-2").addClass("hidden");    
//    
//    }
//       
//});
//    
//    
//}

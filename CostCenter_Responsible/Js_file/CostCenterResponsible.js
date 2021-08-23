

$(document).ready(function () {
          $('.editbtn').click(function () {
var id=$(this).parent().attr('id');
alert(id)
             var currentTD = $(this).parent('li').find('input');
             alert(currentTD.attr('id'))
             if ($(this).html() == 'Edit') {
             // alert('f')
                  var y = currentTD.find('#PersonResponsibleId');
                
                 
//alert(y)
                      y.removeAttribute("readonly")
                
              }
              else {
                 $.each(currentTD, function () {
                      $(this).setAttribute("readonly", true)
                  });
              }
               $(this).html($(this).html() == 'Edit' ? 'Save' : 'Edit')
    
          });
    
      });

         

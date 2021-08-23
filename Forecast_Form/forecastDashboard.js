$(document).ready(function(){
      $('#cmt_with_tooltip').keyup(function(){
    $(this).attr('title',$(this).val())
  })


     // $(".openCommentPopup").on("click", function(){
    //    $("#myAddModal").modal();
  //  });

})
/*
$('.openCommentPopup').on('click', function() {
    var id = $(this).data('id');
    alert(id)
    $('#myModal_'+id).show();
})*/
function updateTitle(elem)
{
    var cmtvalue = document.getElementById('cmt_with_tooltip').value
elem.title=cmtvalue;
}
function ResetFilter()  
{    
    document.getElementById('textfield1').value = "";
    document.getElementById('textfield2').value = "";
    document.getElementById('textfield3').value = "";
}  
function AddFCbtn()  
{  var total=document.getElementById('TotFCAdjustment').value;
    var result = total.replace(/[^a-z\d\s]+/gi, "")        
    document.getElementById('TotFCAdjustment').setAttribute('value','+'+''+result);
 
} 

function SubFCbtn()
{ var total=document.getElementById('TotFCAdjustment').value;
    var result = total.replace(/[^a-z\d\s]+/gi, "")     
    document.getElementById('TotFCAdjustment').setAttribute('value','-'+''+result);
  
} 


function sum() {
            var txtFirstNo = document.getElementById('Others').value;
            var txtSecondNo = document.getElementById('Travel').value;
            var txtThirdNo = document.getElementById('Personal').value;
         

              var result = (parseInt(txtFirstNo) || 0) + (parseInt(txtSecondNo) || 0 ) + (parseInt(txtThirdNo) || 0);
              
            if (!isNaN(result)) {
               // document.getElementById('TotFCAdjustment').value = '€'+result ;
            document.getElementById('TotFCAdjustment').setAttribute('value',result);
            }
        }

$(function () {
        $("#btnClosePopup").click(function () {

            $("#myAddModal").modal('hide');
            
        });
    });
$(function () {
        $("#Submit").click(function () {

            $("#myAddModal").modal('hide');
            
        });
    });

var btn = document.getElementById('Submit');
btn.addEventListener('click', savefunc);
function updateProsedFTE()
{
    
    var currentFTE=document.getElementById('curFTEcountId').value;

    var FTEAdjust=document.getElementById('fteAdjust').value;

    var result = (parseInt(currentFTE) || 0) + (parseInt(FTEAdjust) || 0 );
              
            if (!isNaN(result)) {
            document.getElementById('proposedfte').setAttribute('value',result);
            }

}
function savefunc() {
   
    var tfc =document.getElementById('TotFCAdjustment').value;
    
    //var pyfc=document.getElementById('preYearFC-cost').textContent;
    var cmt=document.getElementById('Comment').value;
    document.getElementById('cmt_with_tooltip').setAttribute('value', cmt);

    var LFC= document.getElementById('linerFcId').value;
   var nocommaLFC=LFC.replace(/,/g, '');
   var roundedLFC=Math.round(nocommaLFC)
 
   

    document.getElementById('fcAdjust').setAttribute('value',tfc);   

    var FCAdjust=document.getElementById('fcAdjust').value;

  

    if (/^[+]/.test(FCAdjust))
    {

            var result = (parseInt(roundedLFC) || 0) + (parseInt(FCAdjust.replace(/\D/g,'')) || 0 );
              
            if (!isNaN(result)) {
            document.getElementById('proposedfc').setAttribute('value',result);
            }
    
       
    }
    else if (/^[-]/.test(FCAdjust))
    {
       var result = (parseInt(roundedLFC) || 0) - (parseInt(FCAdjust.replace(/\D/g,'')) || 0 );
             
            if (!isNaN(result)) {
            document.getElementById('proposedfc').setAttribute('value',result);
            }
    }

/*
    var nosuffix_tfc=tfc.replace(/\D/g,'');
    var nosuffix_pyfc=pyfc.replace(/\D/g,''); 
    var result = (parseInt(nosuffix_tfc) || 0) + (parseInt(nosuffix_pyfc) || 0);
              
            if (!isNaN(result)) {
              document.getElementById('proposedfc').setAttribute('value',result);
            }
            */
        }
    



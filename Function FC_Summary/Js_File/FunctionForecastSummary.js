
window.onload = function(){
   
var GT_FCCostAdjustdata = 0;
var GT_PFC=0;
var GT_TM=0;

for(var loop=0;loop<7;loop++)
{
 //total fc is same as proposed fc after adjustment column data starts  
      var x = document.querySelectorAll("#proposedFCAFAdjustdata-"+(loop+1))

var y = document.querySelectorAll("#totFCAFMarkupdata-"+(loop+1))

for(var i=0;i<x.length;i++)
{   

y[i].value=Number((x[i].value).replace(/,/g, ''));
}

//total fc is same as proposed fc after adjustment column data end 


//total for fc cost adjustment starts
var x = document.querySelectorAll("#fcCostAdjustdata-"+(loop+1));

var total = 0;
for(var i=0;i<x.length;i++)
{
      
total+=Number((x[i].value).replace(/,/g, ''));
}
 document.getElementById('sum-FCCostAdjustdata-'+(loop+1)).setAttribute('value',total);
 //total for fc cost adjustment ends

  //total for Proposed FC After Adjust starts
 var x = document.querySelectorAll("#proposedFCAFAdjustdata-"+(loop+1));

var total = 0;
for(var i=0;i<x.length;i++)
{
      
total+=Number((x[i].value).replace(/,/g, ''));

}
document.getElementById('sum-ProposedFCAFAdjustdata-'+(loop+1)).setAttribute('value',total);
  //total for Proposed FC After Adjust ends

   //total for  FC After Markup starts
var x = document.querySelectorAll("#totFCAFMarkupdata-"+(loop+1));

var total = 0;
for(var i=0;i<x.length;i++)
{
      
total+=Number((x[i].value).replace(/,/g, ''));
}

document.getElementById('sum-totFCAFMarkupdata-'+(loop+1)).setAttribute('value',total);
    //total for  FC After Markup ends


var x = document.querySelectorAll('#sum-FCCostAdjustdata-'+(loop+1));

for(var i=0;i<x.length;i++)
{
GT_FCCostAdjustdata+=Number((x[i].value).replace(/,/g,''));
}

document.getElementById('GT-FCCostAdjustdata').setAttribute('value',GT_FCCostAdjustdata);

// grand total of sum-ProposedFCAFAdjustdata starts
var x = document.querySelectorAll('#sum-ProposedFCAFAdjustdata-'+(loop+1));
for(var i=0;i<x.length;i++)
{
GT_PFC+=Number((x[i].value).replace(/,/g,''));
}
document.getElementById('GT-ProposedFCAFAdjustdata').setAttribute('value',GT_PFC);
// grand total of sum-ProposedFCAFAdjustdata end

// grand total of sum-totFCAFMarkupdata starts
var x = document.querySelectorAll('#sum-totFCAFMarkupdata-'+(loop+1));
for(var i=0;i<x.length;i++)
{
GT_TM+=Number((x[i].value).replace(/,/g,''));
}
document.getElementById('GT-totFCAFMarkupdata').setAttribute('value',GT_TM);
// grand total of sum-totFCAFMarkupdata end



}//loop ends


}
    //windows on load ends


//update markup for total FC after markup column
function updateMarkup()
{
      var markup=document.getElementById('markupTextField').value;
      var GT=0; 
      for(loop=0;loop<7;loop++) 
      {   
      var x = document.querySelectorAll("#totFCAFMarkupdata-"+(loop+1));      
      var total = 0;
      for(var i=0;i<x.length;i++)
      {
            var   Amt=Number((x[i].value).replace(/,/g, ''));
            var  percentage=Amt*(markup/100);  
            total=Amt+percentage; 
            x[i].value=Math.round(total);
      }

      var x = document.querySelectorAll("#totFCAFMarkupdata-"+(loop+1));

var total = 0;
for(var i=0;i<x.length;i++)
{
      
total+=Number((x[i].value).replace(/,/g, ''));
}

document.getElementById('sum-totFCAFMarkupdata-'+(loop+1)).setAttribute('value',Math.round(total));

var x = document.querySelectorAll("#sum-totFCAFMarkupdata-"+(loop+1));
for(var i=0;i<x.length;i++)
{
      
GT+=Number((x[i].value).replace(/,/g, ''));
}
document.getElementById('GT-totFCAFMarkupdata').setAttribute('value',Math.round(GT));
}
}


$(document).ready(function(){
  
    $('#deptlist').on('change', function(){
    
      var demovalue = $(this).val(); 
      if (demovalue=="All")
      {
       $("div.filterDiv").show();
      }
      else{
      $("div.filterDiv").hide();
      $("#show"+demovalue).show();
      }
    });

   $('#ComCodelist').on('change', function(){
      document.getElementById('deptlist').value="";  
      var demovalue = $(this).val();
   //  var deptval=document.getElementById('deptlist').value;
        if(demovalue=="All")
      {
       $("div.filterDiv").show();
      }
      else
      {
      $("div.filterDiv").hide();
      $(".show"+demovalue).show();  
      }
      

    });
});
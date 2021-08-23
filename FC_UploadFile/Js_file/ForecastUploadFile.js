

//---js for first file starts---


var btn = document.getElementById('firstbtnUploadPopup');
btn.addEventListener('click', firstUploadfunc);

function firstUploadfunc() {
   var filename = document.getElementById('firstformFileLg').value;
  var lastIndex = filename.lastIndexOf("\\");
  if (lastIndex >= 0) {
    filename = filename.substring(lastIndex + 1);
  }
   document.getElementById('firstfilename').setAttribute('value', filename);
}
 
 function firstUpdateTitle(elem)
{
    var filenamevalue = document.getElementById('firstfilename').value
elem.title=filenamevalue;
}  

//---js for first file ends---

//---js for second file starts---
var btn = document.getElementById('secbtnUploadPopup');
btn.addEventListener('click', secUploadfunc);

function secUploadfunc() {
   var filename = document.getElementById('secformFileLg').value;
  var lastIndex = filename.lastIndexOf("\\");
  if (lastIndex >= 0) {
    filename = filename.substring(lastIndex + 1);
  }
   document.getElementById('secfilename').setAttribute('value', filename);
}
 
 function secUpdateTitle(elem)
{

     var filenamevalue = document.getElementById('secfilename').value
elem.title=filenamevalue;

}  
//---js for second file ends---

//---js for third file starts---
var btn = document.getElementById('thirdbtnUploadPopup');
btn.addEventListener('click', thirdUploadfunc);

function thirdUploadfunc() {
   var filename = document.getElementById('thirdformFileLg').value;
  var lastIndex = filename.lastIndexOf("\\");
  if (lastIndex >= 0) {
    filename = filename.substring(lastIndex + 1);
  }
   document.getElementById('thirdfilename').setAttribute('value', filename);
}
 
 function thirdUpdateTitle(elem)
{

     var filenamevalue = document.getElementById('thirdfilename').value
elem.title=filenamevalue;

}  
//---js for third file ends---


//---js for fourth file starts---
var btn = document.getElementById('fourthbtnUploadPopup');
btn.addEventListener('click', fourthUploadfunc);

function fourthUploadfunc() {
   var filename = document.getElementById('fourthformFileLg').value;
  var lastIndex = filename.lastIndexOf("\\");
  if (lastIndex >= 0) {
    filename = filename.substring(lastIndex + 1);
  }
   document.getElementById('fourthfilename').setAttribute('value', filename);
}
 
 function fourthUpdateTitle(elem)
{

     var filenamevalue = document.getElementById('fourthfilename').value
elem.title=filenamevalue;

}  
//---js for fourth file ends---



//---js for fifth file starts---
var btn = document.getElementById('fifthbtnUploadPopup');
btn.addEventListener('click', fifthUploadfunc);

function fifthUploadfunc() {
   var filename = document.getElementById('fifthformFileLg').value;
  var lastIndex = filename.lastIndexOf("\\");
  if (lastIndex >= 0) {
    filename = filename.substring(lastIndex + 1);
  }
   document.getElementById('fifthfilename').setAttribute('value', filename);
}
 
 function fifthUpdateTitle(elem)
{

     var filenamevalue = document.getElementById('fifthfilename').value
elem.title=filenamevalue;

}  

//---js for fifth file ends---



//---js for sixth file starts---
var btn = document.getElementById('sixthbtnUploadPopup');
btn.addEventListener('click', sixthUploadfunc);

function sixthUploadfunc() {
   var filename = document.getElementById('sixthformFileLg').value;
  var lastIndex = filename.lastIndexOf("\\");
  if (lastIndex >= 0) {
    filename = filename.substring(lastIndex + 1);
  }
   document.getElementById('sixthfilename').setAttribute('value', filename);
}
 
 function sixthUpdateTitle(elem)
{

     var filenamevalue = document.getElementById('sixthfilename').value
elem.title=filenamevalue;

}  

//---js for sixth file ends---



//---js for seventh file starts---
var btn = document.getElementById('sevbtnUploadPopup');
btn.addEventListener('click', sevUploadfunc);

function sevUploadfunc() {
   var filename = document.getElementById('sevformFileLg').value;
  var lastIndex = filename.lastIndexOf("\\");
  if (lastIndex >= 0) {
    filename = filename.substring(lastIndex + 1);
  }
   document.getElementById('sevfilename').setAttribute('value', filename);
}
 
 function sevUpdateTitle(elem)
{

     var filenamevalue = document.getElementById('sevfilename').value
elem.title=filenamevalue;

}  
//---js for seventh file ends---

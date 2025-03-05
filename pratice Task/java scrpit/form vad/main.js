<<<<<<< HEAD
function mainform(str) {
 if (str.fname.value==""){
   document.getElementById("msg").innerHTML="Please Enter First Name"
    str.fname.focus();
    return false;
 }  
 if(!str.fname.value.match(/^[a-z A-Z]{1,}$/)){
    document.getElementById("msg").innerHTML="Please Enter Only Character value"
    str.fname.focus();
    return false;
 }

 if (str.lname.value==""){
    document.getElementById("msg").innerHTML="Please Enter Last Name"
    str.lname.focus();
    return false;
 }  
 if(!str.lname.value.match(/^[a-z A-Z]{1,}$/)){
    document.getElementById("msg").innerHTML="Please Enter Only Character value"
    str.lname.focus();
    return false;
 }
 if (str.email.value==""){
    document.getElementById("msg").innerHTML="Please Enter Your Email Id";
    str.email.focus();
    return false;
 }
 if(!str.email.value.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,3})+$/)){
    document.getElementById("msg").innerHTML="Please Enter Correct Email Id"
    str.email.focus();
    return false;
 }
 if (str.mobile.value==""){
    document.getElementById("msg").innerHTML="Please Enter Your Mobile Number";
    str.mobile.focus();
    return false;
 }
 if(!str.mobile.value.match(/^[0-9]{10,10}$/)){
    document.getElementById("msg").innerHTML="Please Enter Your in 10 Digit Mobile Number"
    str.mobile.focus();
    return false;
 }
 if (str.birth.value==""){
   document.getElementById("msg").innerHTML="Please Enter Date of Birth"
   str.birth.focus();
   return false;
 }
 if (str.add.value==""){
   document.getElementById("msg").innerHTML="Please Enter Address";
   str.add.focus();
   return false;
 }

 if (str.city.value==""){
   document.getElementById("msg").innerHTML="Please Enter CIty"
    str.city.focus();
    return false;
 }  
 
 if (str.areapin.value==""){
   document.getElementById("msg").innerHTML="Please Enter Area Pin"
    str.areapin.focus();
    return false;
}

if (str.state.value==""){
   document.getElementById("msg").innerHTML="Please Enter State"
    str.state.focus();
    return false;
 }  

 
 if(str.edu.value=="")
	{
	document.getElementById("msg1").innerHTML="! Please Select one";
	str.edu.focus();
	return false;
	}


   if(str.pass.value=="")
      {
window.alert("! Please enter Some Value in Password") ;    
 str.pass.focus();
      return false;
      }
      
      
      if(str.pass.value.length<8)
      {
      document.getElementById("msg1").innerHTML="! Please enter minimum 8 digit length";
      str.pass.focus();
      return false;
      }
	
}
=======
function mainform(str) {
 if (str.fname.value==""){
   document.getElementById("msg").innerHTML="Please Enter First Name"
    str.fname.focus();
    return false;
 }  
 if(!str.fname.value.match(/^[a-z A-Z]{1,}$/)){
    document.getElementById("msg").innerHTML="Please Enter Only Character value"
    str.fname.focus();
    return false;
 }

 if (str.lname.value==""){
    document.getElementById("msg").innerHTML="Please Enter Last Name"
    str.lname.focus();
    return false;
 }  
 if(!str.lname.value.match(/^[a-z A-Z]{1,}$/)){
    document.getElementById("msg").innerHTML="Please Enter Only Character value"
    str.lname.focus();
    return false;
 }
 if (str.email.value==""){
    document.getElementById("msg").innerHTML="Please Enter Your Email Id";
    str.email.focus();
    return false;
 }
 if(!str.email.value.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,3})+$/)){
    document.getElementById("msg").innerHTML="Please Enter Correct Email Id"
    str.email.focus();
    return false;
 }
 if (str.mobile.value==""){
    document.getElementById("msg").innerHTML="Please Enter Your Mobile Number";
    str.mobile.focus();
    return false;
 }
 if(!str.mobile.value.match(/^[0-9]{10,10}$/)){
    document.getElementById("msg").innerHTML="Please Enter Your in 10 Digit Mobile Number"
    str.mobile.focus();
    return false;
 }
 if (str.birth.value==""){
   document.getElementById("msg").innerHTML="Please Enter Date of Birth"
   str.birth.focus();
   return false;
 }
 if (str.add.value==""){
   document.getElementById("msg").innerHTML="Please Enter Address";
   str.add.focus();
   return false;
 }

 if (str.city.value==""){
   document.getElementById("msg").innerHTML="Please Enter CIty"
    str.city.focus();
    return false;
 }  
 
 if (str.areapin.value==""){
   document.getElementById("msg").innerHTML="Please Enter Area Pin"
    str.areapin.focus();
    return false;
}

if (str.state.value==""){
   document.getElementById("msg").innerHTML="Please Enter State"
    str.state.focus();
    return false;
 }  

 
 if(str.edu.value=="")
	{
	document.getElementById("msg1").innerHTML="! Please Select one";
	str.edu.focus();
	return false;
	}


   if(str.pass.value=="")
      {
window.alert("! Please enter Some Value in Password") ;    
 str.pass.focus();
      return false;
      }
      
      
      if(str.pass.value.length<8)
      {
      document.getElementById("msg1").innerHTML="! Please enter minimum 8 digit length";
      str.pass.focus();
      return false;
      }
	
}
>>>>>>> c41b63e206e80f023c7d620e23817322de250b06

function validateForm() 
{
	var x = document.forms["myform"]["firstname"].value;
    if (x == null || x == "")
     {
        alert("First name must be filled out");
        return false;
     }
     var x = document.forms["myform"]["lastname"].value;
      if (x == null || x == "") 
     {
        alert("last name must be filled out");
        return false;
     }
     
    
    var x = document.forms["myform"]["Address"].value;
	  if (x == null || x == "") 
	  {
	    alert("address  must be filled out");
	    return false;
	  }
		if ( ( document.myform.Gender[0].checked == false ) && ( document.myform.Gender[1].checked == false ) )
      {
        alert ( "Please choose your Gender: Male or Female" );
        return false;
      }

    if ( document.myform.terms.checked == false )
      
    {
        alert ( "Please check the Terms & Conditions box." );
        return false;
    }

    


}



/* *********************************************************On Submit Validation Function **************************************** */

function formValidation()
{
    formInputs=document.getElementsByTagName("form")[0];
    for(i=0;i<formInputs.length;i++)
    {
    	formInputs.elements[i].focus();//Activating all on blur functions
    }

if(document.getElementById("alert1")||document.getElementById("alert2"))
{

    if(document.getElementById("alert1")) 						//to check for any alert messages
    {
    	alert("Please follow the instructions below the fields to fill up the form");		//else print congrats
        document.getElementById("alert1").style.color="red";
        document.getElementById("alert1").style.fontSize="15px";
        document.getElementById("alert1").previousElementSibling.scrollIntoView(true);
        if(document.getElementById("alert1").previousElementSibling.previousElementSibling)
        document.getElementById("alert1").previousElementSibling.previousElementSibling.focus();
    	return false;
    }
    else if(document.getElementById("alert2"))
    {
        alert("Please follow the instructions below the fields to fill up the form");       //else print congrats
        document.getElementById("alert2").style.color="red";
        document.getElementById("alert2").style.fontSize="14px";
        document.getElementById("alert2").previousElementSibling.scrollIntoView(true);
        if(document.getElementById("alert2").previousElementSibling.previousElementSibling)
        document.getElementById("alert2").previousElementSibling.previousElementSibling.focus();
        return false;   
    }
}
    else 
    {
    	alert("Congrats you have successfully registered");
    	return true;
    }
}

/* ********************************************************************************************************************************************************* */

                        /* ******************************** Creates respective alertboxes ******************************************* */
function AlertBox(id,msg,alert,type)  //creates respective alert messages
{
		var alertMessage=document.createElement(type);
        	alertMessage.setAttribute("name",alert);
        	alertMessage.setAttribute("id",alert);
       		alertMessage.style.color="blue";
       		alertMessage.style.fontSize="11px";
		var alertText=document.createTextNode(""+msg);
			alertMessage.appendChild(alertText);
		var	node=id.parentNode;
			node.appendChild(alertMessage);
}

/* ********************************************************************************************************************************************** */







																/*all the onblur functions*/

            /* ******************************************* validates the respective text field  ********************************************** */

	function FieldValidation(id,type,min,max)   /* ************** validating whether the field is null or not ************** */
	{
		if((id.value=="")||(id.value==null))
        {
        	var msg="* "+id.name + " must not be left empty";
        	var node=id.parentNode;
        	var Iscount=0;
        	var childArray=node.childNodes;

        	for(var i=0;i<childArray.length;i++)
        	{
        		if(childArray[i].nodeName=="P")
        		Iscount++;
        		else if(childArray[i].nodeName=="PRE")
        		{
        		node.removeChild(childArray[i]);
        		Iscount=0;
        		break;
        		}
        	}
        	if(Iscount==0)
        	{
           		AlertBox(id,msg,"alert1","p");
                
            	return false;
        	}
        }
        /* ********************************************************************************************************************************************** */





          /* ******************************************* validates the respective text field input's format ********************************************** */
        	else
       	 {
			var regularExpression=id.pattern;
			
        	
			     if((regularExpression=="")||(regularExpression==null))
    	           {
    		            if(type==null && max==null && min==null)
                        {
                            var node=id.parentNode;
                            var Iscount=0;
                            var childArray=node.childNodes;
                            
                            for(var i=0;i<childArray.length;i++)
                            {
                                if(childArray[i].nodeName=="P")
                                {
                                    node.removeChild(childArray[i]);   
                                }
                             }
                             return false;
                         }
                        else if(type!==null)
                        {
                            var node=id.parentNode;
                            var Iscount=0;
                            var childArray=node.childNodes;
                            for(var i=0;i<childArray.length;i++)
                            {
                                if(childArray[i].nodeName=="P")
                                {
                                    node.removeChild(childArray[i]);
                                    Iscount=0;     
                                }
                            }
                        }
                    }
    		if(type!=="phonenumber")
			{
    			if(type=="alphanumeric")
        		{
        			var format= "[a-zA-Z0-9]"; 
        		}
        		else if(type=="numeric")
        		{
        			format="[0-9]";
        		}
        		else if(type=="alphabets")
        		{
        			format="[a-zA-Z]";
        		}
        		else if(type="null")
        		{
        			format="";
        		}

                if(max!==null||min!==null)
                {
    			regularExpression = new RegExp("^"+format+".{" + min + "," + max + "}$");
    			msg="* "+id.name+"'s length must be between " + min + " and " + max + " and " + type;
                }
                else 
                {
                regularExpression = new RegExp("^ "+format+" *$");
                msg="* "+id.name+" must be  " + type;
                }
               
			}
    		else if(type=="phonenumber")
    		{
    			regularExpression= /^[+]\s[0-9]{2}\s\([0-9]{3}\)\-[0-9]{3}\-[0-9]{4}$/;
    			msg="* "+id.name+"must be of the format + 91 (990)-824-7888 ";
    		}

    		
			if(regularExpression.test(id.value)==false) /* *************** validating whether the field is of required format or not ****************** */
			{
				var node=id.parentNode;
        		var Iscount=0;
        		var childArray=node.childNodes;
        			for(var i=0;i<childArray.length;i++)
        			{
        				if(childArray[i].nodeName=="PRE")
        				Iscount++;
        				else if(childArray[i].nodeName=="P")
        				{
        					node.removeChild(childArray[i]);
        					Iscount=0;
        					break;
        				}
        			}
        	    
        		if(Iscount==0)
        		{
           			AlertBox(id,msg,"alert2","pre"); //printing alert meassages
            		return false;
        		}
        		else
        		{
        			return false;
        		}
        	
            }

            else
            {	var node=id.parentNode;
        		var Iscount=0;
        		var childArray=node.childNodes;
        			for(var i=0;i<childArray.length;i++)
        			{
        				if(childArray[i].nodeName=="P"||childArray[i].nodeName=="PRE")
        				{
        					node.removeChild(childArray[i]);
        					Iscount++;
        				}
        			}
            }
        }
        
	}

		/* ****************************************************************************************************************************************** */






		/* ************************************************* validates the selectbox field validation *********************************************** */

function SelectFieldValidation(id)
{
    if(document.getElementById(id.id).value==""||document.getElementById(id.id).value=="")
    {
        var node=id.parentNode;
        var Iscount=0;
        var childArray=node.childNodes;
        var msg="select one of the "+id.name;
            for(var i=0;i<childArray.length;i++)
                {
                    if(childArray[i].nodeName=="P")
                    {
                        Iscount++;     
                    }
                }
                if(Iscount==0)
                {
                    AlertBox(id,msg,"alert1","p");
                } 

    }
    else
    {
        var node=id.parentNode;
        var Iscount=0;
        var childArray=node.childNodes;
        for(var i=0;i<childArray.length;i++)
                {
                    if(childArray[i].nodeName=="P")
                        {
                            node.removeChild(childArray[i]);
                            Iscount=0;     
                        }
                }

    }
}
		/* ****************************************************************************************************************************************** */






		/* ****************************************** validates the checkbox field validation ******************************************************** */

	function CheckBoxValidation(id)
{
	var checkBoxArray=document.getElementsByName(id.name);
	var checkbox = 0;
    var node=id.parentNode;
        var Iscount=0;
        var childArray=node.childNodes;
	for(var i=0; i < checkBoxArray.length; i++ )
	{
	if( checkBoxArray[ i ].checked ) //checking atleast one check box is checked
		checkbox = 1;
	}
	if( checkbox==0) 
	{
		msg="* select one of the "+id.name;
		 for(var i=0;i<childArray.length;i++)
                {
                    if(childArray[i].nodeName=="P")
                    {
                        Iscount++;     
                    }
                }
                if(Iscount==0)
                {
                    AlertBox(id,msg,"alert1","p");
                }
                
	}
    else
    {
 var node=id.parentNode;
        var Iscount=0;
        var childArray=node.childNodes;
        for(var i=0;i<childArray.length;i++)
                {
                    if(childArray[i].nodeName=="P")
                        {
                            node.removeChild(childArray[i]);
                            Iscount=0;     
                        }
                }
    }
}
		/* ******************************************************************************************************************************************* */
Generic Form Validations using javascript

To use the generic Validations the onsubmit must return a function 'formValidation()' & 3 onblur functions for various fields.
They are:-
            1)    for text fields,text area,File:- FieldValidation(id,type,min,max)
                    where:-
                    id=id of the text field(* compulsory).
                    type='alphanumeric' or 'numeric' or 'alphabets' or 'phonenumber' for format +91 (990)-824-7888 or null.
                    min=minimum length allowed or null.
                    max=maximum length allowed or null.  
                    
              2)    for selectfields:- SelectFieldValidation(id)
                    where:-
                    id= id of the field(* compulsory).
                    
              3)    for checkboxes & Radio buttons:- CheckBoxValidation(id)
                    where:-
                    id=id of the field(* compulsory).

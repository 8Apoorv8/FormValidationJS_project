let user=document.getElementById("user");
let password=document.getElementById("pass");

flag=1;

function validate()
{
    if(user.value==="")
    {
        document.getElementById("U-error").innerHTML="username is empty"    
        flag=0;
    }
    else if(user.value.length<=3)
    {
        document.getElementById("U-error").innerHTML="username is too small"
        flag=0;
    }
    else
    {
        document.getElementById("U-error").innerHTML=''
        flag=1;
    }
    if(password.value==="")
    {
        document.getElementById("p-error").innerHTML="password is empty";
        flag=0;    
    }
    else if(password.value.length<=5)
    {
        document.getElementById("p-error").innerHTML="password is weak and small";
        flag=0;    
    }

    else
    {
        document.getElementById("p-error").innerHTML=''
        flag=1;
    }
    if (flag)
    {
        return true;    
    }
    else
    {
        return false;
    }
}
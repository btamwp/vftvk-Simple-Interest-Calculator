function compute()
{
    //get variable inputs and calculate outputs
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var amount = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);

    if(principal > 0) {

    // input validation ok
    document.getElementById("result").innerHTML="If you deposit \<mark\>"+principal+"\</mark\>,\<br\>at an interest rate of \<mark\>"+rate+"%\</mark\>.\<br\>You will receive an amount of \<mark\>"+amount+"\</mark\>,\<br\>in the year \<mark\>"+year+"\</mark\>\<br\>";
    }
    else {

        //input validation not ok
        alert("Enter a positive number");
        principal.focus();
        return false;
  }

}
        

function updateRate() 
{
    //get updated selection
    var rateval = document.getElementById("rate").value;

    //display updated selection
    document.getElementById("rate_val").innerText=rateval+"%";
}

function reverse()
{
    var x = document.getElementById("inp").value;
    console.log("x = " + x);
    var res = 0;

    while (x > 0)
    {
        res = res*10 + x%10;
        x = Math.floor(x/10);
    }
    
    document.getElementById("result").innerHTML = res;
    console.log(res);
}
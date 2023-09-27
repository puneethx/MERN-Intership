function calc(op)
{
    var x = document.getElementById("inp1").value;
    var y = document.getElementById("inp2").value;
    
    document.getElementById("result").innerHTML = (op == "mult") ? x*y : x/y;
}
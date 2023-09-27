function alphaSort()
{
    var s = document.getElementById("inp").value;
    var s_split = s.split('');
    var len = s_split.length;
    
    for (i = 0; i < len - 1; i++)
    {
        for (j = 0; j < len - i - 1; j++)
        {
            if (s_split[j] > s_split[j+1])
            {
                var temp = s_split[j];
                s_split[j] = s_split[j+1];
                s_split[j+1] = temp;
            }
        }
    }

    s = s_split.join('');
    document.getElementById("result").innerHTML = s;
    console.log("final s = " + s);
}
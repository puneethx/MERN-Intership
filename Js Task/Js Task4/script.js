function showInfo(info)
{
    var datetime = new Date();

    if (info == 'time')
    {
        var hrs = datetime.getHours();
        var mins = datetime.getMinutes();
        var secs = datetime.getSeconds();
        if (mins < 10)
        {
            mins = `0${mins}`;
        }
        var timeInfo = `${hrs}:${mins}:${secs}`;

        document.getElementById('current-time').innerHTML = timeInfo;
    }
    else
    {
        var day = datetime.getDate();
        var mth = datetime.getMonth() + 1;
        var yr = datetime.getFullYear();
        var dateInfo = `${day}/${mth}/${yr}`;

        document.getElementById('current-date').innerHTML = dateInfo;
    }
}
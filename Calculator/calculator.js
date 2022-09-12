function clearscreen()
{
    document.getElementById("output").value="";
}

function display(value)
{
    document.getElementById("output").value+=value;
}

function calculate()
{
    var c = document.getElementById("output").value;
    var e = eval(c);
    document.getElementById("output").value= e;
}

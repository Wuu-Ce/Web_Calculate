var num = 0;  // 定义第一个输入的数据
function Calculator(num)
{
    //获取当前输入
    if(num=="%")
    {
        document.getElementById('display_main').value=Math.round(document.getElementById('display_main').value)/100;
    }else
    {
        document.getElementById('display_main').value += document.getElementById(num).value;
    }
}
function GetResult() 
{
    //计算输入结果
    document.getElementById("display_main").value = eval(document.getElementById("display_main").value);
}
function clearNum()
{
    //清零
    document.getElementById("display_main").value = null;
    document.getElementById("display_main").focus();
}

function BackSpace() 
{
    //退格
    var arr = document.getElementById("display_main");
    arr.value = arr.value.substring(0, arr.value.length - 1);
}
nosta = [];
function submit()
{
var dsa = [];

for (var j =1; j <=4;j++)
{
    var nos=document.getElementById("name_of_the_student_"+j).value;
    console.log(nos);
    nosta.push(nos);
}
console.log(nosta);
var length_nosta = nosta.length;
console.log(length_nosta);
for (var k= 0; k <length_nosta; k++)
{
    dsa.push("<h4>Name - "+nosta[k] + "</h4>");
    console.log(dsa);
}
console.log(dsa);
document.getElementById("display_name_with_commas").innerHTML = dsa;

var remove_commas = dsa.join(" ");
console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML = remove_commas;

document.getElementById("submit_button").style.display = "none";
document.getElementById("sort_button").style.display = "inline-block";

}

function sorting()
{
    nosta.sort();
    console.log(nosta);

    var display_sorting =[];
    var length_nosta = nosta.length;
    console.log(length_nosta);
    for (var k= 0; k <length_nosta; k++)
    {
        display_sorting.push("<h4>Name - "+nosta[k] + "</h4>");
        console.log(display_sorting);
    }

    var remove_commas = display_sorting.join(" ");
console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML = remove_commas;
}
function fetch()
{ 
var ieee= document.forms["form1"]["ieee"].value;
var data=[{no:93639991,name:'Reuben'},{no:2,name:'Joseph'},{no:3,name:'Harry'}]

if(ieee!="")
{
var name=""
for(var i=0;i<3;i++)
{
	if(data[i].no == ieee)
	{
		name = data[i].name;
		break;
	}
}

if(name=="")
	alert("Wrong IEEE Number");
document.getElementById("name").value = name;
}
else
{
	alert('Please enter a IEEE Number first');
}
	
}
	
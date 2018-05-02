



var create=function(){};


create.prototype.createHeader=function(head)
{
	console.log(head);
var mytablearea=document.getElementById('mytablearea');
var table=document.createElement('table');

var thead=document.createElement('thead');
table.appendChild(thead);

for(var i=0;i<head.length;i++)
{
thead.appendChild(document.createElement('th')).appendChild(document.createTextNode(head[i]));
}
mytablearea.append(table);
}




create.prototype.createTable=function(data)
{

var mytablearea=document.getElementById('mytablearea');
var table=document.createElement('table');
var tbody=document.createElement('tbody');

for(var i=0;i<data.length;i++){

    var tr = document.createElement('tr');
    tr.appendChild(document.createElement("td")).appendChild(document.createTextNode(data[i].title));
    tr.appendChild(document.createElement("td")).appendChild(document.createTextNode(data[i].author));
    tr.appendChild(document.createElement("td")).appendChild(document.createTextNode(data[i].summary));
    table.appendChild(tr);
}
mytablearea.append(table);
}


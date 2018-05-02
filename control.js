var create=function(){};

create.prototype.createTable=function(data)
{

console.log(data);


var mytablearea=document.getElementById('mytablearea');
console.log(mytablearea);

//create the table
var table=document.createElement('table');
var tbody=document.createElement('tbody');

for(i=0;i<data.length;i++)
{

//create the row

var tablerow=document.createElement('tr');



for (j=0;j<3;j++)
{

switch(j){
	case 0:

var currentcell=document.createElement('td');
//var textnode=document.createTextNode(''+data[i].title+''+data[i].author+''+data[i].summary);
var textnode=document.createTextNode(data[i].title);

//console.log(textnode);
currentcell.appendChild(textnode);
console.log(textnode);
tablerow.appendChild(currentcell);
 break;


  case 1:

           var currentcell=document.createElement('td');
//var textnode=document.createTextNode(''+data[i].title+''+data[i].author+''+data[i].summary);
var textnode=document.createTextNode(data[i].author);

//console.log(textnode);
currentcell.appendChild(textnode);
console.log(textnode);
tablerow.appendChild(currentcell);
break;

  case 2:

         var currentcell=document.createElement('td');
//var textnode=document.createTextNode(''+data[i].title+''+data[i].author+''+data[i].summary);
var textnode=document.createTextNode(data[i].summary);

//console.log(textnode);
currentcell.appendChild(textnode);
console.log(textnode);
tablerow.appendChild(currentcell);
break;
}

}

tbody.appendChild(tablerow);
}

//tbody.appendChild(tablerow);

table.appendChild(tbody);
mytablearea.append(table);

}


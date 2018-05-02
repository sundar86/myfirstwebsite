/*var mytablearea=document.getElementById('mytablearea');
var mytable=document.createElement('table');
var mytablebody=document.createElement('tbody');


console.log(data);


/*for(var j=0;j<data.length;j++){

  //console.log(data.length);

	mycurrent_row=document.createElement('tr');


	//for(var i=0;i<3;i++)
	//{
	
	 mycurrent_cell=document.createElement('td');
     //console.log(mycurrent_cell);	
     //currenttext=document.createTextNode(''+data[j].title+''+data[j].author+''+data[j].summary);

     currenttext[i]=document.createTextNode(data[j].title);//+document.createTextNode(data[j].author); 
     currenttext1[i]=document.createTextNode(data[j].author);
     console.log(currebnttext1);
     currenttext2[i]=document.createTextNode(data[j].summary);
     //console.log(currenttext);
     mycurrent_cell.appendChild(currenttext);
     mycurrent_cell.appendChild(currenttext1);
     mycurrent_cell.appendChild(currenttext2);

     console.log(mycurrent_cell);
     

     mycurrent_row.appendChild(mycurrent_cell);
    }
    
      

 mytablebody.appendChild(mycurrent_row);
}
 mytable.appendChild(mytablebody);
	


	
	mytablearea.appendChild(mytable);

}

*














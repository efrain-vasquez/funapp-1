import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';


class App extends React.Component{
constructor(props){
	super(props)
	this.state = {
		//when convert to json = results it is saved as key value pairs
		list : []
	}
	this.getData = this.getData.bind(this);
	this.addPost = this.addPost.bind(this);
}


getData(){
	$.ajax({
		//this url comes from databse url that is in the get function 
		url : infoFromDatabase,
		method : 'GET',
		success : (results) => {
			this.setState({ list : results })
		},
		error: (xhr, err) => {
			console.log('you have an error', err);
		}
	});
}

addPost(quantity, description){
   $.ajax({
     method: "POST",
     url: "/clientside",
     contentType: 'application/json',
     data: JSON.stringify({
       quantity: quantity,
       description: description
     })
   }).done(() => {
     this.getData();
   });
 }



componentDidMount(){
	this.getData();
	this.addPost();
}






render(){
  return(
    <h1> Welcome Abi </h1>
  )
}

}
ReactDom.render(<App />,document.getElementById('app'));


/*the html must have a div tag with id=app*/
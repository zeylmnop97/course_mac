import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

class Dishdetail extends Component{



    renderDish = () =>{
        if (this.props.dish != null){
        return(
            <div>
            <Card>
                <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                <CardBody>
                  <CardTitle>{this.props.dish.name}</CardTitle>
                  <CardText>{this.props.dish.description}</CardText>
                </CardBody>
            </Card>
            </div>
        );}
    else{
    return(
        <div></div>
    );}
    }

    renderComments = () =>{

        if (this.props.dish != null){
           return (
               <Card>
                   <h4>Comments</h4>
               <div className="ul class = 'list-unstyled'">
                   {this.props.dish.comments.map((selectedComment) => {
                       return (
                       <div>
                           <li key={selectedComment.id}>{selectedComment.comment}</li>
                           <li>--{selectedComment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(selectedComment.date)))}</li>
                        </div>
                        )
                   })
                }</div>
                </Card>
           );
       }
       else{
           return(
               <div>
                    
               </div>
           );
       }
   }


    render(){
        return(
            <div className="container">
            <div className ='row'>
               <div className = "col-md-5 xs-12 m-1">
                   {this.renderDish()}
                   </div>
                <div className = "col-md-5 xs-12 m-1">
                    {this.renderComments()}
                </div>
                </div>  
                </div>        
        );
    }
}

export default Dishdetail;
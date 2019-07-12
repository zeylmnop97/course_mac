import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';


    function RenderDish({dish}) {
    
        if (dish != null){
            return(
                <div>
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
            );}
        else{
        return(
            <div></div>
        );}

    }

    function RenderComments({dish}) {
      
        if (dish != null){
            return (
                <div>
                    <h4>Comments</h4>
                
                    {dish.comments.map((selectedComment) => {
                        return (
                        <div>
                            <div className="list-unstyled">
                                <li key={selectedComment.id}>{selectedComment.comment}</li>
                                <li>--{selectedComment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(selectedComment.date)))}</li>
                            </div>
                        </div>
                         )
                    })
                 }
                 </div>
            );
        }
        else{
            return(
                <div>
                     
                </div>
            );
        }
      
    }

    const  DishDetail = (props) => {
        return(
            <div className="container">
            <div className ='row'>
               <div className = "col-md-5 xs-12 m-1">
                   {RenderDish(props)}
                   </div>
                <div className = "col-md-5 xs-12 m-1">
                    {RenderComments(props)}
                </div>
                </div>  
                </div>        
        );
      
    }

export default DishDetail;
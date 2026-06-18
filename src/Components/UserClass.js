import React from 'react';
//to start a class bsed component we use 
class UserClass extends React.Component{
    render(){
        return (
            <div className='user-profille'>
                <h2>Name : {this.props.name}</h2>
                <h3>Location : {this.props.location}</h3>
                
            </div>
        );
    }
}
export default UserClass;
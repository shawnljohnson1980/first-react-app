import React, { Component } from 'react';

class PersonCard extends Component {

    render() {
        const { firstName = "Shawn", lastName = "Johnson", age = 40, hairColor = "bald" } = this.props;
        return (
            <div class="header">
                <div class="container">
                    <div class="row">
                        <div class="col2"> <h3>Hi My Name is {firstName}  {lastName}.  I am {age}  years old,  and my hair color is  {hairColor}.. </h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default PersonCard
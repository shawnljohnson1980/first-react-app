import React from 'react';

const PersonCard = props => {
    return (
        <div class="header">
            <div class="container">
                <div class="row">
                    <div class="col2">
                        <table>
                            <thead>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Age</th>
                                <th>Hair Color</th>
                            </thead>
                            <tbody>
                                <td>{props.firstName}</td>
                                <td>{props.lastName}</td>
                                <td> {props.age}</td>
                                <td> {props.hairColor}</td>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonCard
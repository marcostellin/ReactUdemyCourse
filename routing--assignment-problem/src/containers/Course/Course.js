import React, { Component } from 'react';

class Course extends Component {


    useQuery () {
        return new URLSearchParams(this.props.location.search);
    }

    render () {
        return (
            <div>
                <h1>{this.useQuery().get('title')}</h1>
            <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;
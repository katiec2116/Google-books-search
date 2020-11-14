import React, { Component } from "react";
import Results from "../components/Results"; 
import API from "../utils/API";

class Saved extends Component {
    state = {
        saved: [],
    }

    componentDidMount() {
        API.savedBooks()
        .then(books => this.setState({ saved: books}))
        .catch(err => console.log(err))
    }

    // pass down books object that contains all saved books
    render(){
    return (
        <div>
           <Results books={this.state.saved} />
        </div>
    )
    }
};

export default Saved
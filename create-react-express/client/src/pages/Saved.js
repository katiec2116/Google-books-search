import React, { Component } from "react";
import Results from "../components/Results"; 
import API from "../utils/API";

class Saved extends Component {
    state = {
        saved: [],
    }

    componentSidMount() {
        API.getSavedBooks()
        .then(books => this.setState({ saved: books}))
        .catch(err => console.log(err))
    }

    render(){
    return (
        <div>
           <Results books={this.state.saved} />
        </div>
    )
    }
};

export default Saved
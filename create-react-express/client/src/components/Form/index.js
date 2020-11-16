import React from "react";


function Form(props){
return (
  <div className="container">
    <div className="box">
    <div className="field">
      <label className="title" htmlFor="search">
        <p className="pb-4">Search for a Book!</p>
        </label>
      <div class="control">
      <input className= "input"
        onChange={props.handleInputChange}
        value={props.search}
        name="search"
        type="text"
        placeholder="Search a Book"
        id="search"
      />
      </div>
      <button onClick={props.handleFormSubmit} className="button is-link is-rounded mt-3 mb-5">
        Search
        </button>
    </div>
    </div>
  </div>
);
}

export default Form;
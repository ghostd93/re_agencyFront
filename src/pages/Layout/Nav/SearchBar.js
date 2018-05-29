import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import {  getQuery } from '../../../actions/index';

  class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = { term: '' }
        this.handleClick = this.handleClick.bind(this);
    }

    onInputChange(term) {
        this.setState({term});
    }
    handleClick(){
        this.props.getQuery(this.state.term);
    }
 


    render() {
        return (
            <div className="col-sm-3 col-md-3">
            <form className="navbar-form" role="search">
            <div className="input-group search">
                <input type="text" className="form-control" placeholder="Search for..." onChange={event => this.onInputChange(event.target.value)}/>
                <div className="input-group-btn">
                <Link to="advertisements" query={{ query: this.state.term }}>
                    <button className="btn btn-default" type="submit" onClick={this.handleClick} ><i className="glyphicon glyphicon-search"></i></button>
                    </Link>
                </div>
            </div>
            </form>
          
        </div>
        );
    }
  }


export default connect(null, { getQuery })(SearchBar);


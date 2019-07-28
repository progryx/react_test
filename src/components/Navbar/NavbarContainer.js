import React, {Component} from 'react';
import {connect} from "react-redux";
import Navbar from "./Navbar";

class NavbarContainer extends React.Component {

    render () {
        return <Navbar {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId
    }
};


export default connect(mapStateToProps,null,null,{
    pure: false
})(NavbarContainer);
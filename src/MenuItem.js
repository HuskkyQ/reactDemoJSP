import React, { Component } from 'react';
import PropTypes from 'prop-types'

class MenuItem extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.content !== this.props.content){
            return true;
        }else{
            return false;
        }
    }

    render() {
        console.log('child-render');
        return ( 
            <li onClick={this.handleClick}>
                {this.props.eatname}客官请看--->{this.props.content}
            </li>
        );
    }

    handleClick(){
        //  console.log(this.props.index);
        this.props.delItem(this.props.index);
    }
}

MenuItem.propTypes={
    eatname:PropTypes.string.isRequired,
    content:PropTypes.string,
    index:PropTypes.number,
    delItem:PropTypes.func
}
MenuItem.defaultProps={
    eatname:'菜单:'
}
 
export default MenuItem;
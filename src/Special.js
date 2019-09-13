import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

class Special extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isShow: true
         };
        this.toToggle = this.toToggle.bind(this);
    }
    render() { 
        return ( 
            <div>
                <CSSTransition
                    in={this.state.isShow}
                    timeout={2000}
                    classNames="specialText"
                >
                  <div>本店特色菜---香辣牛蛙</div>
                </CSSTransition>
                {/* <div className={this.state.isShow?'show':'hide'}>本店特色菜---香辣牛蛙</div> */}
                
                <div> <button onClick={this.toToggle}>一键点菜</button> </div>
            </div>
         );
    }
    toToggle(){
        this.setState({
            isShow: !this.state.isShow
        })
    }
}
 
export default Special;
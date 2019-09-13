import React, { Component } from 'react';
import axios from 'axios';
import './style.css';
import MenuItem from './MenuItem';
import Special from './Special';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class Menu extends Component{
    constructor(props){
        super(props)
        this.state = {
            inputValue:'',
            list:[]
        };
        this.inputChange = this.inputChange.bind(this);
        this.addList = this.addList.bind(this);
    };

    componentDidMount(){
        axios.get('https://www.easy-mock.com/mock/5d46d8c80944581d047ff7b8/ReactDemo01/menulist')
            .then(res => {
                this.setState({
                    list: res.data.data
                });
            })
            .catch(err => console.log(err))
    }

    render(){
        return (
            <div>
                <div>
                    <label htmlFor="shuru">请输入:</label>
                    <input 
                        id="shuru"
                        className="inputborder"
                        value={this.state.inputValue}
                        onChange={this.inputChange}
                        ref={input => {this.input=input}}
                    />
                    <button onClick={this.addList}>添加菜品</button>
                </div>
                <ul>
                    <TransitionGroup>
                    {
                        this.state.list.map((item,index) => {
                            return (
                                <CSSTransition
                                    timeout={1000}
                                    classNames="specialText"
                                    unmountOnExit
                                    appear={true}
                                    key={index + item}
                                >
                                    <MenuItem
                                        content={item}
                                        key={index + item}
                                        index={index}
                                        delItem={this.deleteItem.bind(this)}
                                    />
                                </CSSTransition>
                            )
                        })
                    }
                    </TransitionGroup>
                </ul>
                <Special />
            </div>
        );
    };

    inputChange(){
        // console.log(e.target.value);
        this.setState({
            // inputValue: e.target.value
            inputValue: this.input.value
        });
    };

    addList(){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue: ''
        })
    };

    deleteItem(index){
        // console.log(index);
        let list = this.state.list;
        list.splice(index,1);
        this.setState({
            list: list
        });
    }
};

export default Menu;
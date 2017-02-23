import React, { Component } from 'react';
import ListItem from './ListItem';

class ArrayKey extends Component {
    constructor(props) {
        super(props);
        
        this.getContents = this.getContents.bind(this);
    }

    getContents() {
        const itemList = this.props.posts.map((post, index) => 
            <ListItem key={post.id} value={post.title}/>
        );
        return itemList;
    }
    
    render() {
        return (
            <ul>
                {this.getContents()}
            </ul>
        );
    }
}

export default ArrayKey;
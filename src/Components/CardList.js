import React from 'react';
import Card from './Card';

class CardList extends React.Component{
    render(){
        // throw new Error("every thing wrong");
        let cardArr = this.props.robots.map((robot, idx) => <Card key = {robot.id} id = {robot.id} name = {robot.name} email = {robot.email}/>);
        return cardArr;
    }
}

export default CardList;
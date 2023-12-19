import { Component } from "react";
import "./card-list-style.css";
import Card from "../card/card";

class CardList extends Component {

    render() {
        const {users} = this.props;
        return (
            <div className="card-list">
                {users.map(user => {
                    return <Card user ={user}/>
            })}
            </div>
        );
    }
}

export default CardList;
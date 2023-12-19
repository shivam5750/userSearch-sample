import { Component } from "react";
import "./card-style.css";


class Card extends Component {
    
    render () {
        const {user} = this.props;
        const {id, name, email} = user;
        return (
                <div key={user.id} className="card-container">
                    <img 
                    alt= {`${name}`}
                    src={`https://robohash.org/${id}?set=set4&size=180x180`}
                    />
                    <p>{`${name}`}</p>
                    <p>{`${email}`}</p>
                </div>
)
    }
}

export default Card;
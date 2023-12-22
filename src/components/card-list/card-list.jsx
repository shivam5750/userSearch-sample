import "./card-list-style.css";
import Card from "../card/card";

const CardList =(props) => {
    const {users} = props;
    return (
        <div className="card-list">
            {users.map(user => {
                return <Card user ={user}/>
        })}
        </div>
    );
}

export default CardList;
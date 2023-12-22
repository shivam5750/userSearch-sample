import "./card-style.css";


const Card = ({user}) => {
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

export default Card;
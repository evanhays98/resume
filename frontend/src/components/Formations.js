
const Formations = (
    {name,
        image,
        lieu,
        date,
        time,
        description}
) => {

    return (
        <div className='Formation'>
            <div className='wrapper name'>
                <h1>{name}</h1>
            </div>
            <div className='wrapper image'>
                <div className='imagewrap'>
                    <img className='img' src={image}/>
                </div>
            </div>
            <div className='wrapper lieu'>
                <p>{lieu}</p>
            </div>
            <div className='wrapper time'>
                <div className='wrapper2'>
                    <p className='date'>{date}</p>
                    <p className='temps'>{time}</p>
                </div>
            </div>
            <div className='wrapper description'>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Formations;
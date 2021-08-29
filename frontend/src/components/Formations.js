
const Formations = () => {

    return (
        <div className='Formation'>
            <div className='wrapper name'>
                <h1>aide soignant</h1>
            </div>
            <div className='wrapper image'>
                <div className='imagewrap'>
                    <img className='img' src={require('../images/chumauldre.jpeg').default}></img>
                </div>
            </div>
            <div className='wrapper lieu'>
                <p>Centre hospitalier de la Mauldre Montfort-l'Amaury / Jouars-Pontchartrain</p>
            </div>
            <div className='wrapper time'>
                <div className='wrapper2'>
                    <p className='date'>2020</p>
                    <p className='temps'>2 mois</p>
                </div>
            </div>
            <div className='wrapper description'>
                <p>S'occuper de l'hygiène et veiller au confort physique et moral des malades.</p>
            </div>
        </div>
    );
};

export default Formations;
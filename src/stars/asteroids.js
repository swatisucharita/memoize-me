const AsteroidsList = ({asteroids, onLoadMore}) => {

    return (
        <>
            <h5>Asteroids</h5>
            <ul>{
                asteroids.map(a => (
                    <div>
                        <div>Name: {a.name}</div>
                        <div>Magnitute: {a.absolute_magnitude_h}</div>
                    </div>
                ))
            }</ul>
            <button onClick={onLoadMore}>Load More ...</button>
        </>
    );

}

export default AsteroidsList;
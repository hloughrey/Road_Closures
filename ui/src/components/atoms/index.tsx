import React, { useEffect, useState } from 'react';
import { useLeaflet } from 'react-leaflet';

function HelloWorld() {
    const { map } = useLeaflet();
    const [bounds, setBounds] = useState({});

    useEffect(() => {
        const eventHandler = event => {
            const { _southWest, _northEast } = event.target.getBounds();
            console.log(_southWest, _northEast);
            setBounds(event.target.getBounds());
        };
        map.on('moveend', eventHandler);

        return () => {
            map.off('moveend', eventHandler); // Remove event handler to avoid creating multiple handlers
        };
    }, [setBounds, map]);

    return (
        // Use bounds for whatever you need
        <div>
            Lat: {bounds.lat}; long: {bounds.lng}
        </div>
    );
}

export default HelloWorld;

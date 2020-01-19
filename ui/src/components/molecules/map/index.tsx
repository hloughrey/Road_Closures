import React, { useState } from 'react';
import { Map, TileLayer, Rectangle } from 'react-leaflet';
import HelloWorld from '../../atoms';

const bounds = [
    [52.02883848153629, -2.788467407226563],
    [52.071065406906634, -2.630538940429688]
];

function map() {
    const [viewPort, setViewPort] = useState({
        center: [52.05, -2.71],
        zoom: 13
    });

    function handleViewportChange(e) {
        setViewPort(e);
    }

    return (
        <Map onViewportChanged={handleViewportChange} viewport={viewPort}>
            <HelloWorld />
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Rectangle bounds={bounds} color={'red'} />
        </Map>
    );
}

export default map;

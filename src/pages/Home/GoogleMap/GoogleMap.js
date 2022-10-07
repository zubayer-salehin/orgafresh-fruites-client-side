import React from 'react';
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from 'react-leaflet';
import "./GoogleMap.css";


function GoogleMap() {

    const position = [24.433331, 90.76667]

    return (
        <div className='px-3 mb-5 pb-5'>
            <h1 className='text-center titleLine fw600 locatoinTitlePaddingBottom'>Our Location</h1>
            <MapContainer style={{ width: "100%", height: "550px" }} center={position} zoom={7} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        Orgafresh Fruits Warehouse <br /> Exactly Location
                    </Popup>
                    <Tooltip>Orgafresh Fruits Warehouse</Tooltip>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default GoogleMap;
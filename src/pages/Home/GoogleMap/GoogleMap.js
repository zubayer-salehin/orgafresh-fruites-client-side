import React from 'react';
import { Container } from 'react-bootstrap';
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from 'react-leaflet';
import "./GoogleMap.css";


function GoogleMap() {

    const position = [23.872453434604665, 91.15941946069621]

    return (
        <div className='mb-5 pb-4'>
            <h1 className='pt-3 text-center mb-5 pb-2'>Our Location</h1>
            <Container>
                <MapContainer center={position} zoom={10} scrollWheelZoom={false}>
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
            </Container>
        </div>
    )
}

export default GoogleMap;
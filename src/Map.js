import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import 'leaflet/dist/leaflet.css';
import 'react-leaflet-markercluster/dist/styles.min.css';
import './Map.css';

const Map = () => {
    return (
        <MapContainer
            whenCreated={map => window.map = map}
            className="markercluster-map"
            center={[51.0, 19.0]}
            // center={[0, 0]} // use this to see tests for 0,0
            zoom={4}
            maxZoom={18}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />

            <MarkerClusterGroup>
                {/*<Marker position={[49.8397, 24.0297]} alt="Cluster1" />*/}
                {/*<Marker position={[52.2297, 21.0122]} alt="Cluster2" />*/}
                <Marker position={[51.5074, -0.0901]} alt="Solo" />
            </MarkerClusterGroup>

            {/* This passes the test, but only if the map is centered at 0,0 as well!*/}
            {/*<MarkerClusterGroup>*/}
            {/*    <Marker position={[0, 0]} alt="Solo" />*/}
            {/*</MarkerClusterGroup>*/}

            {/* But this does not pass the test, even when the map is centered at 0,0 */}
            {/*<MarkerClusterGroup>*/}
            {/*    <Marker position={[0.001, 0]} alt="Solo" />*/}
            {/*</MarkerClusterGroup>*/}

        </MapContainer>
    );
}

export default Map;

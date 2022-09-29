import React, {useEffect, useState} from "react";
import {Layers, TileLayer, VectorLayer} from "./Layers";
import {Icon, Style} from "ol/style";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import {osm, vector} from "./Source";
import {fromLonLat} from "ol/proj";
import {Controls, FullScreenControl} from "./Controls";

import mapConfig from "./config.json";
import MiniMap from "./Map/MiniMap";

function addMarkers(cars) {
    let iconStyle = new Style({
        image: new Icon({
            anchorXUnits: "fraction",
            anchorYUnits: "pixels",
            src: mapConfig.markerImage32,
        }),
    });
    let features = cars.map((car) => {
        const item = [car.longitude, car.latitude];
        let feature = new Feature({
            geometry: new Point(fromLonLat(item)),
        });
        feature.setStyle(iconStyle);
        return feature;
    });
    return features;
}

const DisplayMiniMap = (props) => {
    const cars = props.cars;
    const car = cars[0];
    const [center, setCenter] = useState(mapConfig.center);
    const [zoom, setZoom] = useState(11);

    const [showMarker, setShowMarker] = useState(true);
    const [features, setFeatures] = useState(undefined);

    useEffect(() => {
        setFeatures(addMarkers(cars));
        setCenter([car.longitude, car.latitude]);
        setShowMarker(!showMarker);
        setShowMarker(!showMarker);
    }, [props.cars]);


    if(car===undefined || features === undefined){
        return(<></>);
    }

    function render(){
        return (
            <div className="carCardItemOnHover">
                <MiniMap center={fromLonLat(center)} zoom={zoom}>
                    <Layers>
                        <TileLayer source={osm()}  />
                        {showMarker && <VectorLayer source={vector({ features })} />}
                    </Layers>
                    <Controls>
                        <FullScreenControl />
                    </Controls>
                </MiniMap>
            </div>
        );
    }

    return render();

};

export default DisplayMiniMap;
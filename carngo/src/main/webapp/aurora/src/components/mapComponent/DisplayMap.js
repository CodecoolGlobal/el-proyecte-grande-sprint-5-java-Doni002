import React, {useEffect, useState} from "react";
import Map from "./Map";
import { Layers, TileLayer, VectorLayer } from "./Layers";
import { Style, Icon } from "ol/style";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { osm, vector } from "./Source";
import { fromLonLat, get } from "ol/proj";
import GeoJSON from "ol/format/GeoJSON";
import { Controls, FullScreenControl } from "./Controls";
import FeatureStyles from "./Features/Styles";

import mapConfig from "./config.json";
import {useLocation} from "react-router-dom";

const geojsonObject = mapConfig.geojsonObject;
const geojsonObject2 = mapConfig.geojsonObject2;

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
        feature.setId(car.id);
        feature.setStyle(iconStyle);
        return feature;
    });
    return features;
}

const DisplayMap = (props) => {
    const routePath = useLocation();
    const cars = props.cars;
    const [center, setCenter] = useState(mapConfig.center);
    const [zoom, setZoom] = useState(11);

    const [showLayer1, setShowLayer1] = useState(false);
    const [showLayer2, setShowLayer2] = useState(false);
    const [showMarker, setShowMarker] = useState(false);
    const [features, setFeatures] = useState(undefined);

    useEffect(() => {
        setFeatures(addMarkers(cars));
        setCenter([cars[0].longitude, cars[0].latitude]);
        setShowMarker(!showMarker);
        setShowMarker(!showMarker);

    }, [props.cars, routePath]);


    if(cars===undefined || features === undefined){
        return(<></>);
    }

    function render(){
        return (
            <div className="mapContainer">
                <Map center={fromLonLat(center)} zoom={zoom}>
                    <Layers>
                        <TileLayer source={osm()}  />
                        {showLayer1 && (
                            <VectorLayer
                                source={vector({
                                    features: new GeoJSON().readFeatures(geojsonObject, {
                                        featureProjection: get("EPSG:3857"),
                                    }),
                                })}
                                style={FeatureStyles.MultiPolygon}
                            />
                        )}
                        {showLayer2 && (
                            <VectorLayer
                                source={vector({
                                    features: new GeoJSON().readFeatures(geojsonObject2, {
                                        featureProjection: get("EPSG:3857"),
                                    }),
                                })}
                                style={FeatureStyles.MultiPolygon}
                            />
                        )}
                        {showMarker && <VectorLayer source={vector({ features })} />}
                    </Layers>
                    <Controls>
                        <FullScreenControl />
                    </Controls>
                </Map>
            </div>
        );
    }

    return render();

};

export default DisplayMap;
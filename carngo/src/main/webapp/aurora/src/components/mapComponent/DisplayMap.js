import React, { useState } from "react";
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

const geojsonObject = mapConfig.geojsonObject;
const geojsonObject2 = mapConfig.geojsonObject2;
const markersLonLat = [mapConfig.kansasCityLonLat, mapConfig.blueSpringsLonLat];

function addMarkers(lonLatArray) {
    var iconStyle = new Style({
        image: new Icon({
            anchorXUnits: "fraction",
            anchorYUnits: "pixels",
            src: mapConfig.markerImage32,
        }),
    });
    let features = lonLatArray.map((item) => {
        let feature = new Feature({
            geometry: new Point(fromLonLat(item)),
        });
        feature.setStyle(iconStyle);
        return feature;
    });
    return features;
}

const DisplayMap = () => {
    const [center, setCenter] = useState(mapConfig.center);
    const [zoom, setZoom] = useState(11);

    const [showLayer1, setShowLayer1] = useState(true);
    const [showLayer2, setShowLayer2] = useState(true);
    const [showMarker, setShowMarker] = useState(false);

    const [features, setFeatures] = useState(addMarkers(markersLonLat));

    return (
        <div className="mapContainer">
            <Map center={fromLonLat(center)} zoom={zoom}>
                <Layers>
                    <TileLayer source={osm()} zIndex={0} />
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
            <div className="checkBoxContainer">
                <div>
                    <input
                        type="checkbox"
                        checked={showLayer1}
                        onChange={(event) => setShowLayer1(event.target.checked)}
                    />{" "}
                    Budapest - Third District
                </div>
                <div>
                    <input
                        type="checkbox"
                        checked={showLayer2}
                        onChange={(event) => setShowLayer2(event.target.checked)}
                    />{" "}
                    Budapest - First District
                </div>
                <hr />
                <div>
                    <input
                        type="checkbox"
                        checked={showMarker}
                        onChange={(event) => setShowMarker(event.target.checked)}
                    />{" "}
                    Show markers
                </div>
            </div>
        </div>
    );
};

export default DisplayMap;
import { FC, useCallback, useState } from "react";
// @ts-ignore
import { Map, Marker, Polygon, Polyline, TileLayer } from "react-leaflet";
import { Btn } from "./Btn";
import { Coordinate, Vertex } from "./types";
import styled from "@emotion/styled";
import { LeafletMouseEvent } from "leaflet";
import convexhull from "monotone-convex-hull-2d";

type LeafletEventCallback = (event: LeafletMouseEvent) => void;

/**
 * style
 */
const BtnLayout = styled.div`
  display: flex;
  position: absolute;
  bottom: 30px;
  right: 30px;
  width: 100%;
  justify-content: right;
  z-index: 400;
`;

/**
 * props
 */
interface Props {
  width: string;
  height: string;
  center: Coordinate;
  zoom: number;
  markerPositions?: Coordinate[];
}

export const nazotteSearch: FC<Props> = ({
  width,
  height,
  center,
  zoom,
  markerPositions,
}) => {
  /* state */
  const [isNazotte, setIsNazotte] = useState<boolean>(false);
  const [vertexes, setVertexes] = useState<Vertex[]>([]);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  /* function */
  const changeIsNazotte = () => {
    setIsNazotte(!isNazotte);
  };
  const startNazotte: LeafletEventCallback = ({ latlng }) => {
    if (!isNazotte) return;
    setVertexes(() => [[latlng.lat, latlng.lng]]);
    setIsDragging(true);
  };
  const onNazotte: LeafletEventCallback = ({ latlng }) => {
    if (!isNazotte || !isDragging) return;
    setVertexes([...vertexes, [latlng.lat, latlng.lng]]);
  };
  const stopNazotte: LeafletEventCallback = ({ latlng }) => {
    if (!isNazotte) return;
    setIsNazotte(false);
    setIsDragging(false);
    const convexHullPos = convexhull([...vertexes, [latlng.lat, latlng.lng]]);
    setVertexes(convexHullPos);
    const figures = [
      ...convexHullPos.map((index: number) => vertexes[index]),
      vertexes[convexHullPos[0]],
    ].filter((vertex) => vertex);
    setVertexes(figures);
  };

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        width: width,
        height: height,
      }}
    >
      <Map
        style={{
          width: "100%",
          height: "100%",
        }}
        center={[center.latitude, center.longitude]}
        zoom={zoom}
        onmousedown={startNazotte}
        onmousemove={onNazotte}
        onmouseup={stopNazotte}
        dragging={isDragging == false}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          opacity={isNazotte === true ? 0.5 : 1}
        />
        {(markerPositions ?? []).map((position, i) => (
          <Marker key={i} position={[position.latitude, position.longitude]} />
        ))}
        {vertexes.length > 0 &&
          (isDragging ? (
            <Polyline positions={vertexes} />
          ) : (
            <Polygon positions={vertexes} />
          ))}
      </Map>
      <BtnLayout>
        <Btn isNazotte={isNazotte} clickHandler={changeIsNazotte} />
      </BtnLayout>
    </div>
  );
};

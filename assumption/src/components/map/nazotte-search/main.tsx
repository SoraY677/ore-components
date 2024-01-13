import { FC, useState, useCallback } from "react";
// @ts-ignore
import { Map, Marker, TileLayer } from "react-leaflet";
import { Btn } from "./Btn";
import { Coordinate } from "./types";
import styled from "@emotion/styled";

/**
 * style
 */
const BtnLayout = styled.div`
  display: flex;
  position: fixed;
  bottom: 30px;
  width: 100%;
  justify-content: center;
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
  /* function */
  const changeIsNazotte = () => {
    setIsNazotte(!isNazotte);
  };

  return (
    <>
      <Map
        style={{
          width: width,
          height: height,
        }}
        center={[center.latitude, center.longitude]}
        zoom={zoom}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {(markerPositions ?? []).map((position, i) => (
          <Marker key={i} position={[position.latitude, position.longitude]} />
        ))}
      </Map>
      <BtnLayout>
        <Btn isNazotte={isNazotte} clickHandler={changeIsNazotte} />
      </BtnLayout>
    </>
  );
};

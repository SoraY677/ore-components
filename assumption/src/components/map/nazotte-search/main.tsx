import type { FC } from "react";
import { styled } from "@mui/material/styles";
// @ts-ignore
import { Map, Marker, TileLayer } from "react-leaflet";
import type { Coordinate } from "./types";
import { CreateStyledComponent, StyledComponent } from "@emotion/styled";

interface Props {
  style:any,
  center: Coordinate;
  zoom: number;
  markerPositions?: Coordinate[];
}

export const nazotteSearch: FC<Props> = ({
  style,
  center,
  zoom,
  markerPositions
}) => {
  const StyledMap = styled(Map)(() => (style));
  return (
    <>
      <StyledMap
        // {...props}
        center={[center.latitude, center.longitude]}
        zoom={zoom}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {
            (markerPositions ?? []).map((position, i) => (
              <Marker key={i} position={[position.latitude, position.longitude]} />
            ))
          }
      </StyledMap>
    </>
  );
};

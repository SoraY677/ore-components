import { FC, useState } from "react";
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
  /**
   * 画面の横幅 (cssと同様の指定方法)
   */
  width: string;
  /**
   * 画面の縦幅 (cssと同様の指定方法)
   */
  height: string;
  /**
   * 地図の初期動作時に描画の中心とする座標
   */
  center: Coordinate;
  /**
   * ズーム量: 10~17程度の整数指定推奨
   */
  zoom: number;
  /**
   * なぞった後の座標情報からマーカーの座標リストを算出する関数（利用者定義）
   */
  handler: (vertexList: Vertex[]) => Vertex[];
}

/**
 * なぞって検索のメイン機能<br>
 * **※自作ではない。[ISUCON10のお題を参考にコンポーネント化](https://github.com/isucon/isucon10-qualify/blob/master/webapp/frontend/src/pages/estate/nazotte/index.tsx)したため、著作権にご注意を** <br/>
 * <br/>
 * 以下、機能実現のために必要となる特有のライブラリ。環境に合わせてインストールすること
 * - monotone-convex-hull-2d: https://www.npmjs.com/package/monotone-convex-hull-2d
 * - leaflet: https://www.npmjs.com/package/leaflet
 *
 */
export const nazotteSearch: FC<Props> = ({
  width = "640px",
  height = "480px",
  center = {
    latitude: 35.6894,
    longitude: 139.6917,
  },
  zoom = 15,
  handler = (_) => {
    return [];
  },
}) => {
  /* state */
  const [isNazotte, setIsNazotte] = useState<boolean>(false);
  const [vertexes, setVertexes] = useState<Vertex[]>([]);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [markerPosList, setMarkerPosList] = useState<Vertex[]>([]);
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
    // 凸包算出
    // - 参考:https://mathlandscape.com/convex-hull/
    const convexHullPos = convexhull([...vertexes, [latlng.lat, latlng.lng]]);
    setVertexes(convexHullPos);
    const figures = [
      ...convexHullPos.map((index: number) => vertexes[index]),
      vertexes[convexHullPos[0]], // 図形として閉じるように始点の座標を終点にもする
    ].filter((vertex) => vertex);
    setVertexes(figures);
    setMarkerPosList(handler(vertexes));
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
        {markerPosList.map((pos, i) => (
          <Marker key={i} position={[pos[0], pos[1]]} />
        ))}
        {vertexes.length > 0 &&
          (isDragging ? (
            <Polyline positions={vertexes} />
          ) : (
            <Polygon positions={vertexes} />
          ))}
      </Map>
      <BtnLayout>
        <Btn isNazotte={isNazotte} onClick={changeIsNazotte} />
      </BtnLayout>
    </div>
  );
};

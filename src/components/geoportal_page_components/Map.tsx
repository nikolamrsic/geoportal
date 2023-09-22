import { ReactElement, useState } from "react";
import { useRef, useEffect } from "react";
import TileLayer from "ol/layer/Tile.js";
import BingMaps from "ol/source/BingMaps.js";
import View from "ol/View.js";
import Map from "ol/Map.js";
import OSM from "ol/source/OSM.js";
import "ol/ol.css";
import { TileWMS } from "ol/source";
import { Box, Stack } from "@mui/material";
import SideBar from "./SideBar";
const geoserverUrl = "http://localhost:1024/geoserver/wms?";

import OpacitySlider from "./OpacitySlider";
import MapBaseSelect from "./MapBaseSelect";
type MapComponent_Type = {
  togleSidebar: () => void;
  openSidebar: boolean;
};

export const MapComponent = ({
  togleSidebar,
  openSidebar,
}: MapComponent_Type): ReactElement => {
  //varijable
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [map, setMap] = useState<object | undefined>(undefined);
  const [anex, setAnex] = useState<string[]>([
    "Drzava",
    "Jezera",
    "Okruzi",
    "Opstina",
    "Parcele",
    "Pokrajina",
    "Pruga",
    "Put",
    "Reke",
    "Visine",
    "Pokretivost tla",
    "Orto-snimci",
    "Geologija",
  ]);

  const [remveBaseMap, setRemoveBaseMap] = useState<boolean>(true);

  const [selectedBaseMap, setSelectetBaseMap] = useState<string>("");
  const [baseMap, setBaseMap] = useState<object | undefined>(
    new TileLayer({
      source: new OSM(),
    })
  );
  const [defaultMap, setDefaultMap] = useState();

  const [activeLayers, setActiveLayers] = useState<object>([]);
  const [mapLayers, setMapLayers] = useState<object[]>([]);

  // Pomocne Funkcije
  const getLayer = (layerName: string, zIndex: number) =>
    new TileLayer({
      source: new TileWMS({
        url: geoserverUrl,
        params: {
          LAYERS: layerName,
          TILED: true,
        },
        serverType: "geoserver",
      }),
      zIndex: zIndex,
    });

  const upDateActiveLayers = (newValue) => {
    setActiveLayers((prev) => {
      let arr = [...prev];
      const isSome = arr.some((item) => item === newValue);
      if (isSome) {
        arr = [...arr.filter((item) => item != newValue)];
      } else {
        arr.push(newValue);
      }
      return arr;
    });
  };

  // Postavi Aktivne Leyere
  useEffect(() => {
    setMapLayers(() => {
      let arr = activeLayers.reduce((total, current, index) => {
        total.push(getLayer(current.toLowerCase(), index + 1));
        return total;
      }, []);
      return arr;
    });
  }, [activeLayers]);

  // Renderuj Aktivne Leyere
  useEffect(() => {
    if (map) {
      const montedLayers = map.getLayers().getArray();
      montedLayers.forEach((monted, index) => {
        map.removeLayer(monted);
      });
      mapLayers.forEach((mapLayer) => {
        map.addLayer(mapLayer);
      });
    }
  }, [mapLayers]);

  //postavi selektovan layer
  useEffect(() => {
    if (selectedBaseMap != "") {
      setBaseMap(
        new TileLayer({
          visible: true,
          preload: Infinity,
          source: new BingMaps({
            key: "Atn_cqEDAcqUkG5W_EDvFyS7WltAjM30pQwqidVUnYuj1dd3_yS2ZLfgj12sSoi3",
            imagerySet: selectedBaseMap,
          }),
          zIndex: 0,
        })
      );
    }
  }, [selectedBaseMap]);

  // Renderuj Mapu
  useEffect(() => {
    const map = new Map({
      layers: [baseMap, ...mapLayers],
      view: new View({
        center: [2279173.1731826123, 5593738.276328504],
        zoom: 5,
      }),
      target: mapRef.current!,
    });
    setMap(map);
    return () => {
      map.setTarget(undefined);
    };
  }, [baseMap, mapLayers]);

  return (
    <>
      <SideBar
        toogleSideBar={togleSidebar}
        handleChangeEvent={(e) => {
          const name = e.target.value.toLowerCase();
          upDateActiveLayers(name);
        }}
        openSidebar={openSidebar}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "55px",
          left: "55px",
          zIndex: "55",
          maxWidth: "80px",
        }}
      >
        <Stack direction="column" alignItems={"flex-start"}>
          <OpacitySlider
            onChangeHandler={(e) => {
             map.getLayers().getArray().forEach((layer,index)=>{
               if(index!==0){
                 layer.setOpacity(e.target.value / 100)
               }
             })
            }}
          />
          <MapBaseSelect
            handleClick={(e) => {
              setSelectetBaseMap(e.target.value);
            }}
            removeBaseMapHandler={() => {
              setSelectetBaseMap("");
              map
                .getLayers()
                .getArray()
                .forEach((layer) => {
                  if (
                    layer.sourceChangeKey_.target instanceof OSM ||
                    layer.sourceChangeKey_.target instanceof BingMaps
                  ) {
                    map.removeLayer(layer);
                  }
                });
            }}
          />
        </Stack>
      </Box>
      <div ref={mapRef} className="map map-container"></div>
    </>
  );
};

import { SpeedDial, SpeedDialAction, Tooltip, Stack } from "@mui/material";
import MapIcon from "@mui/icons-material/Map";
import { useState } from "react";
import bingDark from "../../assets/bingDark.png";
import CloseIcon from "@mui/icons-material/Close";

type MapBaseSelect_Type = {
  handleClick: () => void;
  removeBaseMapHandler: () => void;
};

export default function MapBaseSelect({
  handleClick,
  removeBaseMapHandler,
}: MapBaseSelect_Type) {
  const [styles, setStyles] = useState<object[]>([
    { className: "bingDark", title: "Bing Dark", value: "CanvasDark" },
    { className: "bingLight", title: "Bing Light", value: "RoadOnDemand" },
    { className: "bingSatelite", title: "Bing Satelite", value: "Aerial" },
  ]);
  return (
    <Tooltip title="Izaberite pozadinsku mapu" placement="top">
      <SpeedDial
        direction={"right"}
        icon={<MapIcon sx={{ fill: "white" }} />}
        sx={{ position:'static'}}
        ariaLabel="Select Map"
      >
        <SpeedDialAction
          onClick={removeBaseMapHandler}
          sx={{ alignSelf: "center" }}
          icon={<CloseIcon sx={{ fill: "red" }} />}
          key={Math.random()}
        ></SpeedDialAction>

        {styles.map((style) => {
          return (
            <SpeedDialAction
              key={style.value}
              value={style.value}
              onClick={handleClick}
              className={`${style.className}`}
              sx={{ width: "100px", height: "80px", borderRadius: "5px" }}
            />
          );
        })}
      </SpeedDial>
    </Tooltip>
  );
}

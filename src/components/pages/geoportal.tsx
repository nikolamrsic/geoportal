import { ReactElement, useState } from "react";
import { MapComponent } from "../geoportal_page_components/Map";
import SideBar from "../geoportal_page_components/SideBar";
import TopBar from "../geoportal_page_components/TopBar";
import MapContextProvider from "../geoportal_page_components/MapContext";

export const Geoportal = (): ReactElement => {
    const [openSideBar, setOpenSideBar] = useState<boolean>(false);
    const handleSidebar = () => setOpenSideBar(!openSideBar);

    return (
        <MapContextProvider>
            <div style={{ position: "relative", width: "100%" }}>
                <TopBar handleSideBar={handleSidebar} />
                <div>
                    <MapComponent togleSidebar={handleSidebar} openSidebar={openSideBar} />
                </div>
            </div>
        </MapContextProvider>
    );
};

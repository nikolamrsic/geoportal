import * as React from "react";
import {
  Drawer,
  IconButton,
  Box,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import logo from "../../assets/logo.svg";
import CheckboxLabels from "./ChekBox";
import { useState } from "react";

type SideBar_Type = {
  openSidebar: boolean;
  toogleSideBar?: () => void;
  handleChangeEvent: () => void;
};

export default function SideBar({
  openSidebar,
  toogleSideBar,
  handleChangeEvent,
}: SideBar_Type) {
  const [aneks, setAneks] = useState<object>({
    aneks_1: [
      { title: "Drzava", checked: false },
      { title: "Jezera", checked: false },
      { title: "Okruzi", checked: false },
      { title: "Opstina", checked: false },
      { title: "Parcele", checked: false },
      { title: "Pokrajina", checked: false },
      { title: "Pruga", checked: false },
      { title: "Put", checked: false },
      { title: "Reke", checked: false },
    ],
    aneks_2: ["Visine", "Pokretivost tla", "Orto-snimci", "Geologija"],
    aneks_3: ["Busotine", "Hidroelektrane", "Termoelektrane", "Zgrade"],
  });
  return (
    <React.Fragment>
      <Drawer
        sx={{ position: "relative" }}
        onClose={toogleSideBar}
        variant="temporary"
        open={openSidebar}
        anchor="right"
      >
        <Box sx={{ minWidth: "250px", padding: "5px 15px" }}>
          <Box sx={{ mb: "25px", position: "sticky", top: 0 }}>
            <Stack direction="row" justifyContent="space-between">
              <img
                style={{ minWidth: "100px" }}
                src={logo}
                alt="Logo Icon"
              ></img>
              <IconButton onClick={toogleSideBar}>
                <CloseIcon />
              </IconButton>
            </Stack>
          </Box>
          <Typography variant="overline">Inspire Direktive</Typography>
          <Divider />
          <Stack>
            <Accordion sx={{ boxShadow: "none" }} square>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="button">Aneks I</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Stack direction="column">
                  {aneks.aneks_1!.map((item: object, index: number) => {
                    return (
                      <CheckboxLabels
                      
                        handleChangeEvent={(e: object) => {
                          setAneks((prev) => {
                            return {
                              ...prev,
                              aneks_1: prev.aneks_1.map(
                                (_item: object, _index: number) => {
                                  if (_index == index) {
                                    _item.checked = !_item.checked;
                                  }
                                  return _item;
                                }
                              ),
                            };
                          });
                          handleChangeEvent(e);
                        }}
                        checked={item.checked}
                        value={item.title}
                        label={item.title}
                        key={index + Math.random()}
                      />
                    );
                  })}
                </Stack>
              </AccordionDetails>
            </Accordion>
          </Stack>
        </Box>
      </Drawer>
    </React.Fragment>
  );
}

import * as React from 'react';
import { Box, Slider } from '@mui/material';

type OpacitySlider_Type={
    onChangeHandler:()=>void
}
export default function OpacitySlider({onChangeHandler}:OpacitySlider_Type) {
    function preventHorizontalKeyboardNavigation(event: React.KeyboardEvent) {
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            event.preventDefault();
        }
    }

    return (
        <Box sx={{ height: 300,padding:'0 0 0 10px',}}>
            <Slider onChange={onChangeHandler} sx={{
              
                '& input[type="range"]': {
                    WebkitAppearance: 'slider-vertical',
                },
            }}
                orientation="vertical"
                defaultValue={30}
                aria-label="Temperature"
                valueLabelDisplay="auto" />
        </Box>
    );
}

import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

type CheckboxLabels = {
    label: string,
    value: string,
    checked: boolean,
    handleChangeEvent: () => void
}

export default function CheckboxLabels({ label, value, handleChangeEvent, checked }: CheckboxLabels) {
    return (
        <FormGroup>
            <FormControlLabel sx={{'&:hover':{
                background:'rgba(122,158,159,0.2)',
                transition:'0.1s ease'
            }}} checked={checked} value={value} control={<Checkbox />} onChange={handleChangeEvent} label={label} />
        </FormGroup>
    );
}
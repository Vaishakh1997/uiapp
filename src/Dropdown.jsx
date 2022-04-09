import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import user from './user.png';
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;


export default function CheckboxesTags() {
    
  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={dropdownName}
      disableCloseOnSelect
      getOptionLabel={(option) => option.title}
      renderOption={(props, option, { selected }) => (
        <li {...props} style={{display:'flex', justifyContent:'space-between'}}>
        <div style={{display:'flex', flexDirection:'row'}}>
        <img src={option.profile} width={30} style={{marginRight:'12px'}} alt="" />
        <div>{option.title}</div>
        </div>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8, position:'relative', right:0 }}
            checked={selected}
          />
        </li>
      )}
      style={{ width: 500 }}
      renderInput={(params) => (
        <TextField {...params} label="Select Employee" placeholder="" />
      )}
    />
  );
}

const dropdownName = [
  { title: 'Vaishakh Devadiga', profile:require('./user.png') },
  { title: 'Mahesh', profile:require('./user.png') },
  { title: 'Kaushik', profile:require('./user.png') },
  { title: 'Sundar', profile:require('./user.png') },
  { title: 'Kiran Gatty', profile:require('./user.png') },
];

import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function CheckboxesTags() {
    const [selectedFilm, setSelectedFilm] = useState([]);
    return (
        <Autocomplete
            multiple
            id="checkboxes-tags-demo"
            options={dropdownName}
            disableCloseOnSelect
            onChange={(e, film) => {
                setSelectedFilm(film);
            }}
            getOptionLabel={option => option.title}
            renderOption={(option, state) => {
                const selectFilmIndex = selectedFilm.findIndex(
                    film => film.title.toLowerCase() === "all employees"
                );
                if (selectFilmIndex > -1) {
                    state.selected = true;
                }
                return (
                    <React.Fragment>
                        <li style={{ display: 'flex', justifyContent: 'space-between', width:'100%' }}>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems:'center' }}>
                                <img src={option.profile} width={40} style={{ marginRight: '12px' }} alt="" />
                                <div>{option.title}</div>
                            </div>
                            <Checkbox
                                icon={icon}
                                checkedIcon={checkedIcon}
                                style={{ marginRight: 8 }}
                                checked={state.selected}
                            />
                        </li>
                    </React.Fragment>
                );
            }}
            style={{ width: 500 }}
            renderInput={params => (
                <TextField
                    {...params}
                    variant="outlined"
                    label="Select Employee"
                    placeholder="Select"
                />
            )}
        />
    );
}

const dropdownName = [
    { title: "All Employees", profile: 0 },
    { title: 'Vaishakh Devadiga', profile: require('./user.png') },
    { title: 'Mahesh', profile: require('./user.png') },
    { title: 'Kaushik', profile: require('./user.png') },
    { title: 'Sundar', profile: require('./user.png') },
    { title: 'Kiran Gatty', profile: require('./user.png') },
];

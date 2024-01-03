import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';

function Muiform() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    skills: [],
  });
  const [skill, setSkill] = useState({
    html: false,
    css: false,
    js: false,
  });
  const handleSkillChange = (event) => {
    setSkill({ ...skill, [event.target.name]: event.target.checked });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    formData.skills = skill;
    setFormData(formData);
    console.log(formData);
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <TextField
          label="enter your name"
          variant="standard"
          name="name"
          onChange={handleChange}
        />
        <TextField
          label="enter your age"
          variant="standard"
          name="age"
          type="number"
          onChange={handleChange}
        />
        <div>
          <FormControlLabel
            control={
              <Checkbox
                checked={skill.html}
                onChange={handleSkillChange}
                name="html"
              />
            }
            label="HTML"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={skill.css}
                onChange={handleSkillChange}
                name="css"
              />
            }
            label="CSS"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={skill.js}
                onChange={handleSkillChange}
                name="js"
              />
            }
            label="JavaScript"
          />
        </div>
        <RadioGroup name="gender">
          <FormControlLabel
            control={<Radio />}
            label="male"
            value="male"
            onChange={handleChange}
          />
          <FormControlLabel
            control={<Radio />}
            label="female"
            value="female"
            onChange={handleChange}
          />
        </RadioGroup>
        <Button type="submit">submit</Button>
      </form>
    </Box>
  );
}

export default Muiform;

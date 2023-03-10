import {
    Box,
  } from "@mui/material";
import FormArea from "../../Components/FormArea";
import Header from "../../Components/Header";
import { createArea } from "../../feutures/apiPetitions";
  
  
  const initialValues = {
    image: "",
    area: "",
    description: "",
  };
  
  const CreateArea = () => {
   
    return (
      <Box m="20px">
        <Header title="CREATE AREA" subtitle="Create a New Area" />
  
        <FormArea apiPetition={createArea}   initialValues={initialValues} text={'Create a New Area'}
         />
      </Box>
    );
  };
  
  export default CreateArea;
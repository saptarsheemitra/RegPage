import React from "react";
import BasicTextInput from "./BasicITextInput";
import RadioInputs from "./RadioInputs";

const FormOne = () => {
  return (
    <div>
      <BasicTextInput name="FirstName" label="Basic Details" />
      <BasicTextInput name="LastName" />
      <BasicTextInput name="Mobile Number" label="Mobile Number" />
      <RadioInputs
        question="Pronoun"
        radioList={["He/Him", "She/Her", "They/Them", "jkafhsjak"]}
      />
    </div>
  );
};

export default FormOne;
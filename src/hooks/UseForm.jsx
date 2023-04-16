import { useState } from "react";

const UseForm = (initForm) => {
  const [form, setForm] = useState(initForm);
  // creacion de un evento... que nos devuelva target
  // target = formulario
  const handlerChangeForm = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };
  const handlerResetForm = () => {
    setForm(initForm);
  };
  return [form, handlerChangeForm, handlerResetForm];
};

export default UseForm;

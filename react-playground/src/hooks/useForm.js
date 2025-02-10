import React, { useState, useEffect } from 'react'

const useForm = (initState={}) => {
  const [formData, setFormData] = useState(initState);

  const onChangeValue = ({target}) => {
    const { name, value } = target;
    setFormData((prev) => ({...prev, [name]: value}));
  };

  const resetForm = () => {
    setFormData(initState);
  }

  return { formData, onChangeValue, resetForm, ...formData };
}

export default useForm;
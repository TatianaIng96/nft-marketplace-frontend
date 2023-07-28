import { useState } from 'react';

const useForm = (initialValue = {}) => {
  const [object, setObject] = useState(initialValue);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setObject({
      ...object,
      [name]: value,
    });
  };

  return {
    object,
    handleChange,
  };
};

export default useForm;

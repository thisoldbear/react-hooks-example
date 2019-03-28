import React, { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../context";

const useWindowWith = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return width;
};

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange: handleChange
  };
};

const useDocumentTitle = title => {
  useEffect(() => {
    document.title = title;
  });
};

export default () => {
  const name = useFormInput("Mary");
  const surname = useFormInput("Poppins");
  const width = useWindowWith();
  const theme = useContext(ThemeContext);

  useDocumentTitle(`${name.value} ${surname.value}`);

  return (
    <div className={theme}>
      <div>
        <label>Name</label>
        <input {...name} />
      </div>
      <div>
        <label>Surname</label>
        <input {...surname} />
      </div>
      <div>
        <label>Width</label>
        <input value={width} />
      </div>
    </div>
  );
};

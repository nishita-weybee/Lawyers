import { useField } from "formik";
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const YearDropdown = () => {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(new Date(currentYear, 0, 1));
  const [years, setYears] = useState(generateYears(currentYear));
  const [field, , helpers] = useField("year"); // Get the formik field props

  useEffect(() => {
    setYears(generateYears(selectedYear.getFullYear()));
  }, [selectedYear]);

  const handleChange = (year: any) => {
    setSelectedYear(new Date(year, 0, 1));
    helpers.setValue(year); // Update the formik field value
  };

  function generateYears(selectedYear: any) {
    const yearsToShow = 150;
    const startYear = selectedYear - Math.floor(yearsToShow / 2);
    const endYear = startYear + yearsToShow - 1;
    return Array.from({ length: yearsToShow }, (_, index) => startYear + index);
  }

  const selectStyles = {
    width: "100%",
    padding: "0",
    fontSize: "1rem",
    lineHeight: "1.5",
    color: "#495057",
    backgroundColor: "#fff",
    border: "none",
    borderRadius: "0.25rem",
  };

  const yearDropdownStyles: React.CSSProperties = {
    display: "inline-block",
    position: "relative",
    width: "100%",
    maxWidth: "100%",
  };

  return (
    <DatePicker
      selected={selectedYear}
      onChange={handleChange}
      dateFormat="yyyy"
      showYearPicker
      scrollableYearDropdown
      yearDropdownItemNumber={10}
      dropdownMode="select"
      placeholderText="Select a year"
      className="form-control bg-transparent form-select"
      customInput={
        <div style={yearDropdownStyles}>
          <select
            className="react-datepicker__year-select"
            value={selectedYear.getFullYear()}
            onChange={(e) => handleChange(parseInt(e.target.value))}
            style={selectStyles}
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      }
    />
  );
};

export default YearDropdown;

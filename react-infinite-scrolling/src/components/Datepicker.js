import React, { useState, useEffect, useRef } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css"; // Import the Flatpickr styles

function DatePicker() {
  const datePickerRef = useRef(null);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    // Initialize Flatpickr when the component mounts
    const flatpickrInstance = flatpickr(datePickerRef.current, {
      allowInput: true,
      enableTime: true,
      dateFormat: "d-m-Y",
      defaultDate: selectedDate,
      onChange: (selectedDates, dateString) => {
        setSelectedDate(selectedDates[0]);
      },
    });

    // Clean up Flatpickr instance when the component unmounts
    return () => {
      flatpickrInstance.destroy();
    };
  }, []);

  return (
    <div>
      <input ref={datePickerRef} type="text" />
    </div>
  );
}

export default DatePicker;

import React from "react";

const DisplayDate = () => {
  return (
    <p className="mb-2 dark:text-dark-secondary text-light-secondary text-sm">
      From {Intl.DateTimeFormat().format(new Date())} - To{" "}
      {Intl.DateTimeFormat().format(new Date())}
    </p>
  );
};

export default DisplayDate;

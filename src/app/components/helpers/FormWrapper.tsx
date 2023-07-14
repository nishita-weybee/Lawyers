import clsx from "clsx";
import React, { ReactNode } from "react";

interface FormWrapperProps {
  stepperTitle: string;
  children: ReactNode;
}

const FormWrapper: React.FC<FormWrapperProps> = ({
  stepperTitle,
  children,
}) => {
  return (
    <div
      className={clsx({ current: stepperTitle === "Step 1" })}
      data-kt-stepper-element="content"
      style={{ display: "block" }}
    >
      {children}
    </div>
  );
};

export default FormWrapper;

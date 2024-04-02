import { InputHTMLAttributes, FC } from "react";


  type FromInputProps = { label: string } &
    InputHTMLAttributes<HTMLInputElement>;

  const FormInput: FC<FromInputProps> = ({ label, ...otherProps }) => {
    return (
      <div className="group">
        {
          label &&
          <div >
            {label}
          </div>
        }
        <input {...otherProps} />
        
      </div>
    );
  }

  export default FormInput;
  
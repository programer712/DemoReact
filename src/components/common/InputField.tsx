import { TextField, TextFieldProps } from "@mui/material";

const InputField = ({
  value,
  onChange,
  placeholder,
  type,
  ...rest
}: TextFieldProps) => {
  return (
    <TextField
      fullWidth
      sx={{
        "& .MuiOutlinedInput-root": {
          px: 3,
          "& > fieldset": {
            borderColor: "surface.dark",
            borderRadius: "25px",
          },
        },
      }}
      autoFocus
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default InputField;

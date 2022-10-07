import {
  Button as BaseButton,
  ButtonProps as BaseButtonProps,
} from "@mui/material";

type ButtonProps = DefaultButtonProps &
  Omit<BaseButtonProps, keyof DefaultButtonProps>;

export interface DefaultButtonProps {
  readonly fullWidth?: boolean;
  readonly fullHeight?: boolean;
  readonly disableTransparency?: boolean;
  readonly component?: string;
  readonly densePadding?: boolean;
}

const Button = (props: ButtonProps) => {
  return (
    <BaseButton
      variant="contained"
      disableFocusRipple
      disableElevation
      sx={{
        width: "136px",
        height: "53px",
        bgcolor: "primary.main",
        borderRadius: "50px",
        opacity: props.disabled ? "0.5" : "1",
        "&.Mui-disabled": {
          bgcolor: "primary.main",
          color: "white",
        },
      }}
      {...props}
    >
      {props.children}
    </BaseButton>
  );
};

export default Button;

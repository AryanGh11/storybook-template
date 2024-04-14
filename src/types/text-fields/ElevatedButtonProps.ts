import { FormFieldProps } from ".";

export interface ElevatedButtonProps extends FormFieldProps {
  text: string;
  onClick: () => Promise<void> | void;
}

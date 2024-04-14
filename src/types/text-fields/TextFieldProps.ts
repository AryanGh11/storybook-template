import { FormFieldProps } from ".";

export interface TextFieldProps extends FormFieldProps {
  placeholder: string;
  value: string | null;
  onInputChange: (value: string | null) => void;
  onDisabledChange: (disabled: boolean) => void;
}

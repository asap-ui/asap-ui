export type InputProps = {
  modelValue?: string;
  // modelModifiers?: {
  //   type?: 'text' | 'textarea' | 'password' | 'email' | 'url' | 'tel';
  // }
  placeholder?: string;
  type?: 'text' | 'password' | 'number' | 'tel' | 'email';
  textarea?: boolean;
  readonly?: boolean;
  resize?: boolean;
  autofocus?: boolean;
  rules?: any;
  rows?: [string, number];
  maxlength?: [string, number];
};

export const defaultProps = {};

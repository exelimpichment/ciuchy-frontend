export interface IInitialValues {
  name: string;
  email: string;
  password: string;
}

export type handleRadio = ({
  name,
  value,
}: {
  name: string;
  value: string;
}) => void;

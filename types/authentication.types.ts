export interface IInitialValues {
  name: string;
  email: string;
  password: string;
}

export type HandleRadio = ({
  name,
  value,
}: {
  name: string;
  value: string;
}) => void;

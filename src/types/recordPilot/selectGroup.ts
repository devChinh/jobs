export type TOptionsGroup = {
  id: number;
  value: string;
  label: string;
}[];

export type TOptionsUAV = {
  id: number;
  value: string;
  label: string;
}[];

export type optionSelected =
  | {
      id: number;
      value: string;
      label: string;
    }
  | undefined;

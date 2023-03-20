export type TOptionGroup = {
  id: number;
  value: string;
  label: string;
};

export type TOptionUAV = {
  id: number;
  value: string;
  label: string;
};

export type TOptionSelected =
  | {
      id: number;
      value: string;
      label: string;
    }
  | undefined;

export interface StateRecordPilotType {
  groups: {
    id: number;
    value: string;
    label: string;
  }[];
  uavs: {
    id: number;
    value: string;
    label: string;
  }[];
  selectedGroupId: number | null;
  selectedUavId: number | null;
}

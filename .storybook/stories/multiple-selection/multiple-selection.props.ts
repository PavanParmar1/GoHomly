export interface MultipleSelectionProps {
  selectedOption?: Array<String> | string;
  options?: {
    id: any;
    option: string;
    isSelected: boolean;
  }[];
}

export type DropDownItems = {
  title?: string;
  placeholder: string;
  menuItems: {label: string; value: string}[];
  multiple?: boolean;
};

export type DropDownProps = {
  dropDownItems: DropDownItems;
  inverse?: boolean;
  handleSelect: Function;
};

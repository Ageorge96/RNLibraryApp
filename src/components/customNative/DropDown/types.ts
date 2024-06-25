export type DropDownItems = {
  placeholder: string;
  menuItems: {label: string; value: string}[];
};

export type DropDownProps = {
  dropDownItems: DropDownItems;
  inverse?: boolean;
  handleSelect: Function;
};

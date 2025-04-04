import {styles} from '@src/feature/AddBookForm/styles';
import {DropDown} from './DropDown';
import {Controller, ControllerProps} from 'react-hook-form';
import {DropDownItems, DropDownProps} from './types';
import {View} from 'react-native';

type DropDownControllerProps = Omit<ControllerProps, 'render'> &
  Omit<DropDownProps, 'handleSelect'> & {inverse: boolean};

export const DropDownController = ({
  dropDownItems,
  inverse,
  ...props
}: DropDownControllerProps) => {
  const {required} = dropDownItems;

  return (
    <Controller
      {...props}
      rules={{required: required}}
      render={({field: {onChange}}) => (
        <DropDown
          dropDownItems={dropDownItems}
          handleSelect={onChange}
          inverse={inverse}
        />
      )}
    />
  );
};

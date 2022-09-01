import React from "react";
import {UseButton} from './useButtonstyle'

export type ButtonProps  = {
    children?: React.ReactNode;
    //onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    color?: 'primary' | 'secondary'
    type?: "link" | 'primary'

}

const BaseButton: React.FC<ButtonProps> = ({ 
    children,
    //onClick,
    color, 
    type 


  }) => { 
    

  return (
    <UseButton 
        //onClick={onClick}
        //color={color}
        type={type}


    >
    {children}
    </UseButton>
  );
}

export default BaseButton;
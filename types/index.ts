import { MouseEventHandler } from "react";

export interface CustoButtonProps{
    title:string ;  containerStyles?:string ; handleClick:MouseEventHandler<HTMLButtonElement>;btnType?:"button" | "submit";
}
export interface SetmanufacturerProps{
    manufacturer:string ; setManufacturer:(manufacturer:string)=>void;
}
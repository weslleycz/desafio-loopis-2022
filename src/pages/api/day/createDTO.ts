import {  IsNotEmpty,isDate, IsDate } from "class-validator";

export class createDTO {

    @IsNotEmpty()
    @IsDate()
    data!: Date;
}


import { IsNotEmpty, IsString } from "class-validator";

export class createDTO {
    @IsString()
    @IsNotEmpty()
    name!: string;

    @IsString()
    @IsNotEmpty()
    description!: string;

    @IsString()
    @IsNotEmpty()
    hour!: string;

    @IsString()
    @IsNotEmpty()
    dayID!: string;
}

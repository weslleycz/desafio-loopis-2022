import { IsDate, IsNotEmpty } from "class-validator";

export class createDTO {
    @IsNotEmpty()
    @IsDate()
    data!: Date;
}

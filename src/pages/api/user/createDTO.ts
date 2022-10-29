import { IsEmail, IsNotEmpty,MinLength } from "class-validator";

export class createDTO {
  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @IsNotEmpty()
  @MinLength(9)
  password!: string;
}

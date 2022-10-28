import { IsEmail, IsNotEmpty,MinLength } from "class-validator";

export class createDTO {
  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @IsNotEmpty()
  @MinLength(14)
  password!: string;
}

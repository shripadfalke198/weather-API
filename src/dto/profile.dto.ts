import { IsNotEmpty, IsString } from "class-validator/types/decorator/decorators";
import { Role } from "src/auth/interface/user.interface";

export class ProfileDto{
    @IsNotEmpty()
    @IsString()
    readonly id:string;

    @IsNotEmpty()
    @IsString()
    readonly password :string;

    @IsNotEmpty()
    @IsString()
    readonly userName :string;

    @IsNotEmpty()
    @IsString()
    readonly role :Role;
}
import { IsString,IsBoolean,IsOptional } from "class-validator";

export class UpdatesTaskDto {
    @IsString()
    @IsOptional()
    title?:string;

    @IsString()
    @IsOptional()
    description?:string;

    @IsBoolean()
    @IsOptional()
    done?:boolean;
}
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import {Length,IsNotEmpty,IsInt, Min, Max, IsEmail} from 'class-validator'

@Entity()
export default class User  {
    @PrimaryGeneratedColumn()
    id:string;
    
    @Column({ unique: true })
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @Column()
    @Length(3,20)
    password:string;

    @Column()
    @Length(3,20)
    name:string;
    
    @Column("int")
    @IsInt()
    @Min(10)
    @Max(100)
    age:number;
}
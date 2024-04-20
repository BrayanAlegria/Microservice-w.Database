import { Column, PrimaryGeneratedColumn, Entity } from "typeorm";

@Entity('user')
export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar", length: 200, nullable: false})
    name: string;

    @Column({type: "varchar", length: 200, nullable: false})
    email: string;

    @Column({type: "varchar", length: 200, nullable: false})
    password: string;
}



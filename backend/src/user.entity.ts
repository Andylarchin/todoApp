// import { 
//     Column,
//     CreateDateColumn,
//     Entity,
//     PrimaryGeneratedColumn,
// } from 'typeorm';

// @Entity()
// export class User {
//     @PrimaryGeneratedColumn("uuid")
//     id!: number;

//     @Column()
//     name!: string;

//     @Column({unique: true})
//     email!: string;

//     @Column() 
//     password!: string;

//     @CreateDateColumn()
//     createdAt: Date;
// }
/* eslint-disable */

import { CiudadEntity } from 'src/ciudad/ciudad.entity/ciudad.entity';
import { TipodocumentoEntity } from 'src/tipodocumento/tipodocumento.entity/tipodocumento.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PersonaEntity {

    @PrimaryGeneratedColumn()
 id: string;

 @Column()
 nombres: string;
 
 @Column()
 apellidos: string;
 
 @Column()
 documento: string;
 
 @Column()
 fecha_nacimiento: Date;

 @Column()
 email: string;

 @Column()
 telefono: number;

 @Column()
 usuario: string;

 @Column()
 password: string;

 @ManyToOne(() => TipodocumentoEntity)
 id_tipo_documento: TipodocumentoEntity;

 @ManyToOne(() => CiudadEntity)
 lugar_residencia: CiudadEntity;

}

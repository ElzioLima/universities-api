import { 
  Entity, 
  ObjectIdColumn, 
  Column, 
  DeleteDateColumn, 
  CreateDateColumn, 
  UpdateDateColumn 
} from 'typeorm'

@Entity({ name: 'universities' })
export class ORMUniversity {
  @ObjectIdColumn({ name: "_id" })
  id!: number

  @Column({ name: "name" })
  name!: string

  @Column({ name: "state-province", nullable: true })
  stateProvince?: string

  @Column({ name: "domains" })
  domains!: string[]

  @Column({ name: "country" })
  country!: string

  @Column({ name: "web_pages" })
  webPages!: string[]

  @Column({ name: "alpha_two_code" })
  alphaTwoCode!: string

  @CreateDateColumn({ name: "name" })
  createdAt!: Date

  @UpdateDateColumn({ name: "name" })
  updatedAt!: Date

  @DeleteDateColumn({ name: "name" })
  deletedAt?: Date
}

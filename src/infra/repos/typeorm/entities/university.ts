import { 
  Entity, 
  ObjectIdColumn, 
  Column, 
  DeleteDateColumn, 
  CreateDateColumn, 
  UpdateDateColumn, 
  Index
} from 'typeorm'

@Entity({ name: 'universities' })
@Index("UNIQUE_KEY_INDEX", ["country", "stateProvince", "name"])
export class ORMUniversity {
  @Column({ name: "country" })
  country!: string

  @Column({ name: "state-province", nullable: true })
  stateProvince?: string

  @Column({ name: "name" })
  name!: string

  @ObjectIdColumn({ name: "_id" })
  id!: number

  @Column({ name: "domains" })
  domains!: string[]

  @Column({ name: "web_pages" })
  webPages!: string[]

  @Column({ name: "alpha_two_code" })
  alphaTwoCode!: string

  @CreateDateColumn({ name: "created_at", default: Date.now() })
  createdAt!: Date

  @UpdateDateColumn({ name: "updated_at", default: Date.now() })
  updatedAt!: Date

  @DeleteDateColumn({ name: "deleted_at", default: null })
  deletedAt?: Date
}

module.exports = [
  {
    type: process.env.DATABASE_TYPE,
    url: process.env.DATABASE_URL,
    logging: process.env.NODE_ENV === 'development',
    useNewUrlParser: true,
    useUnifiedTopology: true,
    entities: [
      `${process.env.TS_NODE_DEV === undefined ? 'dist' : 'src'}/infra/repos/typeorm/entities/index.{js,ts}`
    ]
  }
]

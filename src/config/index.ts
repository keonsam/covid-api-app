
type NodeEnv = 'production' | 'development' | 'test';
type Config = {
  connectionString: string,
  nodeEnv: NodeEnv,
}


const config: Config = {
  connectionString: process.env.PG_CONNECTION_STRING || '',
  nodeEnv: getNodeEnv(),
}

function getNodeEnv(): NodeEnv {
  switch(process.env.NODE_ENV) {
    case 'production':
      return 'production'
    case 'test':
      return 'test';
    default:
      return 'development'
  }
}

export default config;
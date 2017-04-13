import path from 'path';

const config = {
  root:     path.normalize(__dirname + '/')
  rootPath: process.env.ROOT_PATH,
  app:      {
    name: 'Games'
  },
  port:     process.env.PORT || 3000,
};

export default config;

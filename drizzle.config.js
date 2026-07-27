import 'dotenv/config';

export default {
  schema: './src/models/*.js',
  output: './drizzle',
  dialect: 'postgresql',
  databaseCredentials: {
    // eslint-disable-next-line no-undef
    url: process.env.DATABASE_URL,
  },
};

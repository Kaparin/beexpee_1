// keystone.js
import { config, createSchema } from '@keystone-next/keystone/schema';

export default config({
  db: {
    adapter: 'mongoose',
    url: 'mongodb://localhost/my-keystone-app',
  },
  lists: createSchema({
    // Ваши списки будут здесь
  }),
  ui: {
    // Включить административный интерфейс Keystone только для некоторых пользователей
    isAccessAllowed: ({ session }) => !!session?.data,
  },
});

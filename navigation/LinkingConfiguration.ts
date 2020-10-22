import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Inicio: {
            screens: {
              Inicio: 'Inicio'
            }
          },
          Detalle: {
            screens: {
              Detalle: 'Detalle'
            }
          },
          Episodio: {
            screens: {
              Episodio: 'Episodio',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};

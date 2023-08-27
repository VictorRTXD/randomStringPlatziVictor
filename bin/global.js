#!/usr/bin/env node

//#!/usr/bin/env node es una instrucción que sirve para indicar que este archivo se ejecutará con Nodejs. Después realizamos la importación de nuestro archivo index.js. Finalmente, ejecutamos la función de mensajes aleatorios funnyCommit.

let random = require('../src/index.js');

random.funnyCommit();

const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA61UXY+iSBT9K5t61YyAIGLSyZaAiN+KiLjZhxIKrG6+rCpAnfR/36DdO53MbG9vsjyQoqq495xzz73fQZYThqf4CgbfQUFJhThulvxaYDAAwzKKMAVtECKOwACcDbO71cZ2f5YelDpjm+hynXKLq5fk+Tgtu8iZUt+3d/7+5Qm8tkFRHhMSfBKQhtLzzM7MOQuNWuWyaZnd3Orks6smqM9SvKmOO5rPhkupCdhERISSLDaLE04xRckUX1eI0K/Bv47rlwlxyLkrR0d3xTulQebj54U6tM57X4iXU7TTFrdgm7GvwTdajmI/X6pF4ui9C4zyaTa/VKW6n1YhLuf723GRxogwnJoP+IzEGQ7tEGec8OuXdU9XkyIfQ1VSqlug5mWWMnXrafFOWZhpy59mGzOzdvNUtPKvAYf6IkKqK8mF41XL2s2UndMS97VgS0uXG9SCl3p9GC3yjfAR+Iq+e+Xlv+juWkd9o7U2JjqFo73D5aCvlhdhtBMYgg7ztHG0Xfcz1NvBr8Ffd/vu1MX+0cP2fDk1tG2LaPX4JCw7u461rsWzJbmzPt8L7Ad8xEv6GcrVaGZMq7NIJz4b9QtxZt32c9GzfYOkOp/I+v7IhyQKWiumJWJSBodEvkovSoilCi9nbETc5Xgk1avJ5kJDu1459XVYP90ZveCrHYKB+NoGFMeEcYo4ybP7nqC2AQorBwcU87u8oNIm6Uu2IHJh92KvOGm3sjX3wtSb5lCHkYXRxi9K34079RNog4LmAWYMh2PCeE6vc8wYijEDgz/ulWpIU5zmHE9ICAZA6nYVWZMUTdP6v7Nv9QlxhoriW4Y5aIOI5ukcgwGnJW6D+w+aMuyZqqkIykgwe6okKdCE2kjoQkXtqiZsKKaPpFuSYsZRWoCBqMqq0pNFqf/a/n9wyPJINzTNHMKRIsKuBqE21E1FUA1J6o9U43McsvD6Zxtk+MIfPm7U74ptEBHKuJuVRZKj8N3k74coCPIy4841C/RmgSkYfNjGnJMsZg2zMkM0OJEK6w0PMIhQwvDfBccUh+9c3oaYnoeNDx3Vnnsu9ECDvQn0kzYDVftZnuRxTZFEWVCU5tUT5eZmc9AGGWqCgS0OfmvsQBpp3kA3OULMEUkYGAB9WnVK1B+Z8xsrmGlZ0I2hHkPwg+R78zzMuakDnSCf9QQnPSSFcjtcyO4Iw3V/Vx8WwWauLo50qRpM9J9+EaQBrZW9E/TGpzIShh7dnmee5DkKjIYHNA5uR8QvdZ6f4el5pTyjuHqJh3vP45cbW3Fzcra7riJ3rMSqTjEz1r4zrIkH109NthBXJMAfkxWqr+aHbNkPZZzOhCGvCdtYi/PhMFZncobSU6rK19tO76odbYvKYW20Wke7lo1Lv4g6MwwnzEdj2xvdsskuvF23sa6/tfV9rCRv45y8NRy5f0YE36fjWx3+tZwP4I3rhNf2hxhv8/YfZtbQDcYwT9PZkptFekA4kAI/8eqxuxoF1nZvbpc3r3cra3XhgdfG/kWCeJTTFAwAykKa381C87KxsZ1F+SfJdOjaxvrBPEGMwx+t8YtuE9XHrRXNizFip0YES4Zp2fj8CovC4Yi/dxqAzWO/bMDrX/bTyI6UCAAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "HANS-XMD",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " 233549259998",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'HANS-XMD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/mn835l.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'off',
    AUTOREACT_STATUS : process.env.AUTOREACT_STATUS || 'on',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

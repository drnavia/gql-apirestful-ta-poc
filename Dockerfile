# Imagen base
FROM node:8

# Crear la carpeta 'app' y establer la carpeta de trabajo
RUN mkdir -p /app
RUN mkdir -p /app/app
RUN mkdir -p /app/data
WORKDIR /app

# Agregar '/app/node_modules/.bin' al $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Para que la prueba de NPM se ejecute solo una vez de forma no interactiva
ENV CI=true

# Instalar y almacenar dependencias de la caché
RUN pwd
COPY package.json /app
RUN npm install --silent

# Fuente del paquete de la App
ADD ./app /app/app
ADD ./data /app/data

EXPOSE 3001

# start app --> defined in package.json
#CMD [ "npm", "start", "start:prod" ]
CMD npm start

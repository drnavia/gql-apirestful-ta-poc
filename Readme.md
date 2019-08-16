<img src="http://drnavia.com/logos/POC-GraphQL-2019.png"></img>

## API RESTful (MongoDB) - [Dockerizada]
![Branch stable](https://img.shields.io/badge/branch-master-blue.svg)
![version](https://img.shields.io/badge/node-v8.x-6BBE50.svg)
![version](https://img.shields.io/badge/express-v4.x-D7D7D7.svg)
![version](https://img.shields.io/badge/mongodb-v4.x-499D4A.svg)
![version](https://img.shields.io/badge/docker%20compose-build-309CEC.svg)<br>
Despliegue la API RESTful (CRUD) desarrollada con Node y Express (conecta a la base de datos MongoDB, utilizando Mongoose como ORM). La API permite gestionar un **listado de Países con Estados y Localidades**.<br>

## Pre-requisitos
Debes tener instalado:
+ Git
+ Docker
+ Docker Compose

## Despliegar la API
1. Clonar el repo:
```bash
git clone https://github.com/drnavia/poc-gql-apirestful.git
```
2. Construir la imagen del contenedor con Docker Compose:
```bash
docker-compose -f dc-gql-apirestful.yml build
```
3. Levantar el contenedor de la API:
```bash
docker-compose -f dc-gql-apirestful.yml up -d
```
4. Verificar que el contenedor se encuentre levantado:
```bash
docker-compose -f dc-gql-apirestful.yml ps
```
5. Ingresar a la siguiente URL para interactuar con la API:<br>
[http://localhost:3001](http://localhost:3001)

## Probar la API
Se puede utilizar **POSTMAN** para interactuar con la API.

### Crear un nuevo Pais aplicando el POST: **/paises**
**[POST]** http://localhost:3001/paises<br>
Body **(x)**   raw **(x)**   JSON **(application/json)**
```json
{
	"codpais": "ARG",
	"nombpais": "Argentina",
	"prefpais": 54,
	"continente": "AMERICA",
	"estados": [
		{
			"codestado": "CABA",
			"nombestado": "Ciudad de Buenos Aires",
			"localidades": [
				{
					"codlocalidad": "ALG",
					"nomblocalidad": "Almagro"
				},{
					"codlocalidad": "VCP",
					"nomblocalidad": "Villa Crespo"
				}
			]
		},{
			"codestado": "BSAS",
			"nombestado": "Buenos Aires",
			"localidades": [
				{
					"codlocalidad": "RMJ",
					"nomblocalidad": "Ramos Mejia"
				},{
					"codlocalidad": "MRN",
					"nomblocalidad": "Morón"
				}
			]
		}
	]
}
```
```json
{
	"codpais": "BRA",
	"nombpais": "Brasil",
	"prefpais": 55,
	"continente": "AMERICA",
	"estados": [
		{
			"codestado": "SNP",
			"nombestado": "San Pablo"
		},{
			"codestado": "RDJ",
			"nombestado": "Rio de Janeiro"

		}
	]
}
```

### Recuperar todos los Paises aplicando el GET: **/paises**
**[GET]** http://localhost:3001/paises


### Recuperar un solo Pais aplicando el GET: **/paises/:paisId**
**[GET]** http://localhost:3001/paises/5d1e3b5a17d8f5002a1eed29


### Actualizar un Pais aplicando el PUT: **/paises/:paisId**
**[PUT]** http://localhost:3001/paises/5d1e3b5a17d8f5002a1eed29


### Borrar un Pais aplicando DELETE: **/paises/:paisId**
**[DELETE]** http://localhost:3001/pais/5d1e3e1217d8f5002a1eed31

<br><br>
**[ DrN ]**
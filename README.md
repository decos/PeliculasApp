# PeliculasApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## CREAR CUENTA EN THEMOVIEDB.ORG

	Recursos:
		- https://www.themoviedb.org/account/signup
		- https://www.themoviedb.org/settings/api
		- https://www.themoviedb.org/talk/5a0e57cdc3a3686292006143
		- https://developers.themoviedb.org

1. Ingresar al formulario haciendo clic en el primer `recurso`

2. Esperar el correo de verificación y hacer clic en la primera URL

3. Ir al segundo `recurso` y solicitar la creacion de una nueva `API key`

4. Elegir una cuenta `developer`, aceptar los `Términos de Uso` 

~~~
Formulario:
	* Dirección 1: Lo más real posible (MAPS)
	* Código Postal: 051
	* Número de Teléfono: #Celular inventado
~~~

5. Revisar el correo y hacer clic en la URL para acceder a los datos de la nueva API creada

## JSONP - PETICIONES CROSS DOMAIN

	Recursos:
		- https://es.wikipedia.org/wiki/JSONP
		- https://www.themoviedb.org/settings/api
		- https://www.themoviedb.org/documentation/api/discover

~~~
En la técnica de JSONP, el objeto JSON se devuelve envuelto en la llamada de una función. 
De esta forma, una función ya definida en el entorno de JavaScript podría manipular los datos JSON 
~~~

1. Crear un nuevo proyecto:
	- ng new peliculasApp

2. Crear un servicio `peliculas`
	- ng g s services/peliculas --spec=false

3. Crear el componente `demo`
	- ng g c components/demo -is --spec=false

4. Importar los modulos (`HttpModule`, `JsonpModule`) en módulo principal

5. Importar la clase `Jsonp` al servicio creado y crear las funcion `getPopulares`

6. Importar el servicio `peliculas` en el módulo principal

7. Importar el servicio `peliculas` en el componente principal

## JSONP - ¿COMO USAR LOS SERVICIOS DE THEMOVIEDB?

	Rcursos:
		- https://www.themoviedb.org/documentation/api/discover
		- Poster path: http://image.tmdb.org/t/p/w300/iYDhZ0L6yy6lDpqgLUU5Dwv3WM1.jpg
		- Poster path: http://image.tmdb.org/t/p/w500/iYDhZ0L6yy6lDpqgLUU5Dwv3WM1.jpg
		- Backdrop path: http://image.tmdb.org/t/p/w500/tcheoA2nPATCm2vvXw2hVQoaEFD.jpg
		- Backdrop path: http://image.tmdb.org/t/p/w600/tcheoA2nPATCm2vvXw2hVQoaEFD.jpg

## CREACION DE LOS COMPONENTES DE LA APLICACION

	Recursos:
		- Navbar: https://getbootstrap.com/docs/4.0/components/navbar/ (penúltimo navbar)

1. Crear el componente `navbar`
	- ng g c components/navbar -is
	
2. Crear el componente `home`
	- ng g c components/home -is

3. Crear el componente `pelicula`
	- ng g c components/pelicula -is

4. Copiar el codigo de primer recurso en la vista del componente `navbar`
	- Realizar las modificaciones necesarias y adaptarlo a lo que deseamos
	- LLamar al componente `navbar` desde la vista principal para probar

5. Crear el componente `buscar`
	- ng g c components/buscar -is

6. Crear el archivo de rutas llamado `app.routes.ts`
	- Importar la constante al modulo principal 

7. Añadir lo siguiente en la vista del componente principal
	- <router-outlet></router-outlet>

8. Añadir `routerLinkActive`y `routerLink` en la vista del componente `navbar`

## DISEÑO DE LA PANTALLA 'HOME' Y USO DE SERVICIOS

	Recursos:
		- Jumbotron: https://getbootstrap.com/docs/4.0/components/jumbotron/ (usar el 2do)

1. Añadir el `Jumbotron` a la vista del componente `home`

2. Añadir el servicio `getCartelera` 

3. Inyectar el servicio en el componente `home` y llamar la funcion `getCartelera`

4. Añadir el archivo adjunto `styles.css` a la raiz del proyecto.

5. Codear la estructura de la vista del componente `home`

## PIPE PARA CONTROLAR LAS IMÁGENES DE LAS PELÍCULAS

1. Crear el directorio `pipes` dentro del directorio `app`

2. Crear el pipe `peliculaImagen`
	- ng g p pipes/peliculaImagen

3. Crear el directorio `img` dentro del directorio `assets`
	- Añadir la imagen `No Image Available`

4. Codear el Pipe

5. Modificar la vista del componente `home` para consumir el `pipe`

6. Modificar los servicios para que solo devuelva los resultados


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

## ENVIAR Y RECIBIR INFORMACIÓN DE UN COMPONENTE

1. Crear un componente llamado `galeria`
	- ng g c components/home/galeria -is --flat

2. Importar el modulo `Input` al componente `galeria`
	- Ese `Input` es como decirle a angular, esta informacion vendra fuera del componente

3. Copiar y pegar todo lo relacionado al div `peliculas` en la vista del componente `galeria`

4. Llamar al componente `galeria` desde la vista `home`

5. Se agrega todos los campos que se le pasara al componente `galeria`
	- Si `titulo` no tuviese un valor en `duro` debería ir entre corchetes

## COMPONENTE DE BÚSQUEDA

	Recursos:
		- https://getbootstrap.com/docs/4.0/components/card/

1. Importar al modulo principal `FormsModule` y añadirlo en `imports`
	- import { FormsModule } from '@angular/forms';

2. Codear la vista del componente `buscar`

3. Añadir la variable `buscar` y codear la función `buscarPelicula` en el componente `buscar`

4. Importar el servicio `PeliculasService` en el componente `buscar` para llamar al servicio `buscarPelicula`

5. Añadir la variable `peliculas` al servicio de tipo `any`

6. Modificar el servicio `buscarPelicula`

7. Copiar la primera tarjeta del div `card-columns` (Card columns)

8. Añadir a la tarjeta la directa *ngFor para que recorra los posibles resultados que se ingresa por la entrada `buscar`

9. Codear la imagen , el titulo y la descripcion de la tarjeta

10. Añadir un boton `Ver más`

## BÚSQUEDA DEL NAVBAR

1. Agregar la propiedad `ngSubmit` al formulario que esta en la vista del componente `navbar`

2. Añadir el identificardor de la única entrada que esta dentro del formulario `#buscar`

3. Codear la funcion `buscarPelicula` al componente `navbar`

4. Añadir una nueva ruta al archivo de configuracion de rutas `app.routes.ts`
	- { path: 'buscar/:texto', component: BuscarComponent },

5. Importar la clase `Router` en el componente `navbar`
	- Inyectarlo en constructor
	- Usarlo en la funcion `buscarPelicula`

6. Importar la interfaz `ActivatedRoute` en el componente `buscar`
	- Inyectarlo en constructor
	- Usarlo en el constructor

## PANTALLA DE PELÍCULA
	
	Recursos:
		- https://developers.themoviedb.org/3/getting-started/append-to-response
		- https://getbootstrap.com/docs/4.0/components/badge/

1. Codear la vista del componente `pelicula`

2. Añadir la propiedad pelicula en el componente `pelicula`

3. Modificar la ruta de la pelicula en el archivo de configuracion de rutas `app.routes.ts`
	- { path: 'pelicula/:id/:pagina', component: PeliculaComponent },

4. Importar el servicio `PeliculasServicio` y la interfaz `ActivatedRoute`
	- Inyectarlos en el constructor 

5. Añadir la propiedad `RouterLink` en la vista del componente `galeria`

6. Añadir la clase `puntero` (Estilo CSS)

7. Codear servicio para obtener toda la informacion de la pelicula `getPelicula`

8. Codear el la llamada del servicio `getPelicula` desde el constructor del componente `pelicula`

9. Modificar el pipe `PeliculaImagenPipe`

10. Utilizar el badge `Primary` de `Contextual variations` (Segundo Recurso) en la vista del componente pelicula

11. Codear la vista del componente `pelicula`

## DETALLES FINALES DE LA APLICACIÓN DE PELÍCULAS

1. Añadir un boton debajo del `Voto Promedio`

2. Añadir la propiedad `routerLink` al nuevo boton creado 

3. Crear la variable `regresarA` e incluirlo en el constructor del componente `pelicula`

4. Codear el boton `Ver más...` del componente buscar

5. Modificar la ruta `pelicula`, añadirle el parametro de `busqueda`

6. Añadir en la vista del componente `buscar`, el parametro `buscar` al `routerLink`

7. Añadir en la vista del componente `pelicula`, el parametro `busqueda` al `routerLink`

8. Crear la variable `busqueda` e incluirlo en el constructor del componente `pelicula`

9. Añadir el nombre de cada pelicula en el componente `galeria`


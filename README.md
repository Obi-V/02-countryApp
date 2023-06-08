# Aplicación de Información de Países

¡Bienvenido a la aplicación de Información de Países! Esta aplicación te permitirá explorar y obtener información detallada sobre diferentes países de todo el mundo.

## Características

- Explorar y buscar información sobre países, como su capital, población, idioma oficial y moneda.
- Obtener detalles sobre las regiones y subregiones a las que pertenecen los países.
- Ver banderas de cada país para una identificación visual rápida.
- Filtrar países por diferentes criterios, como continente, región o moneda.
- Obtener datos actualizados mediante la integración con la [API de Restcountries](https://restcountries.com/), una fuente confiable de información de países.

## Estructura del Proyecto

En esta aplicación usaremos la estructura de los siguientes elementos principales:

### Módulo Shared

El módulo Shared contiene componentes, servicios y otros recursos compartidos en toda la aplicación. Aquí puedes encontrar elementos como la barra de navegación, el pie de página y otros componentes reutilizables. El objetivo del módulo Shared es promover la reutilización de código y facilitar la consistencia visual en toda la aplicación.

### Service

El Service es una clase que se utiliza para manejar la lógica de negocio y la comunicación con la API. En el contexto de la aplicación de Información de Países, el Service se utiliza para realizar peticiones a la API de Restcountries y obtener los datos necesarios para mostrar la información de los países en la aplicación. El Service encapsula la lógica de la comunicación con la API y proporciona métodos y funciones para interactuar con los datos.

### Pages

Las Pages son componentes que representan las diferentes vistas de la aplicación. Cada página tiene su propio componente y se encarga de la interacción con el usuario y la presentación de datos específicos. En el caso de la aplicación de Información de Países, las Pages pueden incluir la lista de países, la página de detalles de un país y la página de búsqueda, entre otras. Las Pages utilizan el Service para obtener los datos necesarios y mostrarlos al usuario.

### Interfaces

Las Interfaces son estructuras que definen la forma de un objeto en TypeScript. En el contexto de la aplicación de Información de Países, se utilizan Interfaces para establecer la estructura y los tipos de datos esperados al interactuar con la API de Restcountries. Por ejemplo, se pueden definir Interfaces para representar la información de un país, como su nombre, capital, población, idioma y moneda. Las Interfaces ayudan a garantizar que los datos recibidos de la API cumplan con la estructura esperada y facilitan el trabajo con los datos en la aplicación.

## Instalación

1. Clona el repositorio: `git clone https://github.com/Obi-V/02-appPaises.git`
2. Navega hasta el directorio del proyecto: `cd 02-appPaises.git`(Tu ruta)
3. Instala las dependencias: `npm install`
4. Inicia la aplicación: `ng serve` o `ng serve -o`(Se abre automáticamente)
5. Abre tu navegador y visita: `http://localhost:4200`

## Uso

Esta serie de aplicaciones son para experimentar el funcionamiento de Angular, pero recomiendo complementar con más información y videos que podreis encontrar gratis en Youtube.

Una vez que la aplicación esté en funcionamiento, puedes explorar las diferentes secciones y temas para aprender sobre Angular. Cada tema proporciona explicaciones, fragmentos de código y ejercicios para ayudarte a comprender mejor los conceptos de Angular. ¡Diviértete aprendiendo!


### Texto creado con la ayuda chatGTP


# Decisiones técnicas y explicación de la implementación

## Explicación de la implementación

El proyecto se encarga de mostrar un listado de películas, las cuales tienen tres grandes clasificaciones, top puntuación, próximamente y populares, la información de cada una de estas
clasificaciones son extraídas del api publica "The Movie Database API" (https://developers.themoviedb.org/3/movies). También es posible buscar películas por nombre, y aplicar filtros de región de disponibilidad, leguaje y si es apta para menos de edad o no, esta funcionalidad es llamada filtrado, pero es necesario realizar una aclaración respecto a este punto; esto se hará más adelante. La aplicación también da la posibilidad de ver el detalle de una película haciendo clic sobre las cartas que aparecen al inicio en el home. Una vez en el detalle de cada película se verá información como fecha de lanzamiento, el puntaje que tiene y por cuantas personas fue dado, descripción, etiquetas y cinco películas relacionadas, de las cuales también es posible acceder a su detalle dando clic sobre dicha tarjeta.

También se implementó una paginación en el home, y el diseño completo de la aplicación es responsive, también se implementaron pantallas de carga para evitar el incorrecto renderizado de la información por la demora en las peticiones.

Todos los componentes son componentes funcionales.

### Filtros

Se realizó una implementación de los filtros, pero por temas de la API utilizada estos solo están disponibles si se realiza una búsqueda por palabra clave primero. Por lo anterior, es necesario escribir en la barra de búsqueda, cuando se escribe al menos un carácter aparece el botón de filtrado. Una vez se le da clic en el botón de filtrar, se realiza la búsqueda por los caracteres escritos en la barra y se activa un modal en el cual aparecen los filtros posibles para aplicar: región, lenguaje y si es apta o no para menos de edad.

Como la información de los filtros está compartida entre varios componentes se optó por implementarla en redux, esto con el fin de no intercambiar información entre estos componentes por medio de props. Una vez se aplican los filtros, aparece el resultado de la búsqueda en la página de inicio junto con algunas etiquetas para cada filtro aplicado. Estas etiquetas son posibles de eliminar y la búsqueda se actualizará.

Como el filtrado está estrechamente relacionado con la busqueda, al borrar los filtros se borrará también la palabra escrita en la barra de busqueda.

### Imagenes por defecto

Como es posible que algunas de las url de imagenes que envía el API no estén disponibles se realizó la implementación de imagenes por defecto que aparecerán cuando esto ocurra.

### Navigation

Para realizar la navegación a lo largo de la aplicación se utilizó enrutado dinámico mediante navigator de react-router-dom.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

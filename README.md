
## Dependencias instaladas

axios.
react-router-dom.
styled-components.

## A tener en cuenta.

Se añade un link al logo de Mercado Libre junto al input del formulario, de modo que desde cualquier vista sea
redirigido al inicio si hago click en el logo.

Al enviar el formulario (hacer click en el botón con la lupa o al oprimir la tecla ENTER), el campo de búsqueda
se limpia (se retorna el valor del estado a una cadena vacía).

El manejo de estados se hace a través del hook useState de React.

Asimismo, se usan otros hooks tales como useEffect para el manejo de ciclos de vida en los componentes función (todos
los componentes creados son función), useParams para acceder a los parámetros de ruta, useLocation para acceder al
location.search.

Al hacer click sobre un producto en la lista de resultados, se navega a la lista de detalles del producto, pero es
posible que la respuesta del servidor tarde unos segundos y no aparezca nada en el navegador, solo un NaN en donde se
renderiza el precio, por lo que se hace un renderizado condicional, de modo que aparezca el texto "Cargando..." mientras se obtiene la respuesta y se renderizan todos los elementos.

Cabe anotar, que hay algunos (muy pocos)  artículos en la API de search, que no tienen la llave "filters" para la construcción del breadCrumb, y en la llave "available_filters" no están las categorías, por lo que se implementa un
condicional en el componente BreadCrumb para que este solo diga "Categorías", en caso de que no esté disponible
dicha información, pero que siempre se renderice algo en el breadCrumb, en todo caso, esto sucede con muy pocos
artículos. El breadCrumb se construye a partir de las categorías de la búsqueda, de la menos a la más específica.
Para construir este breadCrumb, se guardan los filtros en el estado del componente SearchResult, y se pasa el arreglo por props a un componente hijo llamado BreadCrumb que es el encargado de mapear y renderizar los nombres de las categorías.

El componente SearchBox o caja de búsqueda, en el archivo App.js, se ubica por fuera de la etiqueta Switch, de modo que este se renderice en todo momento, y pueda iniciar una nueva búsqueda desde cualquier vista.

Para renderizar solo 4 productos en la lista de resultados, se hace uso del método Slice, para limitar la lista resultante al aplicar el método map al arreglo de resultados que retorna el servidor, esto es en el componente Products.js.

En el componente SearchResult se manejan dos estados, uno para el listado de productos y otro para las categorías de la búsqueda (con las que se construye el breadCrumb).

En el componente ProductDetails está el botón comprar, a este se le da estilo usando la librería styled-components, es en el único caso que se usa, solo para demostrar que también se maneja esta herramienta.

Para agregar los separadores de miles y los centavos a los precios de los productos, se usa el método Intl.NumberFormat, especificando que la divisa es ARS.

El breadCrumb de la vista de detalles del producto, se construye a partir de ciertos atributos comunes a todos los ítems, y que, como se pedía, hacen referencia al producto en específico, tales como la marca, la línea y el modelo. Se hace primero un filtro del arreglo de atributos, para encontrar los objetos con id BRAND, LINE y MODEL, y luego se mapea el arreglo resultante, para renderizar la llave value_name.

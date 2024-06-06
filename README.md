# Flex, diseño responsive y accesibilidad

Normalmente estas funcionalidades se consiguen añadiendo una línea de código en el fichero styles.css, en el selector adecuado. 
Puedes modificar el HTML, pero no debería ser necesario.

1. Escribe una etiqueta _title_ adecuada para esta página
2. Establece un atributo _alt_ adecuado para el gato número 2
3. Apenas se puede leer bien el texto de la cabecera. Ajusta el color de fondo para conseguir un contraste adeucado (el color original es un azul)
4. Crea un contenedor flexible en el selector **.gallery**
5. Los elementos del contenedor flexible deben apilarse uno sobre otros cuando estamos en móvil 
6. Los elementos del contenedor flexible siempre estan separados entre ellos **1rem**
7. Los elementos del contenedor flexible siempre estan alineados en el centro para _el main axis_
8. A medida que el contenedor flexible crece, los gatos se van colocando en horizontal uno al lado del otro, siempre que tienen espacio (ver vídeo)
9. Cuando el viewport crece, queremos ver los gatos más grandes. Crea una _media query_ para que cuando lleguemos al menos a **768px de viewport horizontal**, la propiedad **max-width: 250px** de las imágenes pase a tener valor **350px**
10. DIFICIL.  Al llegar a un **viewport de 992px horizontal**, los gatos se colocan en un grid de 4 columnas. La primera columna siempre ocupa 4 veces más espacio horizontal disponible que el resto de columnas  (ver vídeo)

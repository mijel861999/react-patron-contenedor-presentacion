# Contenedor - Presentación

Este patrón consiste en separar las responsabilidades entre dos tipos de componentes: **************************************Los contenedores (Container)************************************** y ************************Presentacionales (Presentational).************************

### Contenedor (Container):

- Los componentes contenedores se centran en la lógica y la gestión de datos
- Son responsables de interactuar con el estado de la aplicación y los datos que se obtienen de fuentes externas, como APIs o el estado global de la aplicación (utilizando Context, Redux, etc).
- Los contenedores pueden manejar la lógica del negocio, como ********cálculos, validaciones y manejo de eventos importantes.********

### Presentación (Presentational):

- Los componentes presentacionales se enfocan en la visualización y presentación de datos.
- No manejan el estado de la aplicación ni interactúan directamente con APIs u otras fuentes de datos externas.
- Reciben los datos y las funciones como props de sus componentes contenedores.
- Están diseñados para ser lo más reutilizables posible, ya que su lógica se mantiene mínima y desacoplada de la lógica específica de la aplicación.
- Suelen ser componentes funcionales, ya que no requieren manejar el estado y se pueden desarrollar con facilidad utilizando hooks.

## Beneficios del patrón Contenedor y Presentación:

- Separación clara de la responsabilidades: Facilita la organización del código y mejora la legibilidad del mismo al separar la lógica de la presentación.
- Reutilización de componentes: Los componentes presentacionales son fáciles de reutilizar en diferentes partes de la aplicación, lo que fomenta el desarrollo rápido y eficiente.
- Mantenibilidad: Al tener lógica de negocio separada de la visualización, los cambios en la lógica no afectarán la presentación y viceversa, lo que hace que el código sea más fácil de mantener.

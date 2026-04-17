# 🎬 FilmHub - Movie Gallery

Una galería interactiva de películas con capacidad de gestionar pósters y detalles de películas. Construida con HTML5, CSS3 y JavaScript vanilla.

## ✨ Características

- **Galería de Películas**: Grid responsive con miniaturas de películas
- **Detalles Completos**: Información detallada de cada película incluyendo:
  - Título y año de lanzamiento
  - Sinopsis y calificación
  - Géneros y director
  - Elenco completo con roles
- **Gestión de Pósters**: Sube y visualiza pósters de películas en alta calidad
- **Almacenamiento Local**: Los datos se guardan automáticamente en el navegador
- **Interfaz Intuitiva**: Diseño moderno y fácil de usar

## 📋 Requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- No requiere servidor ni dependencias externas

## 🚀 Instalación

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/victormillanaguilar-ctrl/Tarea_2_AI103_PaginaMovies.git
   cd Tarea_2_AI103_PaginaMovies
   ```

2. **Abre el archivo HTML:**
   - Haz doble clic en `index.html` o
   - Arrastra `index.html` a tu navegador o
   - Usa un servidor local (recomendado):
     ```bash
     # Con Python 3
     python -m http.server 8000
     
     # Con Node.js (http-server)
     npx http-server
     ```

3. **Accede a la aplicación:**
   - http://localhost:8000 (si usas servidor)
   - O abre directamente el archivo HTML

## 📁 Estructura del Proyecto

```
Pagina_Peliculas/
├── index.html           # Estructura HTML principal
├── css/
│   └── styles.css       # Estilos y diseño responsivo
├── js/
│   ├── app.js           # Lógica principal de la aplicación
│   ├── data.js          # Base de datos de películas
│   ├── storage.js       # Gestión de almacenamiento local
│   └── utils.js         # Funciones de utilidad
└── README.md            # Este archivo
```

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Diseño responsive y animaciones
- **JavaScript (ES6+)**: Lógica sin frameworks
- **LocalStorage API**: Persistencia de datos

## 📖 Uso

### Ver Películas
1. La galería muestra todas las películas disponibles en el panel izquierdo
2. Haz clic en cualquier película para ver sus detalles completos
3. Se resaltará la película seleccionada

### Subir Póster
1. Selecciona una película
2. Haz clic en "Upload Poster"
3. Selecciona una imagen (JPG, PNG, WebP o GIF)
4. La imagen se guardará automáticamente para esa película

### Datos Guardados
- Todos los pósters se almacenan en el navegador usando LocalStorage
- Los datos persisten entre sesiones
- Usa las herramientas de desarrollo para limpiar si es necesario

## 🎯 Funcionalidades Principales

### app.js
- Inicializa la aplicación
- Gestiona el estado de películas seleccionadas
- Maneja eventos de interfaz de usuario
- Renderiza la galería y detalles

### data.js
- Contiene la base de datos estática de películas
- Información como sinopsis, elenco, géneros, calificación

### storage.js
- Interfaz para guardar y recuperar datos del LocalStorage
- Gestión de pósters en base64

### utils.js
- Funciones auxiliares para procesamiento de imágenes
- Utilidades de manipulación de datos

## 📱 Diseño Responsivo

La aplicación se adapta a diferentes tamaños de pantalla:
- **Desktop**: Diseño completo con sidebar
- **Tablet**: Ajuste optimizado
- **Mobile**: Interfaz simplificada

## 🐛 Limitaciones Conocidas

- Tamaño máximo de póster: 5MB
- Formatos soportados: JPG, PNG, WebP, GIF
- Los datos se almacenan solo en el navegador (no sincroniza entre dispositivos)

## 📝 Ejemplo de Película

```javascript
{
  id: 1,
  title: 'The Avengers: EndGame',
  year: 2024,
  genres: ['Sci-Fi', 'Adventure', 'Drama'],
  rating: 8.7,
  synopsis: '...',
  director: 'Lorem Ipsum',
  cast: [
    { name: 'Actor Name', role: 'Character' },
    // más actores...
  ]
}
```

## 🎓 Para Desarrolladores

### Agregar Nueva Película
Edita `js/data.js` y agrega un objeto al array `MOVIES`:

```javascript
{
  id: 3,
  title: 'Nueva Película',
  year: 2024,
  genres: ['Género1', 'Género2'],
  rating: 8.5,
  synopsis: 'Descripción...',
  director: 'Director',
  cast: [...]
}
```

### Personalizar Estilos
Modifica `css/styles.css` para cambiar colores, fuentes y espaciado.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios mayores:
1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo licencia MIT - ver LICENSE para más detalles.

## ✉️ Contacto

**Autor**: Victor Millán Aguilar  
**Email**: victormillanaguilar-ctrl@github.com  
**GitHub**: [@victormillanaguilar-ctrl](https://github.com/victormillanaguilar-ctrl)

---

**Última actualización**: Abril 2026
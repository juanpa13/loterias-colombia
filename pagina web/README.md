# Apuestas en Loterías de Colombia (Sitio estático)

Descripción
-----------
Sitio estático con información y llamada a la acción para un grupo de WhatsApp. Este repositorio contiene la estructura mínima y los archivos para publicar la web con GitHub Pages.

Tecnologías usadas
------------------
- HTML5
- CSS3 (responsive)
- JavaScript (vanilla)
- Git / GitHub Pages

Estructura del proyecto
-----------------------
- `index.html` — página principal (HTML5 válido).
- `404.html` — página de error personalizada.
- `css/styles.css` — estilos principales y responsive.
- `js/script.js` — funcionalidades JS (menú móvil, FAQ, pestañas, formulario demo, verificación de edad).
- `assets/` — imágenes, favicon, captura, etc.
- `.gitignore` — archivos ignorados.
- `LICENSE` — licencia MIT.

Cómo clonar el repositorio
--------------------------
1. Abre una terminal.
2. Clona el repo (reemplaza `TU_USUARIO` y `TU_REPO`):

```
git clone https://github.com/TU_USUARIO/TU_REPO.git
cd TU_REPO
```

3. Crea cambios, agrega y haz commit:

```
git add .
git commit -m "Initial site files"
git push origin main
```

Cómo crear el repositorio en GitHub (web)
----------------------------------------
1. Inicia sesión en GitHub.
2. Haz clic en "New repository".
3. Pon el nombre (por ejemplo `loterias-colombia`).
4. Deja la visibilidad pública (o privada si prefieres).
5. Crea el repo.
6. Sube los archivos desde la interfaz ("Add file" > "Upload files") o sigue las instrucciones de la consola (clonar + push).

Cómo activar GitHub Pages
-------------------------
Opción A — Sitio de proyecto (URL: https://TU_USUARIO.github.io/TU_REPO)
1. Ve a tu repositorio en GitHub.
2. Haz clic en "Settings" > "Pages" (o "Code and automation" > "Pages" depende UI).
3. Under "Branch", selecciona `main`.
4. En carpeta (folder) selecciona `/ (root)` o "Deploy from main branch".
5. Guarda. GitHub mostrará la URL pública en unos minutos.

Opción B — Sitio de usuario/organización (URL: https://TU_USUARIO.github.io)
1. Crea un repo llamado `TU_USUARIO.github.io`.
2. Sube archivos a la rama `main` en la raíz.
3. No necesitas configurar la carpeta, GitHub Pages servirá desde `main` `/root`.

Buenas prácticas recomendadas
-----------------------------
- Usa `main` como branch principal.
- `index.html` en la raíz.
- Nombres de archivos en minúsculas y sin espacios.
- Comentarios en el código para facilitar mantenimiento.
- Añade meta tags (SEO) y atributos ARIA (accesibilidad).
- Añadir `favicon.ico` en `/assets` y referencia en `<head>`.
- Añadir `404.html` para gestión de rutas 404 en Pages.

URL final del sitio publicado
-----------------------------
- Proyecto: `https://TU_USUARIO.github.io/TU_REPO/`
- Usuario: `https://TU_USUARIO.github.io/` (si el repo se llama `TU_USUARIO.github.io`)

Licencia
--------
Incluye `LICENSE` (MIT) para que otros sepan cómo usar tu código.

Contacto
--------
Si necesitas que yo genere automáticamente un repo en GitHub o que te guíe paso a paso con comandos en la terminal, dímelo y te proporcionaré los comandos exactos adaptados a tu usuario y nombre del repo.
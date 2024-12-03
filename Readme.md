# Instalar dependencias
```sh
nvm use 18.20
npm install
```

# Levantar servidor
Ejecutar
```sh
npm run dev
```

Abrir el navegador en el puerto 5173
[http://localhost:5173/index.html](http://localhost:5173/index.html)



# Como usar GIT

```sh
git clone https://github.com/Jose-Schafer/front-corfo-mod3-eg3.git
```

## Como crear una rama
Primero debemos pararnos sobre la rama de desarrollo
```sh
git checkout develop
```

Luego, crear la nueva rama
```sh
git checkout -b feature/<nombre>
```

## Como bajar cambios de develop
Primero traer los cambios desde remoto (origin)
```sh
git pull origin/develop
```

Luego, asegúrate de estar en tu rama de trabajo.
```sh
git checkout feature/<nombre>
```
Por último, hacer un rebase de tu rama de trabajo para poder actualizar tu rama
```sh
git rebase develop
```

## Hacer un commit
Una vez que tengas algunos cambios listos

Agrega los cambios a staging
```sh
git add .
```

Commitea los cambios
```sh
git commit -m "<mensaje del commit>"
```

Pushea los cambios contra remoto
```sh
git push
```

Luego, en github.com en el reporitorio (https://github.com/Jose-Schafer/front-corfo-mod3-eg3) anda a donde sale "Pull requests". Una vez ahí, dale a la opción crear pull request.

Deberás elegir tu rama, y seleccionar `develop` como la rama objetivo.

Una vez tus cambios sean aprobados por alguien del equipo puedes mergear.

# Tareas
## Felipe
- 3. Programación Funcional
    - currying, composición de funciones, y recursión para el manejo de datos de los doctores y pacientes.
## Denisse
- 2. Implementación de Algoritmos y Estructuras de Datos
    - Búsqueda por especialidad
## Pablo
- 4. Programación Orientada a Objetos
    - Crea una clase Doctor con subclases como Cirujano o Pediatra, aplicando encapsulación, herencia, y polimorfismo.
## Carlos
- 4. Programación Orientada a Objetos
    - Implementa métodos para calcular costos de consulta, gestionar disponibilidad, etc.
## José
- 1. Manipulación de Datos con JSON y Simulación de API REST (1.5 puntos)
    - Simula la obtención de datos desde una API REST y carga dinámicamente la información en la interfaz.


# Como probar código de javascript
1. Manipulación de Datos con JSON y Simulación de API REST
    - El uso de api se puede encontrar en `src/js/api/doctors.js`. Todos los doctores en el código son cargados usando esa función para crear una promesa simulando una API.
    - Clonación, fusión y recorrido de los datos JSON se pueden encontrar en la función `loadDoctorCards` en `src/js/components/doctors/index.js`

## Preguntas



hola, probando el commit
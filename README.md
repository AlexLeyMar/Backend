# Backend Documentación

1.1 Crear Playlist
-------------

Este servicio se usa para crear una playlist


* endpoint: /post/:id
* método: POST


* Body:

![](https://github.com/AlexLeyMar/Backend/blob/main/body1.png)

* Validaciones:

| Campo  | Validación |
| :------------ |:---------------:
| Título      | Debe ser un string entre 5 y 10 caracteres |
| Descripción | Debe ser un string, un numero o indefinido cuando sea requerido |
| Nombre Museo | Debe ser un string, un numero o indefinido cuando sea requerido |
| Ubicación Museo | Debe ser un string, un numero o indefinido cuando sea requerido |
| Descripción Museo| Debe ser un string, un numero o indefinido cuando sea requerido |
| Título Película | Debe ser un string, un numero o indefinido cuando sea requerido |
| Año Película | Debe ser un string, un numero o indefinido cuando sea requerido |
| Directori Película | Debe ser un string, un numero o indefinido cuando sea requerido |
| Duración Película | Debe ser un string, un numero o indefinido cuando sea requerido |
| Clasificación Película | Debe ser un string, un numero o indefinido cuando sea requerido |



* Errores:

| Code  | Mensage  | http  |
| :------------ |:---------------:| -----:|
|INAVLID BODY EXCEPTION    | 'Titulo' must have more than 5 characters and less than 10 | 400 |
|INAVLID BODY EXCEPTION    | Fields must be string, number or undefined when is required  | 400 |


* Respuesta: HTTP status 200 & message: 'Playlist creada exitosamente'
* Respuesta con error:  HTTP status 422




1.2 Borrar Playlist
-------------

Este servicio se usa para borrar una playlist


* endpoint: /post/:id
* método: POST

* Respuesta: HTTP status 200 & message: 'Playlist eliminado'
* Respuesta con error:  HTTP status 422



1.3 Modificar Playlist
-------------

Este servicio se usa para Modificar una playlist


* endpoint: /post/:id
* método: POST

* Respuesta: HTTP status 200 & message: 'Playlist actualizado'
* Respuesta con error:  HTTP status 422





1.4 Obtener Playlist
-------------

Este servicio se usa para Obtener una playlist


* endpoint: /GET/:titulo
* método: GET

* Respuesta: HTTP status 200
* Respuesta con error:  HTTP status 422

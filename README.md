# Backend Documentación

1.1 Agregar playlist
Este servicio se usa para crear una playlist


* endpoint: /post/:id
* método: POST


* Body:

![](https://pandao.github.io/editor.md/examples/images/4.jpg)

* Validaciones:

| Campo  | Validacion |
| :------------ |:---------------:
| Titulo      | Debe ser un string entre 5 y 50 caracteres |
| Descripción      | Debe ser un string entre 10 y 250 caracteres |
| zebra stripes | are neat



* Errores:

| Code  | Mensage  | http  |
| :------------ |:---------------:| -----:|
|INAVLID BODY EXCEPTION    | 'Titulo' must have more than 5 characters and less than 10 | 400 |
|INAVLID BODY EXCEPTION    | Fields must be string, number or undefined when is required  | 400 |


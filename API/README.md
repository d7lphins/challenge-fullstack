# View da API 

### Executando a Aplicação

node server.js

## Recursos utilizados no desenvolvimento:

- Node.Js;
- Express;
- Mongoose;
- cors
- require-dir
- body-parser

Obs: para usar aplicação é necesário rodar npm install no terminal 

## Rotas para testar aplicação:

  ROTA                    |     HTTP(Verbo)   |      Descrição        | 
------------------------- | ----------------- | --------------------- | 
/api/usuarios             |       GET         | Selecionar Todos      | 
/api/usuarios             |       POST        | Atualizar Por Id      | 
/api/usuarios/:usuario_id |       GET         | Selecionar Por Id     |     
/api/usuarios/:usuario_id |       DELETE      | Excluir Por Id        |

Obs: você usar o Postman -https://www.postman.com ou - insomnia https://insomnia.rest/
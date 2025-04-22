# GDM Tech - Projeto de Desenvolvimento

Bem-vindo ao projeto **GDM Tech**! Este repositório contém a configuração e os arquivos necessários para rodar o ambiente de desenvolvimento usando **Docker** e **Docker Compose**.

## Pré-requisitos

Certifique-se de que você tenha as seguintes ferramentas instaladas:

- [Docker](https://www.docker.com/get-started) (para rodar contêineres)
- [Docker Compose](https://docs.docker.com/compose/install/) (para orquestrar os contêineres)

## Como rodar o projeto em desenvolvimento

Para rodar o ambiente de desenvolvimento, utilize o comando abaixo. Isso irá construir as imagens necessárias e iniciar os contêineres do seu projeto.

### Passo 1: Rodar o Docker Compose

```bash
docker-compose -f docker-compose.dev.yml up --build
```

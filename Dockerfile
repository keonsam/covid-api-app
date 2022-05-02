# SERVER
FROM node:16 as covid-api

WORKDIR /app

CMD [ "npm", "start" ]


# DATABASE
FROM postgres:14.2 as covid-db


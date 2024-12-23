FROM node:22-alpine3.18 AS development

WORKDIR /app

COPY package*.json ./

RUN npm install && npm cache clean --force && rm -rf /tmp/npm*

COPY . .

RUN npm run build

FROM nginx:1.21.6-alpine AS production

WORKDIR /app

COPY --from=development /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
# Steg 1 – Bygg React-appen med Node
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Steg 2 – Servera med nginx
FROM nginx:alpine

# Kopiera byggresultatet till nginx public-mapp
COPY --from=builder /app/dist /usr/share/nginx/html

# Kopiera nginx-config som hanterar React Router
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

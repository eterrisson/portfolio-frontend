# Utilisez une image de node.js pour construire l'application
FROM node:18 as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Utilisez une image Nginx pour servir l'application construite
FROM nginx:latest

# Copiez le build du répertoire de construction vers le répertoire de travail de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

#copie des certificats de sécurité
RUN mkdir -p /etc/nginx/certs
COPY certs /etc/nginx/certs

#copie conf du serveur
COPY sites.conf /etc/nginx/conf.d/sites.conf

# Port exposé par Nginx
EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
FROM nestjs/cli:286d7b9930ef05f7c32484b48b208233c5f44329

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
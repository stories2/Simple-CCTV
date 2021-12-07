FROM node:14.18.2

# Install pm2
RUN [ "npm", "install", "pm2@5.1.2", "-g" ]

# Open port
EXPOSE 3000/tcp

WORKDIR /app
COPY ./ecosystem.config.js /app/
COPY ./src /app/src/

WORKDIR /app/src
RUN [ "npm", "i" ]

WORKDIR /app
CMD [ "pm2-runtime", "start", "ecosystem.config.js", "--env", "production" ]

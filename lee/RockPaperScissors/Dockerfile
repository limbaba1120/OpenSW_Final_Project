# Origin From https://github.com/PokerCoder/RockPaperScissors
# Only use for school project  

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY . .

CMD ["sh", "-c", "nginx -g 'daemon off;' & node server.js"]
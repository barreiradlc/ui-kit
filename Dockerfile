# Use a Node.js image
FROM node:18

WORKDIR /app

COPY ./curiosity-ui ./curiosity-ui
COPY ./demo ./demo

# WORKDIR /app/curiosity-ui
RUN cd /app/curiosity-ui && npm install && npm link

# WORKDIR /app/demo
RUN cd /app/demo && npm install && npm link "curiosity-ui"


RUN cd /app/curiosity-ui && npm run build

RUN cd /app/demo 


EXPOSE 5173

CMD ["npm", "run", "dev", "--prefix", "demo", "--host"]
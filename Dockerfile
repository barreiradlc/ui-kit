# Use a Node.js image
FROM node:22

WORKDIR /app

COPY ./curiosity-ui ./curiosity-ui
COPY ./demo ./demo

# WORKDIR /app/curiosity-ui
RUN cd /app/curiosity-ui && npm install && npm link && npm run build

# WORKDIR /app/demo
RUN cd /app/demo && npm install && npm link "curiosity-ui"

EXPOSE 5173

CMD ["npx", "npm-run-all", "--parallel", "watch:lib", "dev"]

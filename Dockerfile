# Use a Node.js image
FROM node:22

WORKDIR /app

COPY ./curiosity-ui ./curiosity-ui
COPY ./demo ./demo

# WORKDIR /app/curiosity-ui
RUN cd /app/curiosity-ui && npm install && npm link && npm run build && npm run build:css

# WORKDIR /app/demo
RUN cd /app/demo && npm install && npm link "curiosity-ui"

# Use wait-for-it to run multiple commands concurrently
RUN npm install -g npm-run-all

EXPOSE 5173

CMD ["npm-run-all", "--parallel", "watch:lib", "dev"]

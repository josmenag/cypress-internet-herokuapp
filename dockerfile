FROM cypress/browsers:node16.16.0-chrome107-ff107-edge
WORKDIR /app
COPY package.json /app/
COPY package-lock.json /app/
COPY cypress.config.js /app/
COPY cypress /app/cypress
COPY config /app/config
RUN yarn install --frozen-lockfile --no-progress --network-timeout 1000000
RUN npx cypress verify
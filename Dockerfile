FROM node:16-buster-slim
RUN apt update && apt upgrade -y && apt install ffmpeg git -y
COPY . /tgvcbot
WORKDIR /tgvcbot
RUN yarn install
RUN yarn build
RUN rm -rf src
RUN npm install -g npm@7.20.5
CMD yarn start

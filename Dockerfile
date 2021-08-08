FROM node:16-buster-slim
RUN apt update && apt upgrade -y && apt install ffmpeg git -y
COPY . /tgvcbot
WORKDIR /tgvcbot
RUN npm install -g npm@7.20.5
RUN npm install ytdl-core@latest
RUN npm U ytdl-core@mapbox/node-pre-gyp
RUN yarn install
RUN yarn build
RUN rm -rf src
CMD yarn start

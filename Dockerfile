FROM node:8.9
COPY  . /workspace/
WORKDIR /workspace/
#RUN . .env
#RUN npm install
#RUN yarn test:deploy
#RUN npm install -g semantic-release
EXPOSE 3000
WORKDIR /workspace/
#CMD ["yarn", "workspace", "@haaretz/haaretz.co.il", "start"]




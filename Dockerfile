FROM node:8.9
COPY  . /workspace/
WORKDIR /workspace/
#RUN source .env
#RUN npm install
#RUN yarn test:deploy
EXPOSE 3000
WORKDIR /workspace/
#CMD ["yarn", "workspace", "@haaretz/haaretz.co.il", "start"]




FROM node:8.9
COPY  . /workspace/
WORKDIR /workspace/

EXPOSE 3112
WORKDIR /workspace/
CMD ["node", "index.js"]




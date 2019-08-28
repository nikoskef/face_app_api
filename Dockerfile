FROM node:carbon

WORKDIR /usr/src/face-app-api

COPY ./ ./

RUN npm install

CMD ["/bin/bash"]
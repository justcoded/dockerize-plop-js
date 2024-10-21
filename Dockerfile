FROM node:22.6.0

RUN mkdir /plop 
RUN mkdir /codebase
RUN npm install -g plop tsx cross-env typescript
COPY ./plop/* /plop

CMD ["bash", "-c", "npm run plop"]

WORKDIR /plop


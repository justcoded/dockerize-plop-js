FROM node:22.6.0

RUN mkdir /plop
RUN mkdir /codebase
RUN npm install -g cross-env plop tsx typescript inquirer-autocomplete-prompt
RUN npm install -g @types/inquirer-autocomplete-prompt @types/node

COPY ./plop/* /plop

CMD ["bash", "-c", "npm run plop"]

WORKDIR /plop


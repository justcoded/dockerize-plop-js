FROM node:22.6.0
WORKDIR /usr/src/app
RUN npm install -g plop tsx cross-env typescript
CMD ['npm', 'run', 'plop']
SHELL ["/bin/bash", "-c"]

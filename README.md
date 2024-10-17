# Dockerized Plop Repository

This repository provides a Dockerized setup for [Plop.js](https://plopjs.com/), a micro-generator framework that helps you automate the creation of files and components in your projects. 

## Features

- **Dockerized Environment**: Run Plop.js in a containerized environment.
- **Fail-proof**: Displays error messages if the required configuration file `.plop.json` is not found.
- **Conventional Commits**: Follows a Git workflow with feature branches and conventional commits for clear versioning.
- **Changelog Generation**: Automatically generates changelogs from conventional commits.

## Getting Started

### Prerequisites

- Docker installed on your machine.

### Usage

1. **Build the Docker image**:
   ```bash
   docker build -t plop_plop .

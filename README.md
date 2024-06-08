# basic-nodejs-server-with-cd-to-gcp

A basic Nodejs backend server with Fastify and DrizzleORM.
include with basic CRUD and migration, along with Github Action workflows to
- Create secrets in Secret Manager
- Expose Environment variables and Secrets to Cloud run
- Run a migration to Cloud SQL
- Build a Dockerfile and deploy to Cloud run

## Requirements
- Google Cloud Project setup
  - Cloud SQL
    - Connection name
    - Database name
    - Username
    - Password
  - Service account for Github Action
    - Roles
      - Artifact Registry Writer
      - Cloud Run Admin
      - Cloud Run Service Agent
      - Cloud SQL Client
      - Secret Manager Admin
      - Service Account Token Creator
    - Service Account impersonation to Github Action account to this repository
  - Secret Manager
  - Artifact Registry

## Development
### Node version

This project uses `nvm` you can install the correct node version by
```
nvm install
```
and use it
```
nvm use
```

### How to start API
1. Install dependencies
```
yarn
```
2. Start up database
```
yarn start:db
```
3. Run a migration
```
yarn migrate
```
4. Start an app
```
yarn start
```
or if you want the server to restart on every changes
```
yarn start:dev
```

### How to add a migration file
1. Install `pnpm`
```
yarn global add pnpm
```
2. Add a model in `drizzle-tables.js`
3. Generate a migration file
```
pnpm drizzle-kit generate 
```
4. Run a migration command (make sure your db is started)
```
yarn migrate
```

## How to add Environment variables and Secrets to Cloud run
1. Go into repository `Settings`
2. Search for `Secrets and variables` and choose `Actions`
3. Create `INCLUDE_VARS` and `INCLUDE_SECRETS` in `Variables`
4. Now you can after you add any envs or secrets, you have to add their names into `INCLUDE_VARS` for envs or `INCLUDE_SECRETS` for secrets
5. In the next CD job, these envs or secrets will be adde to Cloud run

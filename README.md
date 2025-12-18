<!-- @format -->

# Hospital-Data-Integration-System

data:

# Description

This repository contains the database schema and sample data for the Hospital Data Integration System.
It includes tables for patients, admissions, lab tests, and lab results.

# Run for init (detailed):

## 1. Remove old container

If you already have a container named `hospital-postgres`, stop and remove it to avoid conflicts:

```bash
docker stop hospital-postgres
docker rm hospital-postgres
```

## 2. Start a new PostgreSQL container

This command creates a new PostgreSQL 15 container named `hospital-postgres` with user `admin`, password `admin`, and database `hospital_db`:

```bash
docker run --name hospital-postgres \
  -e POSTGRES_USER=admin \
  -e POSTGRES_PASSWORD=admin \
  -e POSTGRES_DB=hospital_db \
  -p 5432:5432 \
  -d postgres:15
```

## 3. Load schema and data

This command loads the schema and initial data from `hospital_db.sql` into the running container:

```bash
docker exec -i hospital-postgres psql -U admin -d hospital_db < hospital_db.sql
```

you have `hospital_db.sql` at data folder.

Run PostgreSQL in Docker:

```bash
docker run --name hospital-postgres \
  -e POSTGRES_USER=admin \
  -e POSTGRES_PASSWORD=admin \
  -e POSTGRES_DB=hospital_db \
  -p 5432:5432 \
  -d postgres:15
```

# To open an interactive PostgreSQL session inside the Docker container:

```bash
docker exec -it hospital-postgres psql -U admin -d hospital_db
```

# To see the tables:

```bash
\dt
```

# To see the indexes

```bash
\di
```

# To see the SP - get_patients_without_recent_lab_tests

```bash
\df+ get_patients_without_recent_lab_tests
```

# To run local backend:

```bash
npx ts-node index.ts
```

<!-- @format -->

# Hospital-Data-Integration-System

data:

# Description

This repository contains the database schema and sample data for the Hospital Data Integration System.
It includes tables for patients, admissions, lab tests, and lab results.

# Prerequisites that you need:

- Docker
- Docker Compose (optional)
- PostgreSQL client (psql)

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

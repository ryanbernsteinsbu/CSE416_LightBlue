## Starting a Docker psql Server ##
* make sure docker and postgres are installed
* ```
$docker run --name fantasy-db \
-e POSTGRES_PASSWORD=password \
-e POSTGRES_DB=fantasy_draft \
-p 5432:5432 \
-d postgres
```
* ```
$docker exec -it fantasy-db psql -U postgres
```

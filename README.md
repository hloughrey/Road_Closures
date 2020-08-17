# Road Closures

This is a repo for playing around with creating a CRUD API in different lanugages. Each language will make CRUD requests against a postgres database which is populated with the [OS OpenRoads](https://www.ordnancesurvey.co.uk/business-government/products/open-map-roads) road network.

## Getting started
1. Due to the size of the OS OpenRoads dataset, it is not inclued in this repo; but if you follow the instructions within the [OS OpenRoads Processing](https://github.com/hloughrey/OS_Open_Roads_Processing) repo, you will be able to generate the os_open_roads.dump file required to build the postgres db required by this repository.

2. Once you've generated the os_open_roads.dump file, copy and paste it into the docker-entrypoint-initdb.d directory so that you have the following structure:

```asci
db
|-- docker-entrypoint-initdb.d:
    |-- create_postgis.sql
    |-- os_open_roads.dump
    |-- restoreDB.sh
```
3. Build the docker images
    ```docker
    docker-compose build
    ```

4. Run the application
    ```docker
    docker-compose up
    ```

5. Make calls to the APIs


### Node API Endpoints

- http://localhost:9000/api/roads?name=folly drive
- http://localhost:9000/api/roads?bbox=-2.788467407226563,52.02883848153629,-2.630538940429688,52.071065406906634

### TODO
- Add Swagger endpoint to Node API
- Add indexing to name1 field
- Build C# API


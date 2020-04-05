# redis-basic
```console
docker run --name rdb -p 6379:6379 -d redis
docker exec -it rdb redis-cli
```

# rabbitmq-basic

```console
docker pull rabbitmq:3-management
docker run -d -p 15672:15672 -p 5672:5672 --name rmq rabbitmq:3-management
```
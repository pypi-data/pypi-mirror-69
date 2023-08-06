# Shuttle Bus

A modern distributed application framework for Python.

## Build Status

| Branch | Status |
| :--- | :---: |
| master | [![master](https://github.com/jbw/shuttle-bus/workflows/Python%20package/badge.svg)](./) |
| develop | [![develop](https://github.com/jbw/shuttle-bus/workflows/Python%20package/badge.svg?branch=develop)](./) |

## Getting started

### Install

```bash
pip install shuttle-bus-rabbitmq
```

### Simple example

```python
uri = "amqp://admin:admin@localhost/"
host_settings = HostSettings.create(uri)

receive_settings = ReceiveSettings()
receive_settings.name = "queue_name"

consumer = PrintConsumer()
receive_endpoint_configuration = ReceiveEndpointConfiguration(receive_settings, consumer)

bus_configuration = BusConfiguration(host_settings)

bus = await Bus.create(bus_configuration, receive_endpoint_configuration)

await bus.start()
await bus.publish(bytes("Hello", "UTF-8"))
await bus.stop()
```

## Versioning

Shuttle Bus follows Semantic Versioning.

## Contributing

See CONTRIBUTING.md

## Builds

See [https://pypi.org/project/shuttle-bus/](https://pypi.org/project/shuttle-bus/)

## Requirements

* Python &gt;= 3.6

## Credits

* [aio-pika](https://github.com/mosquito/aio-pika)


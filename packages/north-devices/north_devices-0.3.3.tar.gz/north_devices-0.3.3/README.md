# North Devices (`north_devices`)

The `north_devices` library contains drivers and utilities for third-party devices that can be used in the North 
Robotics ecosystem.

## Installation

Run `pip install north_devices` to install, or add `north_devices` to your `requirements.txt` file.

## Pumps (`north_devices.pumps`)

### Tecan Cavro (`tecan_cavro`)

There is a driver for the Tecan Cavro series of pumps available that uses the binary protocol to communicate with 
Cavro pumps on a network.

#### Usage

```python
from ftdi_serial import Serial
from north_devices.pumps.tecan_cavro import TecanCavro

serial = Serial(baudrate=38400)  # Cavro pumps default to 9600
cavro = TecanCavro(serial, address=0, syringe_volume_ml=1000)

TecanCavro.home_all()  # Homes all TecanCavro pump instances

# you can perform absolute and relative moves in counts or mL, with optional velocity
cavro.move_absolute_counts(500)
cavro.move_absolute_ml(1000, velocity_counts=500)
cavro.move_relative_counts(100, velocity_counts=1000)
cavro.move_relative_ml(500)

# you can change valve positions with `move_valve`
cavro.move_valve(1)  # moves valve to port 1

# there is also a higher-level dispense method that pumps from a port to a port
cavro.dispense_ml(2000, from_port=1, to_port=2)

# you can also batch a series of commands to be sent at once
cavro.start_batch()
cavro.move_valve(1)
cavro.move_absolute_ml(500)
cavro.move_valve(2)
cavro.move_absolute_ml(0)
cavro.execute()  # you can use the `broadcast=True` flag to execute batch commands for all pumps at once

# there is also a basic loop command that can be used in a batch command
cavro.loop_start()
cavro.move_valve(1)
cavro.move_absolute_ml(500)
cavro.move_valve(2)
cavro.move_absolute_ml(0)
cavro.loop_end(10)  # loop 10 times

cavro.execute()

# multiple cavro instances can share the same serial connection if they are on a network
network = Serial(baudrate=9600)
cavro1 = TecanCavro(network, 0)
cavro2 = TecanCavro(network, 1)

# you can send batch commands to multiple cavros then execture them simultaneously
cavro1.start_batch()
cavro1.move_relative_ml(100)

cavro2.start_batch()
cavro2.move_absolute_ml(100)

TecanCavro.broadcast_execute(cavro1, cavro2)  # this will broadcast to all pumps if none given

```
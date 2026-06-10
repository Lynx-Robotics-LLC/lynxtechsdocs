---
sidebar_position: 1
title: Overview
---

# Hardware Overview

> Sample content. Replace with the real module specifications and part numbers.

The EtherCAT hardware modules are compact, solderable system-on-modules (SoMs)
that add a ready-to-use EtherCAT device interface to your product. You bring the
application electronics; the module handles the EtherCAT communication.

## Module family

| Model | I/O | Footprint | Notes |
| --- | --- | --- | --- |
| EC-M1 | Digital I/O | Castellated SoM | Entry-level module |
| EC-M2 | Digital + analog | Castellated SoM | Mixed-signal module |
| EC-M3 | High-speed I/O | Board-to-board connector | Performance module |

## What's on the module

- EtherCAT Slave Controller (ESC) and dual PHYs.
- Two RJ45/M8-ready ports (IN and OUT) for daisy-chaining.
- Configuration EEPROM holding the ESI (device description).
- A host interface (e.g. SPI/parallel) for your application MCU.

## Integration at a glance

1. Place the module on your carrier PCB.
2. Provide power and route the two Ethernet ports to your connectors.
3. Connect the host interface to your application processor.
4. Load/verify the device description (ESI) for your configuration.

See [PCB Integration](./pcb-integration.md) for the details.

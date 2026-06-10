---
sidebar_position: 1
title: Introduction
---

# Master Software

> Sample content. Replace with the real product description and feature list.

The **EtherCAT Master Software** is a Linux library and runtime that turns a
standard Linux machine into a fully featured EtherCAT master. It manages the
network, exchanges cyclic process data, and exposes a clean C++ API for your
control application.

## Highlights

- **Pure Linux** - runs on standard distributions; pairs well with a
  `PREEMPT_RT` kernel for real-time performance.
- **Modern C++ API** - a small, header-based interface for configuring the
  network and exchanging process data.
- **Deterministic cyclic exchange** - drive your control loop at a fixed cycle
  time.
- **Device discovery** - scan the bus and map devices to your process image.

## Architecture

```text
+---------------------------+
|   Your control app (C++)  |
+-------------+-------------+
              |  C++ API
+-------------v-------------+
|   EtherCAT Master Library |
+-------------+-------------+
              |  raw Ethernet
+-------------v-------------+
|   NIC  -->  EtherCAT bus  |
+---------------------------+
```

## Where to next

- Follow the [Getting Started](./getting-started.md) guide for installation and
  a C++ hello-world example.

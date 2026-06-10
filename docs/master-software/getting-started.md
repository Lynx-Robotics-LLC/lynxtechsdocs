---
sidebar_position: 2
title: Getting Started
---

# Getting Started

> Sample content. Commands, package names, and the API shown here are
> illustrative placeholders.

This guide shows how to install the master software and build a minimal C++
application that opens the EtherCAT master, scans the bus, and runs a simple
cyclic process-data loop.

## Prerequisites

- A Linux machine (a `PREEMPT_RT` kernel is recommended for real-time use).
- A dedicated network interface (NIC) wired to your EtherCAT network.
- A C++17 toolchain and CMake.

## Installation

```bash
# Placeholder install commands
sudo apt-get update
sudo apt-get install ethercat-master libethercat-dev
```

## Hello World (C++)

The following example opens the master on a network interface, scans for
devices, and runs a 1 ms cyclic loop that reads inputs and writes outputs.

```cpp
#include <ethercat/master.hpp>

#include <chrono>
#include <cstdint>
#include <iostream>
#include <thread>

int main() {
  // 1. Open the master on the NIC connected to the EtherCAT bus.
  ethercat::Master master;
  if (!master.open("eth0")) {
    std::cerr << "Failed to open EtherCAT master on eth0\n";
    return 1;
  }

  // 2. Scan the bus and bring the network into the operational state.
  const std::size_t device_count = master.scan();
  std::cout << "Found " << device_count << " EtherCAT device(s)\n";

  if (!master.activate()) {
    std::cerr << "Failed to activate the network\n";
    return 1;
  }

  std::cout << "Hello, EtherCAT! Starting cyclic exchange...\n";

  // 3. Run a simple 1 ms cyclic process-data loop.
  constexpr auto cycle_time = std::chrono::milliseconds(1);
  for (int cycle = 0; cycle < 1000; ++cycle) {
    auto next_wakeup = std::chrono::steady_clock::now() + cycle_time;

    // Receive the latest inputs from the devices.
    master.receive();

    // Read an input from device 0 and echo it back to an output.
    const std::uint8_t input = master.read_input<std::uint8_t>(/*device=*/0, /*offset=*/0);
    master.write_output<std::uint8_t>(/*device=*/0, /*offset=*/0, input);

    // Send the updated outputs to the devices.
    master.send();

    std::this_thread::sleep_until(next_wakeup);
  }

  // 4. Cleanly shut the master down.
  master.close();
  std::cout << "Done.\n";
  return 0;
}
```

## Building with CMake

```cmake
cmake_minimum_required(VERSION 3.16)
project(ethercat_hello_world CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

find_package(EtherCATMaster REQUIRED)

add_executable(hello_world main.cpp)
target_link_libraries(hello_world PRIVATE EtherCATMaster::EtherCATMaster)
```

Build and run:

```bash
cmake -S . -B build
cmake --build build
sudo ./build/hello_world   # raw Ethernet access typically needs root
```

## Next steps

- Read the [introduction](./introduction.md) for an architectural overview.
- See [EtherCAT Basics](../ethercat-basics/devices.md) for background on PDOs and
  devices referenced above.

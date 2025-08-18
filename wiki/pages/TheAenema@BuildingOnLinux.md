# Building Jenova Runtime On Linux

Author : [TheAenema](https://github.com/TheAenema)

---

## Builder Prerequisites

Before using **Jenova Builder** you need to install following prerequisites on both Windows and Linux.

- Python (3.10+)
- CMake (3.20+)
- Ninja (1.11+)

Additionally, the following Python packages are required for Builder :

```sh
pip install requests py7zr colored
```

You may also need to install required libraries :

```sh
sudo apt-get install libc6-dev
sudo apt-get install libssl3
sudo apt-get install libssl-dev
```



## Using the Builder

Building Jenova Runtime for Linux x64 can be done using **Jenova Builder**. To build using Jenova Builder, Install Python 3 and then use the following commands from VSCode or Terminal:

```
# Running Builder
python3 ./Jenova.Builder.py

# Build using Clang++
python3 ./Jenova.Builder.py --compiler linux-clang --skip-banner

# Build using G++
python3 ./Jenova.Builder.py --compiler linux-gcc --skip-banner
```

Jenova Runtime source code is fully compatible with both Clang++ (18+) and G++ (13+). Additionally, [Visual Studio Code](https://code.visualstudio.com/) compatibility files are provided.
<img src='frontend/public/link.png' width='75%%'>

# Linera Link — Linking Creators, Building Community

## Description

## Deployment
- Install [Rust](https://www.rust-lang.org/tools/install), [Linera](https://linera.dev/) and [Node.JS](https://nodejs.org/) on your local machine.
- Start local network and initialize local variables `LINERA_WALLET` and `LINERA_STORAGE`:
```bash
linera net up
```
- Run deploy script:
```bash
./scripts/simple.sh <working directory>
```
E.g. `./scripts/simple.sh /tmp/.tmpguVRWj`

- Start frontend:
```bash
cd frontend && npm install && npm run dev
```
Enjoy.
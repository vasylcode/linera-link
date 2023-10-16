<img src='frontend/public/link.png'>

# Linera Link — Linking Creators, Building Community
Web3 social appplication build on Linera SDK.

## Description
soon...

## Deployment
- Install [Rust](https://www.rust-lang.org/tools/install), [Linera](https://linera.dev/) and [Node.JS](https://nodejs.org/) on your local machine.
- Start local network and initialize local variables `LINERA_WALLET` and `LINERA_STORAGE`:
```bash
linera net up
```
- Clone this repository, then run deploy script:
```bash
./scripts/simple.sh <working directory>
```
E.g. `./scripts/simple.sh /tmp/.tmpguVRWj`

- Start frontend:
```bash
cd frontend && npm install && npm run dev
```
Enjoy.

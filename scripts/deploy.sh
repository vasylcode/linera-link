#!/bin/bash

# linera-link deploy script
# Usage: ./scripts/deploy.sh <0|1|2> <wallet_directory>

# set -x

if [ "$#" -ne 2 ]; then
    echo "Usage: $0 <0|1|2> <wallet_directory>"
    echo "0: Run debug without building"
    echo "1: Run debug with building"
    echo "2: Run release with building"
    exit 1
fi

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd ) && cd $SCRIPT_DIR/..
WALLET_DIR="$2"

if [ "$1" -eq 0 ]; then
    echo "Running in debug without building, wallet dir = $WALLET_DIR"
    TARGET_DIR="debug"
elif [ "$1" -eq 1 ]; then
    echo "Building in debug and then running, wallet dir = $WALLET_DIR"
    cargo build
    TARGET_DIR="debug"
elif [ "$1" -eq 2 ]; then
    echo "Building in release and then running, wallet dir = $WALLET_DIR"
    cargo build --release
    TARGET_DIR="release"
else
    echo "Invalid argument. Use 0 for debug without building, 1 for debug with building, or 2 for release with building."
    exit 1
fi

LINK_BYTE_ID=`linera publish-bytecode ./target/wasm32-unknown-unknown/$TARGET_DIR/linera-link_{contract,service}.wasm`
LINK_APP_ID=`linera create-application $LINK_BYTE_ID`

echo -e "\nLinera-Link successfully deployed!"
echo -e "Bytecode ID: $LINK_BYTE_ID"
echo -e "Application ID: $LINK_APP_ID\n"

FUNGIBLE_BYTE_ID=`linera publish-bytecode ./target/wasm32-unknown-unknown/$TARGET_DIR/fungible_{contract,service}.wasm`
FUNGIBLE_APP_ID=`linera create-application $FUNGIBLE_BYTE_ID \
    --json-argument '{ "accounts": {
        "User:445991f46ae490fe207e60c95d0ed95bf4e7ed9c270d4fd4fa555587c2604fe1": "1000.",
        "User:c2f98d76c332bf809d7f91671eb76e5839c02d5896209881368da5838d85c83f": "2000."
    } }'`


echo -e "\nLinera-Fungible successfully deployed!"
echo -e "Bytecode ID: $FUNGIBLE_BYTE_ID"
echo -e "Application ID: $FUNGIBLE_APP_ID\n"

function create_wallet() {
    WALLET=$WALLET_DIR/wallet_$1.json

    STORAGE=rocksdb:$WALLET_DIR/linera$1.db

    echo -e "\nInitialization and opening chain for wallet #$1...\n"
    linera --wallet $WALLET --storage $STORAGE wallet init --genesis $WALLET_DIR/genesis.json

    echo -e "\nCreating an unassigned keypair for wallet #$1...\n"
    PUB_KEY=`linera --wallet $WALLET --storage $STORAGE keygen`

    echo -e "\nOpening chain for wallet #$1...\n"
    CHAIN=$(linera open-chain --to-public-key $PUB_KEY 2>/dev/null)

    MES_ID=$(echo "$CHAIN" | sed -n '1 p')

    linera --wallet $WALLET --storage $STORAGE assign --key $PUB_KEY --message-id $MES_ID

    linera --wallet $WALLET --storage $STORAGE wallet show

    echo -e "\nRunning service for wallet #$1 on port :$2...\n"
    linera --wallet $WALLET --storage $STORAGE service --port $2 &
}

WALLETS=2

for ((i = 2; i <= WALLETS + 1; i++)); do
  port=$((8080 + i - 1))
  create_wallet $i $port
done

linera wallet show
linera service &

function cleanup() {
    rm -rf $WALLET_DIR
    killall -15 linera > /dev/null 2>&1
    killall -15 linera-proxy > /dev/null 2>&1
    killall -15 linera-server > /dev/null 2>&1
    echo -e "\nCleaned. Exiting.."
    exit 1
}

trap cleanup INT
read
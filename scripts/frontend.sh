#!/bin/bash

ENV_FILE=".env.local"

if [ "$#" -ne 4 ]; then
    echo "Usage: $0 <NEXT_PUBLIC_CHAIN_ID> <NEXT_PUBLIC_LINK_APP_ID> <NEXT_PUBLIC_FUNGIBLE_APP_ID> <NEXT_PUBLIC_FUNGIBLE_APP_PORT>"
    exit 1
fi

if [ -f "$ENV_FILE" ]; then
    rm "$ENV_FILE"
    echo "Existing $ENV_FILE deleted."
fi

touch "$ENV_FILE"

NEXT_PUBLIC_CHAIN_ID="$1"
NEXT_PUBLIC_LINK_APP_ID="$2"
NEXT_PUBLIC_FUNGIBLE_APP_ID="$3"
NEXT_PUBLIC_FUNGIBLE_APP_PORT="$4"

cat <<EOL > "$ENV_FILE"
NEXT_PUBLIC_CHAIN_ID="$NEXT_PUBLIC_CHAIN_ID"
NEXT_PUBLIC_LINK_APP_ID="$NEXT_PUBLIC_LINK_APP_ID"
NEXT_PUBLIC_FUNGIBLE_APP_ID="$NEXT_PUBLIC_FUNGIBLE_APP_ID"
NEXT_PUBLIC_FUNGIBLE_APP_PORT="$NEXT_PUBLIC_FUNGIBLE_APP_PORT"
EOL

mv "$ENV_FILE" "../frontend/.env.local"
echo "The $ENV_FILE file has been created with the variables and placed in ../frontend/."

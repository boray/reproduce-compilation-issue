#!/bin/bash

if [ -z "$1" ]; then
  echo "Usage: $0 <target_version>"
  exit 1
fi

TARGET_VERSION=$1

sed -i '' "s/\"o1js\": \"[^\"]*\"/\"o1js\": \"$TARGET_VERSION\"/" contracts/package.json
sed -i '' "s/\"o1js\": \"[^\"]*\"/\"o1js\": \"$TARGET_VERSION\"/" ui/package.json


echo "Updated o1js package version to $TARGET_VERSION in package.json"
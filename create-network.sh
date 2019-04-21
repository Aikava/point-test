#!/bin/bash -x
docker network create \
    --subnet 20.0.0.0/24 \
    --ipv6 --subnet fd11:dead:beef:babe::/96 \
    -o com.docker.network.bridge.enable_ip_masquerade=true \
    -o com.docker.network.bridge.enable_icc=true \
    -o com.docker.network.bridge.name=bridge_internal \
    internal

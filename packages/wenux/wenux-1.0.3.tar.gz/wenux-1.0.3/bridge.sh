#!/bin/bash

# Setup tool for the bridge, preforms cleanup if there was any
# trash from previous run.
# Configures bridge between 2 arguments supplied

echo $1
if [[ $1 == "setup" ]]; then
    #cleanup
    brctl show | grep -q "test_bridge"

    if [[ $? -eq 0 ]]; then
        echo "Previous setup detected, performing cleanup"
        ifconfig test_bridge down
        brctl delbr test_bridge
    fi

    set -e

    echo "Configuring bridge on interfaces:" $@

    brctl addbr test_bridge
    brctl addif test_bridge $2
    brctl addif test_bridge $3

    ifconfig $2 0.0.0.0
    ifconfig $3 0.0.0.0

    ifconfig test_bridge up
    ifconfig test_bridge 192.168.100.1 netmask 255.255.255.0 up

    echo "Finished configuring test_bridge"
elif [[ $1 == "teardown" ]]; then
    set -e

    echo "Tearing down the bridge used for testing"
    ifconfig test_bridge down
    brctl delbr test_bridge
else
    echo "Incorrect parameters"
fi
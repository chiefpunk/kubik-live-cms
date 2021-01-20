#!/bin/bash

##
# Print the current user
##

echo ${USER}
doctl apps update 5d1d7bf3-bb32-49ec-b7ee-71a73ecb688c --spec ./dev.yaml

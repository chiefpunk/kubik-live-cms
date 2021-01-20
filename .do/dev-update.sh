#!/bin/bash

##
# Print the current user
##

echo ${USER}
doctl apps update 40accade-9e41-49e3-818a-121720bd8efd --spec ./dev.yaml

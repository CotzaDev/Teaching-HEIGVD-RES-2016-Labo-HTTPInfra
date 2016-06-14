#!/bin/bash

if [ $1 = "run" ]; then
    docker run --name res-apache_static -d res/apache_php
    docker run --name res-node_dynamic -d res/node_beers
    docker run --name res-apache_rp --link res-apache_static:STATAPP --link res-node_dynamic:DYNAPP -p 8080:80 -d res/apache_rp
elif [ $1 = "kill" ]; then
    docker kill res-apache_static
    docker kill res-node_dynamic
    docker kill res-apache_rp
elif [ $1 = "rm" ]; then
    docker rm res-apache_static
    docker rm res-node_dynamic
    docker rm res-apache_rp
fi

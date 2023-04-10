RUTA2=/home/ubuntu/development/code/practica-vue/pictures-docker
RUTA=/Users/garellano/Desktop/development/practica-vue/pictures-docker

docker stop img
docker rm img

docker run \
-d \
-p80:80 \
--name=img \
-v $RUTA:/usr/share/nginx/html \
nginx


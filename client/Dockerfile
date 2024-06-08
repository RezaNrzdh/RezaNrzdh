FROM nginx:latest
COPY . /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/
COPY certificate.cert /etc/ssl/certs/
COPY privatekey.key /etc/ssl/certs/

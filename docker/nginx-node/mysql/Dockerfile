FROM mysql:8.0
ENV MYSQL_DATABASE=nodedb
ENV MYSQL_ROOT_PASSWORD=root
ADD script.sql /docker-entrypoint-initdb.d/script.sql
CMD ["--innodb-use-native-aio=0","--default-authentication-plugin=mysql_native_password"]
ARG PHP_VERSION

FROM php:${PHP_VERSION}

ARG NODE_VERSION

RUN apt-get -y update \
    && apt-get install -y \
        libicu-dev \
        g++ \
        zip \
        unzip  \
        libzip-dev \
        openssh-server \
        acl \
        sudo \
    && docker-php-ext-configure intl \
    && docker-php-ext-install pdo \
    && docker-php-ext-install pdo_mysql \
    && docker-php-ext-install intl \
    && docker-php-ext-install zip \
    && docker-php-ext-install opcache \
    && pecl install xdebug \
    && docker-php-ext-enable xdebug \
    && pecl install apcu \
    && docker-php-ext-enable apcu

RUN curl -fsSL https://deb.nodesource.com/setup_${NODE_VERSION} | bash -
RUN apt-get install -y nodejs build-essential

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN mkdir /var/run/sshd

# Password & Authentication
RUN useradd -G www-data -d /var/www -s /bin/bash docker
RUN echo "docker:docker" | chpasswd
RUN chown -R docker:www-data /var/www
RUN usermod -aG sudo docker
RUN setfacl -Rdm g:www-data:rwX /var/www

WORKDIR /var/www/html

COPY --chown=docker:www-data ./ /var/www/html/.

###
# Set directory write permissions
# Example for symphone
#
# RUN setfacl -dR -m u:www-data:rwX -m u:docker:rwX var
# RUN setfacl -R -m u:www-data:rwX -m u:docker:rwX var

USER docker

###
# install composer and npm packages on build
#
# RUN composer install
# RUN npm install

USER root

EXPOSE 22

ADD docker/entrypoint.sh /
RUN chmod +x /entrypoint.sh

CMD ["/entrypoint.sh"]
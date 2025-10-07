## Our wedding page

![Uptime Status](https://img.shields.io/uptimerobot/status/m801532144-8149b167f62bc39b569fe4b2)

https://zsofiesandris.hu

## Quickstart

```
$ cp .env.example .env
```

Then fill your actual values (e.g. API keys) in `.env`.

```
$ npm install
$ npm run build
$ npm run start-prod
```

Finally, open `http://localhost:3000`.

## Dependencies

### Page

- [PostHog](https://posthog.com/)
    - create an API key
- [Sentry](https://sentry.io/)
    - copy the API key from the docs/tutorial
- [Neon DB](https://neon.com/)
    - create an EU AWS DB
- [Domain](https://portal.rackforest.com/)
    - register the domain
- [Resend](https://resend.com/)
    - connect the domain (update the DNS records)
    - create an API key

### Server

- [Hostinger](https://www.hostinger.com/1)
    - deploy a VPS (configure FW)
    - point the domain to the VPS IP address (update the DNS records)
- [Caddy](https://caddyserver.com/)
    - edit the config file (see below)
- [UptimeRobot](https://uptimerobot.com/)
    - create a monitor-specific API key (only used for the status badge in this README)

## Deployment

The server is running on a [Hostinger](https://www.hostinger.com/1) VPS.

```
$ ssh root@<vps-ip> -i ~/.ssh/id_ed25519_vps
```

```
$ apt update && apt upgrade -y
$ reboot
$ curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
$ apt install -y nodejs
$ adduser --system --group --home /home/webapp webapp
$ mkdir -p /opt/zsofiesandris.hu
$ chown webapp:webapp /opt/zsofiesandris.hu
$ cd /opt/zsofiesandris.hu
$ sudo -u webapp git clone https://github.com/gemesa/zsofiesandris.hu.git .
$ # copy `.env` from Proton Pass
$ chmod 600 .env
$ chown webapp:webapp .env
$ apt install -y debian-keyring debian-archive-keyring apt-transport-https curl
$ curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
$ curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | tee /etc/apt/sources.list.d/caddy-stable.list
$ chmod o+r /usr/share/keyrings/caddy-stable-archive-keyring.gpg
$ chmod o+r /etc/apt/sources.list.d/caddy-stable.list
$ apt update && apt upgrade -y
$ apt install caddy
$ # see /etc/caddy/Caddyfile below 
$ nano /etc/caddy/Caddyfile
$ sudo -u webapp npm install
$ sudo -u webapp npm run build
$ sudo -u webapp npm install pm2
$ sudo -u webapp npx pm2 start "npm run start-prod" --name "wedding-app"
$ sudo -u webapp npx pm2 save
$ sudo -u webapp npx pm2 startup
$ env PATH=$PATH:/usr/bin /opt/zsofiesandris.hu/node_modules/pm2/bin/pm2 startup systemd -u webapp --hp /home/webapp
$ systemctl reload caddy
```

Note: port 80 and 443 [need to be open](https://caddyserver.com/docs/quick-starts/https) for Caddy while it is requesting the SSL cert.

```
$ cat /etc/caddy/Caddyfile
# The Caddyfile is an easy way to configure your Caddy web server.
#
# Unless the file starts with a global options block, the first
# uncommented line is always the address of your site.
#
# To use your own domain name (with automatic HTTPS), first make
# sure your domain's A/AAAA DNS records are properly pointed to
# this machine's public IP, then replace ":80" below with your
# domain name.

zsofiesandris.hu {
	# Set this path to your site's directory.
#	root * /usr/share/caddy

	# Enable the static file server.
#	file_server

	# Another common task is to set up a reverse proxy:
	reverse_proxy localhost:3000

	# Or serve a PHP site through php-fpm:
	# php_fastcgi localhost:9000
}

# Refer to the Caddy docs for more information:
# https://caddyserver.com/docs/caddyfile
```

### Update, rebuild and restart the server

```
$ sudo -u webapp git fetch
$ sudo -u webapp git pull
$ sudo -u webapp npm install
$ sudo -u webapp npm run build
$ sudo -u webapp npx pm2 restart wedding-app
$ sudo -u webapp npx pm2 status
```

Oneliner:

```
$ sudo -u webapp git fetch && sudo -u webapp git pull && sudo -u webapp npm install && sudo -u webapp npm run build && sudo -u webapp npx pm2 restart wedding-app
```

References:
- https://deb.nodesource.com/
- https://pm2.keymetrics.io/docs/usage/quick-start/
- https://caddyserver.com/docs/install#debian-ubuntu-raspbian

## Command cheatsheet

### Install packages

```
$ npm install
```

### Update packages

```
$ npx npm-check-updates -u
$ npm install
```

### Environment setup

```
$ cp .env.example .env
```

Then fill your actual values (e.g. API keys) in `.env`.

### Build

```
$ npm run build
```

### Run (dev)

```
$ npm run start-dev
```

### Run (prod)

```
$ npm run start-prod
```

### Lint

```
$ npm run lint
```

### Report vulnerabilities

```
$ npm audit
```

### Create the table on the remote server

```
$ npx drizzle-kit push
```

### Inspect/edit the database

```
$ npx drizzle-kit studio
```

## Troubleshooting

### Caddy

```
$ sudo journalctl -u caddy -f
```

### App

```
$ sudo -u webapp npx pm2 logs wedding-app
```

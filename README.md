## Experience Index Lite
Overly simplified implementation of an XI for the sake of initial testing with DAU sandbox.

This repo contains a Docker Compose setup for standing up a simple XI, with Expess proxied behind Nginx for SSL and the common ENV variables ready to be configured.  The scripts here assume an Ubuntu-like OS, but can be modified for others without much issue.

## Setup
Setup is pretty straightforward, we need to ensure that Docker is installed and then it handles the rest.  SSL is also pretty quick, but does take a few more steps.

### tl;dr:
- `git clone https://github.com/adlnet/xi-lite`
- `cd xi-lite`
- `sudo ./install-reqs.sh`
- `cp example.env .env`
- Populate the `.env` file (see below)
- `sudo ./init-ssl.sh <HOSTNAME>` (see below)
- `sudo docker-compose up -d --build`

### Setting the Config Values
The repo comes with an `example.env` file that you will want to (but really should) configure.  Each service has a few properties exposed by default, but you can refer to the Docker Hub docs for each to add more.

Service|Variable|Why am I setting this?
-|-|-
**Nginx**|`HOSTNAME`|Domain name of the machine used to host this stack, can be `localhost`
**XI**|`DB_CONTAINER`|Name of the database container for reference. 
**XI**|`DB_NAME`|Name of the database in the database container.
**XI**|`COLLECTION_NAME`|Name of the mongo db collection.
**XI**|`SITE_ROOT`|Url root for the XI service, optional.
**XI**|`SITE_NAME`|Name for the html title.

### Setting up SSL
This stack uses Certbot and Nginx to handle SSL, including temporary self-signed certs to help the process along.  We run the `init-ssl.sh` script during setup to place these into a directory corresponding to Nginx's `HOSTNAME` variable.  

With that, the stack can start without issue but to get an actual SSL cert from Certbot:
```
sudo ./certbot/generate.sh <HOSTNAME>
```

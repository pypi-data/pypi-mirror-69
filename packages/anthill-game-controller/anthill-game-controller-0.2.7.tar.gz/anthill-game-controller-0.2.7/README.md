# Game Controller
Game Controller is a second part of Game Service. 

Unlike other projects of the platform, this project uses Docker.
To install it on any host, install docker first, then create this Dockerfile:
```dockerfile
FROM anthillplatform/game-controller:latest
... extra deps for your game you might be having ...
COPY brainout/anthill.pub ./
ENV connection_password=<password>
ENTRYPOINT [ "python", \
    "-m", "anthill.game.controller.server", \
    "--auth-key-public=anthill.pub", \
    "--discovery-service=https://<your public discovery service>", \
    "--connection-username=<username>", \
    "--connection-gamespace=<gamespace-alias>"]
```

Make sure to pup `anthill.pub` next to it. Then run:
```bash
docker build -t anthill-game-controller .
```

Once the image is built, run it:
```bash
docker run -d --name anthill-game-controller \
    --network host --hostname `hostname` --restart=always -i \
    -v /var/log/gameserver:/var/log/gameserver \
    -v /usr/local/anthill:/usr/local/anthill \
    anthill-game-controller
```

You now can see logs via `docker logs --follow <container-id>`.
Logs for the game servers themselves can bee seen on `/var/log/gameserver`.

See <a href="https://github.com/anthill-platform/anthill-game-master#game-service">Game Service</a> for more information.

## API

Please refer to the <a href="doc/API.md">API Documentation</a> for more information.

## Overall Architecture

<center>
<img src="https://cloud.githubusercontent.com/assets/1666014/26266946/613bc5a0-3cf0-11e7-9c1e-59e403ea5bdd.png" width="954">
</center>
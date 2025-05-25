# Self-hosting

A private web server.

[I wrote a blog on how I self-hosted one of my web server](/blog/2025/05/25/self-host).
It includes my notes and thought process from purchasing a domain, renting a
server on [Hetzner](https://hetzner.cloud/?ref=YMRI7xo3b2af), building docker
images, running database and web server, configuring DNS, firewall and Nginx,
and use of monitoring tools like
[Netdata](https://netdata.cello.so/m3g8ZJvzrI9).

## Resources

- [Intro to self-hosting. How to get started hosting your applications](https://boringtech.net/blog/intro-to-self-hosting-how-to-get-started-hosting-your-applications/)
  - Get the basics, examples and advantages
  - Handling IP, SSH, reverse proxy, backups, containers, automations and
    security
- [Self-hosting guide](https://github.com/mikeroyal/Self-Hosting-Guide)
  - Detailed guide on different aspect of self-hosting

## Sites

- [awesome-selfhosted](https://github.com/awesome-selfhosted/awesome-selfhosted)
  — List of web applications that can be self-hosted
- [awesome-sysadmin](https://github.com/awesome-foss/awesome-sysadmin) — List of
  sysadmin resources
- [r/selfhosted](https://www.reddit.com/r/selfhosted/),
  [r/HomeServer](https://www.reddit.com/r/HomeServer/) — Reddit sub
- [slefh.st](https://selfh.st/) — Newsletter

## Links

- [Self-hosting in 2023](https://grifel.dev/decentralization/)
  ([HN](https://news.ycombinator.com/item?id=34860655))
  - Interesting read. Self-host a blog with Raspberry Pi, Coolify for deployment
    and DDClient to solve the problem of a dynamic IP
- [Self-hosted is awesome](https://pixeljets.com/blog/self-hosted-is-awesome/)
  - Hetzner setup, docker applications, nginx host, cloudflare DNS
- [My self-hosted websites architecture](https://cprimozic.net/blog/my-selfhosted-websites-architecture/)
  - OVH cloud, nginx reverse proxy, DNS & networking, external CDN for high
    traffic static sites
  - Hosting websites, databases, plausible for analytics, sentry for error
    alerts, personal utils
  - Handling security, monitoring, backup and disaster recovery
- [Repurpose your old laptop into a home server](https://jakew.me/home-server/)
  - Ubuntu server, install docker, run Plex and secure remote connection with
    tailscale

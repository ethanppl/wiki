# Computer Network

Communications between computers.

## Resources

- [The Internet, explained from first principles](https://explained-from-first-principles.com/internet/)
  - Starting from protocols to the OSI models
  - The key concepts of each layer and plenty of links to external resources
- [Computer Networking: A Top-Down Approach Course](https://gaia.cs.umass.edu/kurose_ross/lectures.php)
  - A textbook about the fundamentals of computer networking in the OSI model
  - Application, transport, network, and link layer
  - Contains videos, PowerPoints and Wireshark labs
- [Beej's Guide to Network Concepts](https://beej.us/guide/bgnet0/html/split/)
  - Basic network concepts with some projects done in Python

## Sites

- [The ISP Column | Geoff Huston](https://www.potaroo.net/ispcol/index.html)

## Links

- [See this page fetch itself, byte by byte, over TLS](https://subtls.pages.dev/)
  ([HN](https://news.ycombinator.com/item?id=35884437))
  - Annotated live demo of an HTTPS request, with handshakes, key exchanges,
    certificate validation, decryption, etc.
- [Well-known URI](https://en.wikipedia.org/w/index.php?title=Well-known_URI#List_of_well-known_URIs)
  - A generic and extendable version of `robots.txt` to expose information at a
    "well-known location"
  - For example, `./well-known/change-password` to provide the URL for changing
    a password
- [VPN relationship map 2023 | Windscribe](https://windscribe.com/vpnmap)
  - Ownership, paid affiliates, cooperation & partnerships between VPN companies
- [It's always `TCP_NODELAY`. Every damn time.](https://brooker.co.za/blog/2024/05/09/nagle.html)
  ([HN](https://news.ycombinator.com/item?id=40310896))
  - Disable Nagle's algorithm, on delaying sending data until an `ACK` is
    received
  - Problem is it works terribly with delayed `ACK`, and optimizations is
    already pushed to application layer. We seldom send packets that the header
    takes more space than the data
- [The New Internet | Tailscale](https://tailscale.com/blog/new-internet)
  - A commentary on how Tailscale can redesign the Internet, to simplify it
  - Things that are improved and things that are worse while we have more
    abstractions. Tailscale vision to redesign the Internet because it is now
    centralized in cloud providers hand

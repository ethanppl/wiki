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

- [IP Guide](https://ip.guide/) — Internet numbers, can try
  `curl -sL ip.guide/<ip-address>`

## Links

- [I spent a week without IPv4 to understand IPv6 transition mechanisms](https://www.apalrd.net/posts/2023/network_ipv6/)
  ([HN](https://news.ycombinator.com/item?id=35041829))
  - Advantages for the home lab network: avoid the problems from network address
    translation (NAT)
  - Transition mechanisms: dual stack, stateless IP/ICMP transition, NAT64,
    464XLAT
- [See this page fetch itself, byte by byte, over TLS](https://subtls.pages.dev/)
  ([HN](https://news.ycombinator.com/item?id=35884437))
  - Annotated live demo of an HTTPS request, with handshakes, key exchanges,
    certificate validation, decryption, etc.
- [Implement DNS in a weekend | Wizard Zines project](https://implement-dns.wizardzines.com/)
  ([HN](https://news.ycombinator.com/item?id=35916064))
  - Build a DNS query in bytes, parse the response, implement a custom resolver
- [Well-known URI](https://en.wikipedia.org/w/index.php?title=Well-known_URI#List_of_well-known_URIs)
  - A generic and extendable version of `robots.txt` to expose information at a
    "well-known location"
  - For example, `./well-known/change-password` to provide the URL for changing
    a password
- [The Secret Life of the 500+ Cables that Run the Internet | CNET](https://www.cnet.com/home/internet/features/the-secret-life-of-the-500-cables-that-run-the-internet/)
  - A simple explanation of subsea cables. How they work, how they are
    installed, geopolitical complications, etc.
- [Why is DNS still hard to learn? | Julia Evans](https://jvns.ca/blog/2023/07/28/why-is-dns-still-hard-to-learn/)
  - It has been operating the same way for 30 years, it's still hard to learn
    because of the hidden details
  - Some tips from the author to deal with hidden systems, confusing tools and
    some weird gotchas
- [VPN relationship map 2023 | Windscribe](https://windscribe.com/vpnmap)
  - Ownership, paid affiliates, cooperation & partnerships between VPN companies
- [The invisible seafaring industry that keeps the internet afloat | The Verge](https://www.theverge.com/c/24070570/internet-cables-undersea-deep-repair-ships)
  - Long form writing of the ~20 ships that maintains subsea cables
  - How the ships operates, stories of incidents and the aging problem of ships
    and people
  - If done correctly, despite being vital to the internet, their work will
    continue to be unnoticed
- [It's always `TCP_NODELAY`. Every damn time.](https://brooker.co.za/blog/2024/05/09/nagle.html)
  ((HN)[https://news.ycombinator.com/item?id=40310896])
  - Disable Nagle's algorithm, on delaying sending data until an `ACK` is
    received
  - Problem is it works terribly with delayed `ACK`, and optimizations is
    already pushed to application layer. We seldom send packets that the header
    takes more space than the data
- [6 DNS concepts](https://jonahdevs.com/youre-closer-than-you-think-the-only-6-dns-concepts-you-really-need/)
  - `A`, `CNAME`, `MX`, `TXT`, `NX`, `TTL`
- [The New Internet | Tailscale](https://tailscale.com/blog/new-internet)
  - A commentary on how Tailscale can redesign the Internet, to simplify it
  - Things that are improved and things that are worse while we have more
    abstractions. Tailscale vision to redesign the Internet because it is now
    centralized in cloud providers hand

Ethernet

- YouTube:
  [Ethernet (50th Birthday) | Computerphile](https://youtu.be/TkOVgkcrvbg)
  - The original Ethernet algorithm. Designed around a shared bus, using
    exponential backoff for media access control, etc.
- [Happy 50th Birthday, Ethernet](https://blog.apnic.net/2023/06/29/happy-50th-birthday-ethernet/)
  ([HN](https://news.ycombinator.com/item?id=36517832))
  - The innovation and evolution of Ethernet over 50 years
  - No clock, any data size, carrier sense multiple access/collision detection
    (CSMA/CD), unique MAC, and other evolutions

HTTP/3 and QUIC

- [HTTP/2 and HTTP/3 explained](https://alexandrehtrb.github.io/posts/2024/03/http2-and-http3-explained/)
  - HTTP/1.1: persistent TCP connections, `Host`, header conventions
  - HTTP/2: streams and frames for multiplexing many messages in a TCP packet
  - HTTP/3: solving TCP head-of-line blocking with UDP, moving integrity from
    transport layer to the application layer, designed for unstable connections
- [HTTP/3 | http.dev](https://http.dev/3)
  - Changes explained: congestion control, session resumption, connection
    migration, etc.
- [Y'all are sleeping on HTTP/3](https://kmcd.dev/posts/yall-are-sleeping-on-http3/)
  - HTTP/3 and QUIC adoption is fast, where major browsers, cloud providers and
    load balancers support it
  - Benefits: faster connection, 0-RTT resumption, multiplexing
  - UDP is unreliable but QUIC build the same guarantees on top without the
    limitation of TCP
- Original RFCs:
  - [RFC9114: HTTP/3](https://datatracker.ietf.org/doc/html/rfc9114)
  - [RFC9000: QUIC](https://datatracker.ietf.org/doc/html/rfc9000)
- [How does browser know which version of HTTP it should use when sending a request?](https://superuser.com/questions/1659248/how-does-browser-know-which-version-of-http-it-should-use-when-sending-a-request)
  - HTTP/2: A TLS feature called ALPN to list supported protocol during TLS
    handshake
  - HTTP/3: HTTP/2 initially, `Alt-Svc` response header from server listing `h3`
    and the UDP/QUIC port, client upgrade to new UDP/QUIC port and close the
    original h1.x or h2 TCP connection

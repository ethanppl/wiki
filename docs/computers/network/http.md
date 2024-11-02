# HTTP

Hypertext Transfer Protocol

## Resources

- [HTTP/2 Explained | Daniel Stenberg](https://http2-explained.haxx.se/en/part1)
  - Explaining the transition from HTTP/1 to HTTP/2, by the creator of curl
  - From the problems of HTTP/1, potential solutions, SPDY, concepts and
    changes, critiques, etc.
- [HTTP/3 Explained | Daniel Stenberg](https://http3-explained.haxx.se/en)
  - Explaining the transition from HTTP/2 to HTTP/3, by the creator of curl
  - From head of line blocking in TCP, to using QUIC and UDP, pros and cons of
    HTTP/3
  - Features like connections, streams, 0-RTT, spin bits, etc.

## Links

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

# Network Layer

DNS, IP, routing, etc.

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
- [Implement DNS in a weekend | Wizard Zines project](https://implement-dns.wizardzines.com/)
  ([HN](https://news.ycombinator.com/item?id=35916064))
  - Build a DNS query in bytes, parse the response, implement a custom resolver
- [Why is DNS still hard to learn? | Julia Evans](https://jvns.ca/blog/2023/07/28/why-is-dns-still-hard-to-learn/)
  - It has been operating the same way for 30 years, it's still hard to learn
    because of the hidden details
  - Some tips from the author to deal with hidden systems, confusing tools and
    some weird gotchas
- [6 DNS concepts](https://jonahdevs.com/youre-closer-than-you-think-the-only-6-dns-concepts-you-really-need/)
  - `A`, `CNAME`, `MX`, `TXT`, `NX`, `TTL`
- [IPv6 Transition](https://www.potaroo.net/ispcol/2024-10/ipv6-transition.html)
  - A long read about history and current transition from v4 to v6
  - There is no urge to fully transition to v6, the dual-stack setup will exist
    for decades
  - Because IPv6 is not critical and no monetary incentive to a large set of end
    users service delivery

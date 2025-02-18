# Write-ups

I don't know what to call these.

A collection of stories that people share about their investigations.

## Links

- [Who made these circles in the Sahara? | Vox](https://youtu.be/twAP3buj9Og)
  - Seismic survey? Ancient wells? Ancient tombs? Qanat?
- [Wifi without internet on a Southwest flight](https://jamesbvaughan.com/southwest-wifi/)
  ([HN](https://news.ycombinator.com/item?id=37691232))
  - Wi-Fi without internet but contains flight data
  - HN thread: Ways of people using Wi-Fi without authentication
  - HN thread: Ways of people using visualizing flight data with similar API
  - Check [PySkyWiFi](https://robertheaton.com/pyskywifi/) as well in
    [side projects](./side-projects.md)
- [What's the touchscreen in my room?](https://laplab.me/posts/whats-that-touchscreen-in-my-room/)
  - Poorly designed IoT systems that user gain root access with something called
    `tcf-agent`
  - [The Internet of Unprofitable Things](https://strugglers.net/~andy/blog/2018/12/24/the-internet-of-unprofitable-things/)
    - Another interesting story of the same company "NetThings" misusing the NTP
      protocol
- [Thanks FedEx, This is Why we Keep Getting Phished](https://www.troyhunt.com/thanks-fedex-this-is-why-we-keep-getting-phished/)
  - Is this a phishing message or is this legit from FedEx?
  - Scammers pretend to be legit while FedEx is like they are imitating scammers
- [What happens to the coins tossed into Rome's Trevi Fountain? | Reuters The Wider Image](https://www.reuters.com/investigates/special-report/italy-fountain-coins/)
  - 1.4 million Euros a year. It goes to charity
- [Car allergic to vanilla ice cream](https://www.cs.cmu.edu/~wkw/humour/carproblems.txt)
- [The Wi-Fi only works when it's raining](https://predr.ag/blog/wifi-only-works-when-its-raining/)
- [The Time I Build an ROV to Solve Missing Person Cases](https://suanto.com/2024/06/06/the-time-I-built-an-ROV-01/)
  ([HN](https://news.ycombinator.com/item?id=40623864))
  - Long, 13 parts blog but very interesting read
  - From the learnings at each stage, to planning and investigating, and the
    story telling is good
- [Reverse Engineering TicketMaster's Rotating Barcodes (SafeTix)](https://conduition.io/coding/ticketmaster/)
  ([HN](https://news.ycombinator.com/item?id=40906148))
  - Decoding the barcode to token + 2 TOTPs + timestamp
  - Finding the TOTP shared key in the TicketMaster app
  - Generating barcode offline as long as the token didn't change
- [Reliable Sources: How Wikipedia Admin David Gerard Launders His Grudges into the Public Record](https://www.tracingwoodgrains.com/p/reliable-sources-how-wikipedia-admin)
  - Using bureaucracy and policies like citing reliable sources to alter public
    record
  - Stories over the year when Gerard leave traces over the Internet
  - Wikipedia and maybe the Internet as a whole is insufficient to deal with a
    motivated bad-faith actor
- [Jailbreaking RabbitOS: Uncovering Secret Logs and GPL violations](https://www.da.vidbuchanan.co.uk/blog/r1-jailbreak.html)
  ([HN](https://news.ycombinator.com/item?id=40987730))
  - Jailbreaking by exploiting the insecure boot chain, subsituting data between
    verification and use
- [Troubleshooting: Terminal Lag](https://lock.cmpxchg8b.com/slowterm.html)
  ([HN](https://news.ycombinator.com/item?id=41114569))
  - Finding out why `xterm` in WSL is slower than in Fedora
  - Slow window effects, potential slow profile features, tuning with
    `hyperfine`
- [Debugging An Undebuggable App](https://bryce.co/undebuggable/)
  ([HN](https://news.ycombinator.com/item?id=43081713))
  - [YouTube video](https://youtu.be/ih6gWZDuNME)
  - The iOS app blocks debugger, exits if inject code and crashes the whole
    phone if running on jailbroken device
  - Interesting on how syscall is used to disable debugger, crash the phone,
    etc.

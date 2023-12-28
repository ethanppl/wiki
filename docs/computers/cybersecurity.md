# Cybersecurity

Hack?!

I played CTF challenges for around a year to realize I am not as talented in
finding flaws. It requires a lot of knowledge in multiple fields and a
completely different mindset to approach problems, but it's fun.

## Sites

- [OWASP](https://owasp.org/) — Open Web Application Security Project
- [Have I Been Pwned?](https://haveibeenpwned.com/) — Check breached
  accounts/emails/passwords

## Links

- [Capturing the flag with GPT-4](https://micahflee.com/2023/04/capturing-the-flag-with-gpt-4/)
  ([HN](https://news.ycombinator.com/item?id=35683265))
  - Three challenges: Sharmir's secret sharing scheme, writing Perl script to
    decode Perl storable files and a series of shell hurdles (Linux command line
    tricks)
- [Is Cybersecurity an Unsolvable Problem?](https://arstechnica.com/features/2023/05/is-cybersecurity-an-unsolvable-problem/)
  - A chat with philosopher Scott Shapiro about his book: Fancy Bear Goes
    Phishing
  - One interesting idea is perfect cybersecurity might not be possible because
    of the duality of symbols. The same set of symbols (bits) is used to
    represent both instructions and data, which makes general computing devices
    possible, yet it also makes hacking possible
- [Cold boot ram theft](https://www.theregister.com/2023/06/09/cold_boot_ram_theft/)
  - Rip data out of RAM chips by freeing the chip
  - Decryption keys, bootloader code, data, stack and heap are all in the
    physical memory
  - Physical memory encryption, like Xbox and PS5 game consoles, can counter it,
    but most CPUs on the planet don't do that
- [How early PayPal was nearly devastated by a security upgrade | Max Levchin](https://max.levch.in/post/724289457144070144/shamir-secret-sharing-its-3am-paul-the-head-of)
  - Max Levchin, one of the co-founders of PayPal, implemented a Shamir Secret
    Sharing protocol to replace a passphrase
  - During the migration, something went wrong that almost locked the whole DB
  - Turns out there is an incompatibility between Linux and Solaris. "Shoulda
    RTFM".
- [Short session expiration does not help security](https://www.sjoerdlangkemper.nl/2023/08/16/session-timeout/)
  ([HN](https://news.ycombinator.com/item?id=37173339))
  - It could not prevent problems caused by XSS, leaked logs, shared computers,
    etc.
  - Requiring frequent re-authentication has risks as well
  - Facebook, Google, Amazon and GitHub have sessions that last forever as well
- [Any sufficiently advanced uninstaller is indistinguishable from malware](https://devblogs.microsoft.com/oldnewthing/20230911-00/?p=108749)
  ([HN](https://news.ycombinator.com/item?id=37491862))
  - An uninstaller that self-deleting with code injection is indistinguishable
    from malware
  - There is a `js` file example of how to delete itself and other files, leave
    no race, without code injection
- [When MFA isn't actually MFA | Retool](https://retool.com/blog/mfa-isnt-mfa/)
  ([HN](https://news.ycombinator.com/item?id=37500895))
  - Google's update to backup MFA secrets to cloud means MFA becomes a
    single-factor-authentication
  - Getting access to the Google account once is enough to control all OTPs
    stored in Google Authenticator
- [A strange sign of times](https://www.abc.net.au/news/2023-09-23/cybersecurity-troy-hunt-have-i-been-pwned-fighting-data-breaches/102803748)
  - The story of Troy Hunt, the guy behind Have I Been Pwned
  - The story of the site, the threats and stress, and the problem of relying on
    1 guy to guard the web
- [How it works: The novel HTTP/2 'Rapid Reset' DDoS Attack](https://cloud.google.com/blog/products/identity-security/how-it-works-the-novel-http2-rapid-reset-ddos-attack)
  - [Google mitigated the largest DDoS attack to date, peaking above 398 million rps](https://cloud.google.com/blog/products/identity-security/google-cloud-mitigated-largest-ddos-attack-peaking-above-398-million-rps)
  - Enabled by HTTP/2 stream multiplexing, where a request/connection can open
    multiple streams, increasing throughput
  - What attacker did is opening streams + rapidly resetting streams, a
    connection can then have infinite amount of requests, as cancelling previous
    requests means it never exceeds the max concurrent connection but always
    keep the connection open
- [Stop deploying web application firewalls](https://www.macchaffee.com/blog/2023/wafs/)
  - WAFs are slow, ineffective, unsafe and noisy
  - Instead, isolate application, immutable system, static analysis in CI, and
    capability-based security
- [Security at Startup](https://vadimkravcenko.com/shorts/security-at-startup/)
  - Different levels of security configuration for different phases of startup

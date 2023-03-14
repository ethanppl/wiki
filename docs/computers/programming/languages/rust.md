# Rust

A multi-paradigm, high-level, general-purpose programming language, with no
runtime and garbage collector.

## Resources

- [Official Getting Start Guide](https://doc.rust-lang.org/book/)
  - A getting start guide provided by the official Rust team
- [Command Line Rust](https://www.oreilly.com/library/view/command-line-rust/9781098109424/)
  - Replicating 14 command line tools in Rust with `clap` crate
  - Emphasize test-driven development
  - [All the code is available on GitHub](https://github.com/kyclark/command-line-rust)
  - In my opinion, a pretty good way to get started on Rust for people with some
    programming experience
  - It gradually introduces the key concepts and the standard library in each
    chapter

## Site

- [rust-lang.org](https://www.rust-lang.org/)
  - Official website of Rust
  - Contains links to the [getting start book](https://doc.rust-lang.org/book/)
    and the [playground](https://play.rust-lang.org/)

## Links

Guides

- [Nothing in Rust](https://geeklaunch.io/blog/nothing-in-rust/)
  - Possible "nothing" state in rust, like `null` in other languages
  - `PhantomData`, `Option::None`, empty tuple, never type
- [Getting Past "Ampersand-Drive Development" in Rust](https://fiberplane.com/blog/getting-past-ampersand-driven-development-in-rust)
  ([Lobster](https://lobste.rs/s/mfd2jr/getting_past_ampersand_driven))
  - The difference between `self`, `mut self`, `&self`, `&mut self`
  - Reference-counted pointer `Rc` and atomically reference-counted pointer
    `Arc`

Blogs

- [Switching From C++ to Rust](https://laplab.me/posts/switching-from-cpp-to-rust/)
  ([Lobster](https://lobste.rs/s/aszkl9/switching_from_c_rust))
  - Comparing from the perspective of the build system, the compiler, and the
    type system

# Elixir

A functional, concurrent, high-level general-purpose programming language that
runs on the BEAM virtual machine, which is also used to implement the Erlang
programming language.

## Sites

- [https://elixir-lang.org/](https://elixir-lang.org/)
  - The official website for Elixir
  - Contains the documentation, installation guide, and other resources
  - [Official Getting Started Guide](https://elixir-lang.org/getting-started/introduction.html):
    A comprehensive guide to getting started with Elixir
- [https://elixir-radar.com/](https://elixir-radar.com/) — weekly Elixir
  newsletter

## Links

- [A Brief Guide to OTP in Elixir](https://serokell.io/blog/elixir-otp-guide)
  - What is OTP? Erlang actor model based on lightweight processes
  - Concepts: Processes, GenServer, Supervisor
- [How much memory is needed to run 1 million Erlang processes](https://hauleth.dev/post/beam-process-memory-usage)
  - Optimize the memory usage of Elixir's process to get a 30% improvement over
    a sample code
  - Not an idiomatic way to write code, but touch upon a lot of low-level
    details of how processes work
- [Why the dot when calling anonymous functions?](https://dashbit.co/blog/why-the-dot)
  ([HN](https://news.ycombinator.com/item?id=37122006))
  - To disambiguate, to distinguish anonymous functions and normal functions,
    given the Lisp-2 approach that Elixir has
  - Without the dot, Elixir still doesn't have the expressiveness of Lisp-1, but
    also losses the clarity of Lisp-2
- [Elixir at Ramp](https://engineering.ramp.com/elixir-at-ramp)
  - The reason why Elixir in chosen in Ramp: BEAM, OPT, Dev Ex, macros, sigils,
    immutability, modules, etc.
  - [Technical Storytelling: Making of Elixir at Ramp](https://morepablo.com/2023/03/technical-storytelling-making-of-elixir-at-ramp.html)
- [To spawn or not](https://www.theerlangelist.com/article/spawn_or_not)
  - Functions & modules for domain concerns. Processes for runtime concerns.
  - E.g. a game can involve many states and can have many processes to keep
    track of the states, but the game state is highly synchronized. It makes
    more sense to keep the game as 1 state while having functions and modules to
    manage the state

# Kotlin

Better than Java in most cases.

## Links

- YouTube:
  [Introduction to Coroutines | Roman Elizarov](https://youtu.be/_hfBv0a09Jc)
  (45:31)
  <details>

  <summary>Notes</summary>
  - Async programming:
    - We live in a world that need async programming
    - Threads: cannot handle a large amount of concurrent work
    - Callbacks: function being called when ready, but leads to callback hell
    - Futures/Promises/Rx: provides concise syntax, but many custom combinators
    - Kotlin design coroutines to solve these problems
  - `suspend`: 
    - Marks a function as asynchronous
    - The function will suspend and return later
    - It hides the suspension points (no await)
    - Writing non-blocking code as if they are blocking code
  - Composition: take a suspendable lambda block as argument
  - Coroutine Builders: to bridge the blocking and non-blocking world
    - `launch`: fire and forget
    - Coroutine context: specify which pool of threads to run on
  - Why not the `async/await`?
    - Syntax wise, the differences are the additional `async` and `await` keywords
    - And crucially, the return type is difference
    - The return type is either `Task<T>` or `T`
    - The problem is the concurrent and sequential behaviors are mixed
    - Kotlin coroutines design to imitate sequential syntax, i.e. it always return `T`, and concurrency (returning type `Deferred<T>`) has to be explicit
  - Kotlin async function:
    - Define a non suspending function with the `Async` suffix as a convension
    - This `Async` function returns a future/deferred
    - Kotlin call the future/promise as `Deferred`
    - `async`: another coroutine builder that return a deferred type
    - Then use `.await()` to wait for the result
    - Kotlin approach is to make the `async` explicit to the user
  - Think of coroutines as very light-weighted threads, scaling in ways that threads cannot do
  - Coroutine can interop with java using the `future` coroutine builder
  - Beyond asynchronous programming, can use `buildSequence` with suspend function and `yield` to create iterators
    
  </details>

- YouTube:
  [Deep Dive into Coroutines on JVM | Romand Elizarov](https://youtu.be/YrrUCSi72E8)
  (45:17)

  <details>

  <summary>Notes</summary>
  - Direct style:
    - Write the action and what happens after directly
    - Continuation: the "what happens after the action"

      ```kt
      fun postItem(item: Item) {
        val token = requestToken() // action

        // continuation
        val post = createPost(token, item)
        processPost(post)
      }
      ```

  - Continuation passing style
    - Pass the continuation as an argument, like callbacks
      ```kt
      fun postItem(item: Item) {
        requestToken { token ->
          // continuation
          val post = createPost(token, item)
          processPost(post)
        }
      }
      ```
  - CPS transformation
    - Coroutines let you write continuation in direct style
    - A suspend function is converted to the same function with an additional
      `Continuation` parameter
    - Continuation is just a callback
  - Some explanation to how suspend function is compiled
    - Add labels to the code at each suspension point
    - Create a state machine that is a continuation
    - When a suspend function completes, it invokes the continuation
    - The state machine invoke the same parent suspend function with the updated
      state
    - The execution flow jumps to the next label with the new states
    - State machine is better than callbacks because there are less closure and
      object creation
    - Labels also make it easier to support loops and higher-order functions
  - `suspendCoroutine`: implement `.await()` for function returning futures
    - Can convert existing code that returns future to suspend functions
    - All futures have callbacks behind the scene, resume the continuation in
      those callbacks
    - `suspendCoroutine { cont -> ... }` with `cont.resume()` or
      `cont.resumeWithException()`
  - Coroutine context
    - When there was no context, the thread that the continuation runs depends
      on where it was resumed from the previous action callbacks, e.g. where the
      retrofit thread pool invoke the callback
    - Continuation interceptor: resuming a continuation will submit a task to a
      dispatcher
    - Which can then intercept the resumption and executing on another thread
  - `startCoroutine`: building coroutine builders
    - Can convert suspend functions to return a specific custom future type
    - Think of it as the opposite of `suspendCoroutine`
    - By implement the context and how this coroutine returns when resumed
  - Job cancellation
    - `launch` returns a job, and job is part of the coroutine context
    - Job can be cancelled with `.cancel()` and joined with `.join()`
    - Cancellation are cooperative in coroutines
    - `suspendCancellableCoroutine`: cancellable version that takes
      `invokeOnCancellation`
  - Communicating Sequential Processes (CSP)
    - A style of program to shift from shared mutable state to share by
      communicating
    - `val channel = Channel()` and `channel.send()`
  - Actors:
    - CSP uses named channels
    - Actors are named coroutines with an inbox channel
    - `val printer = actor { }` and `printer.send()`

  </details>

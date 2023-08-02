# Conferences

Explaining good software design, especially with functional programming (e.g.
Elm).

## Links

- [Domain Modeling Made Functional | Scott Wlaschin](https://youtu.be/PLFl95c-IiU)

  <details>
  <summary>Notes</summary>

  - How can this be improved?

    ```fsharp showLineNumbers
    type Contact = {
      FirstName: string
      MiddleInitial: string
      LastName: string

      EmailAddress: string
      IsEmailVerified: bool
      }
    ```

  - A data structure that represents design choice:

    ```fsharp showLineNumbers
    type String50 = String 50 of string

    let createString50 (s: string) =
      if s.Length <= 50
        then Some (String50 s)
        else None

    createString50:
      string -> String50 option
    ```

    or:

    ```fsharp showLineNumbers
    let createEmailAddress (s: string) =
      if s.Contains "@"
        then Some (EmailAddress s)
        else None

    createEmailAddress:
      string -> EmailAddress option
    ```

  - Union types:

    ```fsharp showLineNumbers
    type VerifiedEmail = VerifiedEmail of EmailAddress
    type VertificationService =
      (EmailAddress * Verificationhash) -> VerifiedEmail option

    type EmailContactInfo =
      | Unverified of EmailAddress
      | Verified of EmailAddress
    ```

  - A data structure that represents a business rule:

    ```fsharp showLineNumbers
    type Contact = {
      Name: PersonalName
      Email: EmailContactInfo
      }

    type PersonalName = {
      FirstName: String50
      MiddleInitial: String50 option
      LastName: String50
      }
    ```

  </details>

- [Make Impossible States Impossible | Richard Feldman](https://youtu.be/IcgmSRJHu_8)

  <details>
  <summary>Notes</summary>

  Make impossible states impossible

  <details>
  <summary>We need to restore a recently deleted input</summary>

  - Bad design:

    ```elm showLineNumbers
    type Model =
      { status: Maybe String
      , questionToRestore: Maybe SurveyQuestion
      }
    ```

  - Happy path:

    ```elm showLineNumbers
    { status = Just "Question deleted"
    , questionToRestore = Just someQuestion
    }

    { status = Nothing
    , questionToRestore = Nothing
    }
    ```

  - Impossible path but possible in code:

    ```elm showLineNumbers
    { status = Nothing
    , questionToRestore = Just someQuestion
    }

    { status = Just "Question deleted"
    , questionToRestore = Nothing
    }
    ```

  - Proper solution: union types

    ```elm showLineNumbers
    type Status
      = NoStatus
      | DeletedStatus String Question
    ```

  </details>

  <details>
  <summary>Zip list: maintaining a history (go back, current, next)</summary>

  - Bad design:

    ```elm showLineNumbers
    type History =
      { questions: List Question
      , current: Question
      }
    ```

  - Happy path:

    ```elm showLineNumbers
    { questions = [q1, q2, q3]
    , current = q2
    }
    ```

  - Impossible path but possible in code:

    ```elm showLineNumbers
    { questions = []
    , current = q1
    }
    ```

  - Better solution: zip list, two lists with 1 element. Impossible to have a
    non-existing element.

    ```elm showLineNumbers
    type History =
      { previous: List Question
      , current: Question
      , remaining: List Question
      }

    -- example
    { previous: [q1, q2]
    , current: q3
    , remaining: [q4, q5]
    }
    ```

  </details>

  - No break changes:
    - Implement a zip list internally in a module and expose an interface for
      other modules
    - Other modules can only interact with back and forward functions
    - The internal implementation can change without breaking the interface

  </details>

- [Convergent Evolution | Evan Czaplicki](https://youtu.be/jl1tGiUiTtI)

  <details>
  <summary>Notes</summary>

  - Convergent Evolution: people working independently converge to similar
    solutions without prior knowledge of each other
    - Flying seems a neat idea, so bees and birds both have wings
    - But bees and birds have very different "implementation details"
    - The key is not to determine which one "implemented" flying better but to
      consider how the design of wings fit into other "features" of the design
  - In Elm and React, both similarly have virtual DOM but implemented and look
    very differently
  - JavaScript has C-style syntax while Elm has ML-style syntax doesn't matter.
    The thing is how well this decision fit with other features. ML-style syntax
    fits well with Elm emphasizing the immutability feature.
  - Elm architecture vs Flux in React:
    - Elm architecture: Model passes HTML to runtime, runtime passes messages
      back to the model, then loops
    - Both reached an MVC pattern, following a uni-directional flow
  - Other properties:
    - Immutability: `lazy` in Elm
    - Static analysis: linter or TypeScript in React, hint messages at compile
      time in Elm
  - It's not right or wrong choosing which stack, the key is how the feature
    sets work together
  - The overlapping ideas of these stacks, despite being implemented
    differently, are the ones that seem to be good ideas

  </details>

- [The Life of a File | Evan Czaplicki](https://youtu.be/XpDsk374LDE)

  <details>
  <summary>Notes</summary>

  How does he grow Elm code? What happens when the file is "too long"?

  - Life of a file: start small and grow, eventually how a file grow until it
    splits into two files
  - JavaScript knowledge:
    - Prefer shorter files: seems like shorter is better because it avoids
      sneaky mutations when files get larger
    - Get the architecture right from the start: refactoring is very risky and a
      full rewrite is easier
  - Elm perspective:
    - It is not possible to share variables and states, sneaky mutation is 0%
    - Refactoring is cheap and reliable with static types and static analysis
    - The way Elm is designed changes how you grow a file or even the codebase

  <br />
  The idea is to build modules around data structures, not the length of the
  file.
  <br />
  <br />

  - Things to consider when choosing the data structures:
    - Static type analysis? (spelling of keys should be checked)
    - Does ordering matter? (objects or lists)
    - Union types to limit the possible states or require the ability to
      dynamically update the list of possibilities?
  - Breakout functions into modules when they start to build around data
    structure or specific functionalities for a domain in the business model:
    - And within a module, the implementation details (the data structure)
      should not leak
    - Only expose a limited interface, but no less
    - Feature changes are to extend/limit the interface the module exposes
    - Testing on the API, rather than every usage
    - Refactoring within the module is easier because the API won’t change
    - Modules can also maintain invariant (e.g. only two fruits), rules that
      cannot be enforced through data structure only
  - Bad practices
    - Get/set: the purpose of modules is to hide details, but setters will
      expose details. Instead, try to expose as little as possible but no less
    - Don’t overdo it: only extract modules when there is a problem. Don’t do
      premature refactoring.
    - Don’t try to make modules because something is similar, focus on the data
      structure. Only do it when things are related.

  </details>

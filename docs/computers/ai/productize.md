# Productize AI

AI as a product.

## Links

- [Production AI Systems are really hard | Kevin Fischer](https://methexis.substack.com/p/production-ai-systems-are-really)
  ([HN](https://news.ycombinator.com/item?id=36111596))
  - Using radiologists as an example to explain why it is hard to build
    production AI systems that can replace an occupation
  - The top comment in HN gives good insight, sometimes the market AI companies
    focus on is wrong
- [Patterns for Building LLM-based Systems & Products](https://eugeneyan.com/writing/llm-patterns/)
  ([HN](https://news.ycombinator.com/item?id=36965993))
  - Will be a long read. Contains patterns for the following seven topics:
    - Evaluations: to measure the performance of the models
    - Retrieval-Augmented Generation (RAG): to provide richer context to the
      model
    - Fine-tuning: to get better at specific tasks, usually a domain-specific
      dataset
    - Caching: to reduce latency and cost for semantically similar requests
    - Guardrails: to ensure output quality (syntactically and factually correct,
      free from harmful content)
    - Defensive UX: guide user behaviour, avert possible misuse & handle errors
      gracefully
    - Collect user feedback: incorporate user feedback into the UX design to
      build a data flywheel
- [The pain points of building a copilot system](https://austinhenley.com/blog/copilotpainpoints.html)
  - Trial and error in prompting, difficult to orchestrate data sources &
    prompts, flaky tests
  - Unclear and evolving best practices, safety, privacy, compliance,
    undesirable DevEx
- [AI Design Patterns](https://tomtunguz.com/ai-design-patterns/)
  - 4 AI design patterns for deployment & training, e.g.:
  - AI Router: route recognized type to small language model
  - Proxy to clean query and answer for AI

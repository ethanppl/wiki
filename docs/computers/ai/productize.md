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
- [What we learned in 6 months of working on a CodeGen dev tool - GPT Pilot](https://blog.pythagora.ai/2024/02/19/gpt-pilot-what-did-we-learn-in-6-months-of-working-on-a-codegen-pair-programmer/)
  - Spec writer for better initial description
  - Iterative process and allowing agents to review themselves
  - LLMs work best when focused on one problem, on smile files
  - Asking LLM to code with verbose logs helps LLM to debug the code
- [Why Google failed to make GPT-3 + Why Multimodal Agents are the path to AGI](https://www.latent.space/p/adept)
  - Google has Transformer, why OpenAI ended up with GPT 1/2/3, not Google?
  - Internal processes slow researchers
- [What we learned from a year building with LLMs](https://www.oreilly.com/radar/what-we-learned-from-a-year-of-building-with-llms-part-i/)
  - Part 1: tactical practices on prompting, RAG, tuning, caching, evaluation &
    monitoring
- [Secrets of the ChatGPT Linux system](https://incoherency.co.uk/blog/stories/chatgpt-linux.html)
  - On poking the sandboxed environment where ChatGPT run code

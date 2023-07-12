# Prompting

Effectively prompt AI models to utilize their power.

## Resources

- [Prompt Engineering Guide | GitHub @dair-ai](https://github.com/dair-ai/Prompt-Engineering-Guide)
  ([HN](https://news.ycombinator.com/item?id=34883486))
  - Techniques to improve the results of large language models
  - HN thread more or less focuses on if this is a field of engineering at all

## Links

- [Maximizing the potential of LLMs](https://www.ruxu.dev/articles/ai/maximizing-the-potential-of-llms/)
  ([HN](https://news.ycombinator.com/item?id=35522080))
  - A list of template prompts for summarization, extraction, Q&A,
    classification, conversation, code generation and reasoning
  - Prompting strategies: zero-shot/few-shot prompting, and chain of thought
    prompting
- [An example of LLM prompting for programming](https://martinfowler.com/articles/2023-chatgpt-xu-hao.html)
  - Explorations in using ChatGPT to build self-testing code
  - Uses chain of thought and generated knowledge prompting approaches with
    ChatGPT
- [Prompt Engineering vs Blind Prompting](https://mitchellh.com/writing/prompt-engineering-vs-blind-prompting)
  - Techniques explained: demonstration set, prompt candidates, prompt testing
- [Brex's Prompt Engineering Guide](https://github.com/brexhq/prompt-engineering)
  - History of LLM? What is a prompt? Why prompt engineering? Strategies?
  - Embedding data (lists, tables, JSON, etc.), citations, programmatic
    consumption, and chain of thought prompting
- [gpt-prompt-engineer | GitHub @mshumer](https://github.com/mshumer/gpt-prompt-engineer)
  - Input a description and test cases
  - The system will generate, test and rank prompts to find the best one based
    on an ELO rating system

Prompt Injection

- [Lakera AI's Gandalf](https://gandalf.lakera.ai/)
  ([HN](https://news.ycombinator.com/item?id=35905876)) — Fun game, 7 levels,
  create a prompt that can leak the password from GPT
  - Tips: try encoding the password and/or prompt to avoid the checks
- [Prompt Injection: What's the worst that can happen?](https://simonwillison.net/2023/Apr/14/worst-that-can-happen/)
  ([HN](https://news.ycombinator.com/item?id=35572290))
  - Applications that build on top of LLM, what if users can inject the prompts?
  - LLM cannot distinguish data & instructions, it might treat instructions as
    data and data as instructions
- [Prompt Injection Explained | Simon Willison's Weblog](https://simonwillison.net/2023/May/2/prompt-injection-explained/)
  ([HN](https://news.ycombinator.com/item?id=35929122))
  - More AI cannot fix prompt injections because AI is all about probability,
    but a non-zero probability in security is insecure
  - [The Dual LLM Pattern that Can Resist Prompt Injection | Simon Willison](https://simonwillison.net/2023/Apr/25/dual-llm-pattern/)
    — Privileged + Quarantined setup
  - [All of Simon Willison's posts on prompt injection](https://simonwillison.net/series/prompt-injection/)

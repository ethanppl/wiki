# Large Language Model

## Resources

- [Understanding large language models](https://magazine.sebastianraschka.com/p/understanding-large-language-models)
  ([HN](https://news.ycombinator.com/item?id=35589756))
  - Top 10-ish papers to understand the design, constraints and evolution of
    LLMs
  - Development of LLMs: Attention weighted encodings, transformer, BERT, GPT,
    BART
  - Improving the efficiency of LLMs: FlashAttention, Cramming, finetuning
    methods, Chinchilla model, InstructGPT, and more on reinforcement learning
    with human feedback (RLHF)
- [What we know about LLMs (Primer) | Will Thompson](https://willthompson.name/what-we-know-about-llms-primer)
  - A simple explainer of what is considered an LLM, what we knew about LLMs and
    what are the ongoing research
  - Includes a lot of links to other resources. A few concepts introduced
    include LLMs' capability to generalize knowledge, power law in LLMs'
    performance, reinforcement learning via human feedback (RLHF), etc.

## Links

- [Understanding ChatGPT | Atmosera](https://www.atmosera.com/ai/understanding-chatgpt/)
  ([HN](https://news.ycombinator.com/item?id=35312468))
  - Understand how things went from RRN to LSTM to Transformer, to BERT, to GPT
  - Contains a brief explanation of each advancement and links to all the
    important papers
- [Web LLM | GitHub @mlc-ai](https://github.com/mlc-ai/web-llm) — Running LLM
  directly in the browser
- [How Replit train their own Large Language Models](https://blog.replit.com/llm-training)
  - Data processing (Databricks) → Custom tokenization → Model training
    (MosaicML) → Evaluation (HumanEval framework)
- [All the Hard Stuff Nobody Talks About when Building Products with LLMs | Honeycomb.io](https://www.honeycomb.io/blog/hard-stuff-nobody-talks-about-llm)
  - It's hard to build a real product backed by an LLM
  - Limited context windows, LLMs are slow and chaining is impractical, prompt
    engineering is weird, prompt injection, etc
- [Understanding GPT tokenizers | Simon Willison](https://simonwillison.net/2023/Jun/8/gpt-tokenizers/)
  - Optimizations by including leading space in the token
  - The tokenization is biased towards English words
  - Glitch tokens: words that have no meaning but got tokenized, and get near 0
    weight after training lead to weird glitch

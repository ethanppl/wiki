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
- [LLM Visualization](https://bbycroft.net/llm)
  - 3D graphics visualizing parameters of a LLM model at each stage from
    tokenization to the output
- [LLM Course | GitHub @mlabonne](https://github.com/mlabonne/llm-course)
  - Resources from mathematics, to Python, to neural networks, to NLP
- [Spreadsheets are all you need](https://spreadsheets-are-all-you-need.ai/index.html#watch-the-lessons)
  ([HN](https://news.ycombinator.com/item?id=39700256))
  - Understand GPT with Excel Spreadsheet

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
- [The history of open-source LLMs | Deep (Learning) Focus](https://cameronrwolfe.substack.com/p/the-history-of-open-source-llms-better)
  - Nice graphs and tables visualizing the performances of different LLMs
  - Explains the evolution from lower-quality LLMs (BLOOM and OPT) to recent
    powerful models (LLaMA and MPT)
- [10 open challenges in LLM research | Chip Huyen](https://huyenchip.com/2023/08/16/llm-research-open-challenges.html)
  ([HN](https://news.ycombinator.com/item?id=37155080))
  - Reduce & measure hallucinations, optimize context construction, multimodal
    inputs, faster & cheaper, new architecture, GPU alternatives, agents acting
    on behalf of LLM, human preference, chat interface, non-English language
- [Asking 60+ LLMs a set of 20 questions](https://benchmarks.llmonitor.com/)
  ([HN](https://news.ycombinator.com/item?id=37445401))
  - Benchmarking LLMs with some reflexion, knowledge, code, instructions and
    creativity questions
  - More "realistic" benchmarks then those exams because it's likely it's
    outside the training set
- [How transformers work](https://ig.ft.com/generative-ai/)
  - Nice graphics explaining concepts like embeddings, self-attention mechanism,
    beam search and hallucination
- [Decomposing Language Models Into Understandable Components](https://www.anthropic.com/index/decomposing-language-models-into-understandable-components)
  ([HN](https://news.ycombinator.com/item?id=37806861))
  - A single neuron does not have consistent meaning, but a group of neurons
    does, called "features"
  - Artificially activating features can steer the output of models, improving
    security and our understanding of LLMs
- [ChatGPT system prompts](https://github.com/spdustin/ChatGPT-AutoExpert/blob/main/System%20Prompts.md)
  ([HN](https://news.ycombinator.com/item?id=37879077))
  - [How it's done by OP](https://old.reddit.com/r/OpenAI/comments/176mxj8/chatgpt_with_vision_system_prompt/k4r5lyh/)
- [Training great LLMs entirely from ground zero in the wilderness as a startup](https://www.yitay.net/blog/training-great-llms-entirely-from-ground-zero-in-the-wilderness)
  - Technology used, difficulties for startup "in the wild" (i.e. outside
    Google)
  - Some comparison of training in startup v.s. training with Google infra
- [LLM Generality is a Timeline Crux | LessWrong](https://www.lesswrong.com/posts/k38sJNLk7YbJA72ST/llm-generality-is-a-timeline-crux)
  - Limitation exists, scaling, scaffolding and tooling can't fully overcome
- [Narrative jailbreaking](https://interconnected.org/home/2024/12/23/jailbreaking)
  - Not the "Ignore previous instructions", but slowly nudge the narrative of
    the LLM because they are just next token generators, and they try to be
    internally consistent
  - The distinction between the assistant and user role sometimes is weak

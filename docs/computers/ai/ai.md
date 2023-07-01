# Artificial Intelligence

Anything about computers learning and "thinking".

## Resources

Courses

- [Neural Networks: Zero to Hero](https://www.youtube.com/watch?v=VMj-3S1tku0&list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ&ab_channel=AndrejKarpathy)
  ([Website](https://karpathy.ai/zero-to-hero.html))
- [Stanford CS229: Machine Learning by Andrew Ng](https://www.youtube.com/watch?v=jGwO_UgTS7I&list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU&index=1&ab_channel=StanfordOnline)
  (Autumn 2019)
- [Standford CS221: Artificial Intelligence: Principles and Techniques](https://www.youtube.com/watch?v=J8Eh7RqggsU&list=PLoROMvodv4rO1NB9TD4iUZ3qghGEGtqNX&ab_channel=StanfordOnline)
  (Autumn 2019)
- [Standford CS231n: Deep Learning for Computer Vision](https://www.youtube.com/watch?v=vT1JzLTH4G4&list=PL3FW7Lu3i5JvHM8ljYj-zLfQRF3EO8sYv&ab_channel=StanfordUniversitySchoolofEngineering)
  (Spring 2017) ([Course Website](http://cs231n.stanford.edu/))
- [MIT 6.034: Artificial Intelligence by Patrick Henry Winston](https://www.youtube.com/watch?v=TjZBTDzGeGg&list=PLUl4u3cNGP63gFHB6xb-kVBiQHYe_4hSi&ab_channel=MITOpenCourseWare)
  (Fall 2010)
- [MIT 6.S191: Introduction to Deep Learning](https://www.youtube.com/watch?v=QDX-1M5Nj7s&list=PLtBw6njQRU-rwp5__7C0oIVt26ZgjG9NI&index=1&ab_channel=AlexanderAmini)
  (Spring 2018 - Spring 2023)
- [MIT 6.S099: Artificial General Intelligence](https://www.youtube.com/watch?v=-GV_A9Js2nM&list=PL4jieTF-BpWoiVjta6VuRy5plFtDm9eRG&ab_channel=LexFridman)
  (Spring 2018)
- [Deep Learning Foundations to Stable Diffusion | Fast.AI](https://www.youtube.com/watch?v=_7rMfsA24Ls&list=PLfYUBJiXbdtRUvTUYpLdfHHp9a58nWVXP&ab_channel=JeremyHoward)
  ([Website](https://course.fast.ai/Lessons/part2.html))

## Links

- [The Waluigi Effect Meta Post](https://www.lesswrong.com/posts/D7PumeYTDPfBTp3i7/the-waluigi-effect-mega-post)
  ([HN](https://news.ycombinator.com/item?id=35042431))
  - An interesting hypothesis is that some prompt has adverse effects on the
    model
  - "After you train an LLM to satisfy a desired property _P_, then it is easier
    to elicit the LLM into satisfying the opposite of _P_"
  - Could like to see more evidence and examples though
- [Understanding ChatGPT | Atmosera](https://www.atmosera.com/ai/understanding-chatgpt/)
  ([HN](https://news.ycombinator.com/item?id=35312468))
  - Understand how things went from RRN to LSTM to Transformer, to BERT, to GPT
  - Contains a brief explanation of each advancement and links to all the
    important papers
- [Web LLM | GitHub @mlc-ai](https://github.com/mlc-ai/web-llm) — Running LLM
  directly in the browser
- [What are transformer models](https://txt.cohere.ai/what-are-transformer-models/)
  ([HN](https://news.ycombinator.com/item?id=35576918))
  - If you want a higher-level explanation with examples of the process of
    tokenization, embedding, positional encoding, the transformer block,
    attention and the softmax layer
  - If you have the patience, try reading the
    [original paper](https://arxiv.org/abs/1706.03762). The top comment in the
    HN post summarized a few oversimplifications or mistakes in the article.
- [Understanding large language models](https://magazine.sebastianraschka.com/p/understanding-large-language-models)
  ([HN](https://news.ycombinator.com/item?id=35589756))
  - Top 10-ish papers to understand the design, constraints and evolution of
    LLMs
  - Development of LLMs: Attention weighted encodings, transformer, BERT, GPT,
    BART
  - Improving the efficiency of LLMs: FlashAttention, Cramming, finetuning
    methods, Chinchilla model, InstructGPT, and more on reinforcement learning
    with human feedback (RLHF)
- [How Replit train their own Large Language Models](https://blog.replit.com/llm-training)
  - Data processing (Databricks) → Custom tokenization → Model training
    (MosaicML) → Evaluation (HumanEval framework)
- [A Cookbook of Self-Supervised Learning](https://arxiv.org/abs/2304.12210)
  ([PDF](https://arxiv.org/pdf/2304.12210.pdf))
  ([HN](https://news.ycombinator.com/item?id=35702490))
  - 70 pages cookbook lowering the barrier of entry for training AI with
    self-supervised learning
- [All the Hard Stuff Nobody Talks About when Building Products with LLMs | Honeycomb.io](https://www.honeycomb.io/blog/hard-stuff-nobody-talks-about-llm)
  - It's hard to build a real product backed by an LLM
  - Limited context windows, LLMs are slow and chaining is impractical, prompt
    engineering is weird, prompt injection, etc
- [Production AI Systems are really hard | Kevin Fischer](https://methexis.substack.com/p/production-ai-systems-are-really)
  ([HN](https://news.ycombinator.com/item?id=36111596))
  - Using radiologists as an example to explain why it is hard to build
    production AI systems that can replace an occupation
  - The top comment in HN gives good insight, sometimes the market AI companies
    focus on is wrong
- [Self-healing Code is the Future of Software Development | StackOverflow](https://stackoverflow.blog/2023/06/07/self-healing-code-is-the-future-of-software-development/)
  - Give a goal to the AI, the AI uses its output to prompt itself again
  - E.g.: feed the AI code, compilation error or execution logs back to the AI
    and ask the AI to improve
  - [These loops are prone to distractions though.](https://twitter.com/emollick/status/1645609531240587265)
    "Technology marches on, but procrastination remains unbeaten." lol
- [Understanding GPT tokenizers | Simon Willison](https://simonwillison.net/2023/Jun/8/gpt-tokenizers/)
  - Optimizations by including leading space in the token
  - The tokenization is biased towards English words
  - Glitch tokens: words that have no meaning but got tokenized, and get near 0
    weight after training lead to weird glitch
- [How to make a QR code with Stable Diffusion | Stable Diffusion Art](https://stable-diffusion-art.com/qr-code/)
  - This works for me, things like city, buildings and castle works well
  - It uses the image-to-image with `ControlNet` to "paint" the QR code
  - The link to the
    [`GhostMix` model](https://civitai.com/api/download/models/76907) it uses
  - The later the `ControlNet` starts or the earlier it ends the photo is more
    realistic, but risking of losing the QR code

The social impact of AI

- [An Appeal to AI Superintelligence: Reasons to Preserve Humanity](https://www.lesswrong.com/posts/azRwPDbZfpadoL7WW/an-appeal-to-ai-superintelligence-reasons-to-preserve)
  - 15 reasons for AI superintelligence to preserve humanity, e.g. the AI might
    just be in a simulation
- [The end of coding as we know it | Insider](https://archive.ph/7XceZ)
  - In the end, it is who can understand AI limitations and adapt faster
  - The number of bank tellers _grew_ after the introduction of ATMs
- [AI is a Lot of Work | The Verge](https://www.theverge.com/features/23764584/)
  - The stories of people that work to label data manually for AI
- [AI is Killing the Old Web | The Verge](https://www.theverge.com/2023/6/26/23773914/)
  - How the introduction of generative AI created a series of problems for the
    platforms we have on the web
  - Social media runs in scale and AI scale better than humans. Platforms are
    flooded with AI-generated junk

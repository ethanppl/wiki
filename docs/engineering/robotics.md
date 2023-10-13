# Robotics

Computers that move?

## Links

- YouTube:
  [Amazing Invention - This Drone Will Change Everything | Mark Rober](https://youtu.be/DOWDNBu9DkU)
  - Zipline — drone delivery and logistics company
  - Amazing work and surprised by the impact, especially the emergency delivery
    of medical supplies in Rwanda
  - [Zipline's Silent Propellers | The Action Lab](https://youtu.be/z58RORCUTao)
    — it works by having unevenly spaced propellers to spread the frequency
- [Micromouse: The Fastest Maze-Solving Competition on Earth](https://youtu.be/ZMQbHMgK2rw)
  — looks like a very fun robotics challenge
  - Micromouse: fully autonomous maze-solving robot in an unknown layout
  - 5 runs with limited run time, e.g. first run for route searching and use the
    remaining to sprint
  - Strategy: wall following (might not work), depth-first search (might not be
    shortest), breath-first search (slow)
  - Flood-fill strategy: draw a tentative shortest path without considering
    walls, updating the possible shortest path along the way. It goes from the
    goal back to the starting point to search for the second time, very likely
    finding the shortest path
  - But the shortest path doesn't mean the fastest path, e.g. shorter but more
    turns
  - Innovations: diagonal turn (Mitee 3), dc motors, gyroscopes, tape for grip,
    fan for downforces (6Gs turn)
- [How Disney Packed Big Emotion Into a Little Robot](https://spectrum.ieee.org/disney-robot)
  - Trained on a reinforcement-learning system. Walking is just one input, the
    important input is _how_ it walks
  - The training of the functionality (navigation) is combined with the training
    of the personality (emotions), in one model
  - The training methodology is hardware agnostic, it can be applied to robots
    with different hardware configurations

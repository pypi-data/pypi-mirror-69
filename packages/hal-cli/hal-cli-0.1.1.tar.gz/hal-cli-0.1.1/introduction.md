# HAL 🤖

🚧 HAL IS STILL UNDER CONSTRUCTION - PLEASE DON'T MAKE ANY SUDDEN MOVES 🚧

**HAL manages your machine learning research environment in AWS**

Using HAL, you can dynamically provision your perfect machine in AWS - small instances for tinkering with code all the way up to massive GPU instances for training deep learning models. Instance creation and termination is fast, so mode switching is relatively painless, and the costs are kept low by automatically calculating spot instance bids.

When they're created, instances attach themselves to your own persistent, floating EBS volume (defined in terraform), where you can store data, notebooks, git repos, etc.

Users can access instances via ssh, or through a tunnelled jupyterlab session.

## Installation

```console
pip install hal-cli
```

# TorchConfig

**TorchConfig** is a Python package that simplifies configuring PyTorch.

Suppose that you want to test multiple optimizers to find which optimizer works best with your model. Here is one way you could achieve this:

```python
if CONFIG["optimizer_name"] == "SGD":
    optimizer = optim.SGD(
        net.parameters(),
        lr=CONFIG["optimizer_lr"],
        momentum=CONFIG["optimizer_momentum"],
        dampening=CONFIG["optimizer_dampening"],
        weight_decay=CONFIG["optimizer_weight_decay"],
        nesterov=CONFIG["optimizer_nesterov"],
    )
...
elif CONFIG["optimizer_name"] == "Adam":
    optimizer = optim.Adam(
        net.parameters(),
        lr=CONFIG["optimizer_lr"],
        betas=CONFIG["optimizer_betas"],
        eps=CONFIG["optimizer_eps"],
        weight_decay=CONFIG["optimizer_weight_decay"],
        amsgrad=CONFIG["optimizer_amsgrad"],
    )
}
```

With TorchConfig, this is just one line!

```python
optimizer = torchconfig.get_optimizer_from_dict(net.parameters(), CONFIG)
```

## Installation

```
pip install torchconfig
```

## How to Use

You can specify any `optimizer` or `lr_scheduler` by specifying its name through a dictionary key-value pair or an argument.

```python
optimizer_config = {"name": "SGD", "lr": 0.1 }
optimizer = torchconfig.get_optimizer_from_args(net.parameters(), name="SGD", lr=0.1)
# or
optimizer = torchconfig.get_optimizer_from_args(net.parameters(), **optimizer_config)
# or
optimizer = torchconfig.get_optimizer_from_dict(net.parameters(), optimizer_config)
```

```python
lr_scheduler_config = { "name": "CyclicLR", "base_lr": 0.01, "max_lr": 1 }
lr_scheduler = torchconfig.get_lr_scheduler_from_args(optimizer, **CONFIG["lr_scheduler"])
# or
lr_scheduler = torchconfig.get_lr_scheduler_from_args(optimizer, name="CyclicLR", base_lr=0.01, max_lr=1)
# or
lr_scheduler = torchconfig.get_lr_scheduler_from_dict(optimizer, CONFIG["lr_scheduler"])
```

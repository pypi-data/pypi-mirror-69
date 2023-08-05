# FAQ

### Why not the AWS CLI?

Because the AWS CLI is terrible for the kind of rapid, painless mode switching that data science / machine learning research requires. Trying to mount a volume to an EC2 instance through the AWS CLI is one of the most painful sadistic you could inflict upon yourself, let alone trying to hold onto an interesting idea while you do it.

HAL has a super simple set of commands, does no more than you need it to, and even does pretty little animations while you for stuff to spin up.

### Why not AWS sagemaker?

Because AWS will charge you extra 💰 for the privilege, and for a paid product it's not even very good.

HAL _probably_ does what you want, and you can understand/tinker with every bit of it under the hood thanks to that lovely MIT license. If you think there's stuff missing, you can [contribute to HAL](contributing.md)!

### Why not paperspace?

Paperspace is really good - you probably should use it if you're just starting to hack on an idea.

If you want a more sustained environment to work in, the ability to build out infrastructure as you go, room for multiple users, etc, HAL might be a better option.

### It still costs money to use this thing though, right?

HAL doesn't cost anything, but AWS does.

You pay AWS for whatever you use:

- the compute - 1.1x current spot price for each instance by default
- the storage - whatever amazon says they want to charge you, but probably not much
- some other small costs for networking etc

The hope is that by using HAL you'll feel more control over your environment and will be less likely to leave instances running, etc.

### Why terraform?

We use terraform to describe our infrastructure at [Wellcome Collection](https://github.com/wellcomecollection/) (where this project started), and a lot of other data teams use it too. It's not great, but as far as I know it's the best we've got.

The terraform for HAL has been written so that independent data scientists and researchers can get started without an existing platform, but integrating with existing resources should be no bother if you can get your hands on all the right ARNs and IDs.

### Can I use a custom AMI?

Absolutely. Just change the `image_id` in your `config.json`

# FAQ

### Why not the AWS CLI?

Because the AWS CLI is terrible for the kind of rapid, painless mode switching that data science / machine learning research requires. Trying to mount a volume to an EC2 instance through the AWS CLI is one of the most sadistic things you could inflict upon yourself, especially while trying to hold onto an interesting idea in the process.

HAL has a super simple set of commands which are easy to remember, does no more than you need it to, and even produces pretty little animations while you for stuff to spin up.

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

### Why "hal"?

- `hal` is three characters long - easy to type in a hurry
- [HAL 9000](https://en.m.wikipedia.org/wiki/HAL_9000) is the fictional onboard AI from _2001: A Space Odyssey_. HAL "controls the systems of the Discovery One spacecraft and interacts with the ship's astronaut crew".
- Hal is a nickname for Henry. [Wellcome Collection](https://wellcomecollection.org/) (where this project started) was founded by [a man called Henry](https://en.m.wikipedia.org/wiki/Henry_Wellcome)

### Can I start instances with a custom AMI?

Absolutely. Just reconfigure the `image_id` in your `config.json` using the [configuration instructions](/install/configuration/#updating-configuration)

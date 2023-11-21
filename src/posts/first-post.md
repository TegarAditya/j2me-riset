---
title: First post
description: First post.
date: '2023-4-14'
categories:
  - sveltekit
  - svelte
published: true
---


## Markdown

Hey friends! 👋

```js
class Greeting {
	constructor(name) {
		this.name = name;
	}

	greet() {
		return highlight`Hello, ${this.name}!`;
	}
}

function highlight(strings, ...values) {
	return strings.reduce((result, string, i) => {
		return result + string + (values[i] ? `%c${values[i]}` : '');
	}, '');
}

const greetingInstance = new Greeting('World');

const result = greetingInstance.greet();

console.log(result, 'color: red; font-weight: bold;');
```

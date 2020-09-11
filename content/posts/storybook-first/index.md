---
title: Storybook first
date: 2019-12-31
draft: true
---

Many times we have read and heard about the expression _Mobile first_ when we
talk in terms of web design. This topic appeared years ago to priorize the mobile platform when we as web developers and web designers wanted to support the forgotten mobile platform that was increasing in popularity but the given support was deficient and poorly in terms of performance.

Few years later a new paradigm for rendering UI's appeared to revolutionize the web platform. Facebook presented React and many web developers included me, that we coded for years in jQuery, Backbone and many other frameworks, blowed our minds with new proposal to build our application interfaces.

Those crazy initial days passed and we realized that React paradigm was here to stay. Later, we realized that the new paradigm was so revolutionary that could be applied also in diverse projects like React Native, SSR, React terminal and others.

So, reached this point we had a technology to build any kind of interface required for our digital business. The flexibility of the React paradigm let us to build interfaces for web browsers, to mobile applications and many other strategic business targets. Projects like [Next.js](https://nextjs.org) or [Gatsby](https://gatsbyjs.org) pushed public pages in this direction.

It didn't matter if your were building your next todo list in your web application, your testimonals section your website or a component for a view in your mobile app. You are able to render all of them with the same technology.

So, bringing back the initial _Mobile first_ concept, the question here is, why we need to priotize a platform if we can do all of them at the same time following the same development process?

### Introduction to Storybook

One awesome tool that has been gaining popularity lately is [Storybook](https://storybook.js.org). It is a esencial piece in the development process of your styleguide that lets developers to:

- Isolation: You can build and test your components in isolation, without any influence of other componets. You can play with your components and understand which properties recieve, how they interact and check the expected behaviour.
- Speed: When you develop new components in isolation, one direct benefit is the increment in component speed development. Easier to test, hot reload.
- Documentation: It's super easy to add documentation to all your components. This is basic feature that will pave the path for new team members.
- Debugability: If there is some bug in one of your components you will be able to spot the undesired behavior in few minutes.
- Discoverality: You will be able to see all available components in your styleguide. Those components created by you or by your coworkers will be there.

There are many plugins for your Storybook, that will improve a bit more the quality of your final styleguide.

So, I encorage you to develop new components in Storybook first before include them in the final view where they are going to be used.

On the other hand, if you want to have a healthy set of components and don't get out of control, it is important to focus on how we style them. There are common mechanisms to style your components, like [CSS Modules](https://github.com/css-modules/css-modules) or [Style](https://www.styled-components.com), but for all of them a fundamental step before building components is to set the rules of your design system.

## Design system

One strategic decision digital business usually take when they start a project is to setup a list of design rules to be able to deliver to customers their concept of brand image, product cohesion and product quality.

If you want to read more about design systems I really recomend you some books. Atomic Design and Refactoring UI. This one was wrote by one of the creators of [Tailwind](https://tailwindcss.com)

### Tokens

If you think your interface as set of a small of building blocks, you can imagine _Tokens_ like fundamental constants that glue all those smallest pieces in your _new universe_.

Provinding a standard set of common tokens has been one of the successes of Taildwind.

Those constants will be available for all components and will give them the required flexibility to create nice things but also some restrictions to not let them to break the ~rules~.

#### Colors

In whatever design one of the most important constants is the palette of colors. It brings consistency to all your components and a set of meanings that the user understand.

#### Typography

When we talk about UI design another fundamental constant usually is the set of font families, font size and line height used around. They bring consistency and order importance of all texts in your interface. In the the _Typography_ token we can setup common properties like `font-family`, `font-size` or `line-height`.

#### Spaces

This is one of the most misunderstood and unknown constants for many developers.

When you build fundamental components for your interface, they should not be aware of their surroundings.

We need to understand spaces between components as an extra set of _special_ components. They will have the responsability to arrange other components in the desired layout. You can find an example of those components [here](https://)

And example for this kind of tokens could be:

- `xsmall`: 5px
- `small`: 10px
- `medium`: 20px
- `large`: 40px
- `xlarge`: 100px

#### Others

There is not a list of tight list of constants for all design systems. Choose your preferred setup. If you need more categories of constants write them down and make them available to your components. Some examples about those extra tokens that you could be helpfull for you could be to control border-radius, sizes, etc.

Another topic that could need an extra article but I want to mention here is _Media queries_. It is really interesting if your design system supports natively the capability to choose which token value you want for different screen sizes.

### Rules

I really recommend to you to categorize your components in multiple layers of complexity. The first category and the one with most basic components, the one that correspond to _Atoms_ in the _Atomic Design_.

The list rules below is a recommmendation that only apply for the most basic layer of components. For other layers could be convenient not to follow them.

#### Decoupled components

They should not be coupled between them. This being said, they should be as small as possible and we need to trait the space between them as controlled distance.

#### All files in the same folder

I have seen many times in the past that we spread files in multiple folders that belong to the same component. If you locate all envolved files (styles, tests, documentation) for the same component in the same folder it will be much easier in terms of maintanability.

#### Not coupled to any external dependency

It's a common mistake to couple basic components with external dependencies like state management libraries, i18n libraries or form libraries. If you want to have a set of basic component easy to test, to build stories about them, to document, etc try hard not to couple them to those kind of libraries.

#### Accesibility

At this level, when you are building the smallest pieces of your design system being compliant with in terms of accessibility is quite easy. The domain of each component is so small that usually the list of rules to be fully accessible is small too.

This will make your applications and you web sites usable for many people that usually have a deficient interaction with your product.

#### Tests

Like accessibility, when you deal with small building blocks is usually easy to write those tests that will ensure the durability and strength to your set of components. Whatever change you apply to them, tests should have a corresponding modification. Choose the order that fits better with your development flows.

All those mentioned concepts have been embodied in this repository that can helpyou the be a starting point for your next design system.

## Conclusion

I talked about this in [another post](https://medium.com/hackernoon/content-vs-container-e0a1ada681c1).

If you have the opportunity to work on the design system before start working on the business logic it will be easier to implement and to not be influenced by project decissions. Sometimes is hard to justify this initial overhead in your project, but it will worth.

About the task of setup your tokens, **The final goal of having a set of tokens if to remove the necessity to craft manually styles for you application views**.
The unique way to build views and choose their styles should be by setting props on your components. In theory, the styling library you choose should be used only by your basic set of compoments. If this is true, you will be able to prototype interfaces with tools like [Playroom](https://github.com/seek-oss/playroom). This will speed up your development incredibly.

I hope this blog post will help you to speed up the development of all your business pieces.

Happy coding!

This is a static [Next.js](https://nextjs.org/) site bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) which is using a headless WordPress install for the backend.

I setup the site locally by using the [`DevKinsta WordPress Environment`](https://kinsta.com/devkinsta/) but you could use any VM or VirtualBox to run the WP Install, I generally prefer Docker. I choose devKinsta so I could quickly deploy the WP install so you could have a way to view this project without needing to setup everything yourself. Check it out [`here`]('')

When you have a WP install setup you can turn it in to a headless CMS by using the Simple Website Redirect plugin and configuring it. You can use this [`Kinsta blog post`](https://kinsta.com/blog/headless-wordpress/) for more info.

Next you will want to update the .env file in this project to point to the URL WP is running on.

On a side note, you can generate fake WP content with the FakerPress WP plugin.

I didn't spend a ton of time on styling or creating custom components for every thing because I wanted to get quick and dirty version of a blog created. I felt this approach showcased my ability to work with React/Next.js, basic css, and also WordPress. I hope you like it.

## Getting Started

First, install the dependencies:

```bash
npm install
#or
yarn install
```

Second, add a new .env file pointing to you wp install

Third, run the dev server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

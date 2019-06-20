# Blog site for @defmyfunc

## Overview
This blog site is based on [gatsbyjs](https://www.gatsbyjs.org)

## 🚀 Quick start

1. Clone
1. Run `gatsby develop`
1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).

## 💫 Deploy

Master is deployed via netlify on every commit to https://www.defmyfunc.com/

## Publishing a story
1. Add a folder in `content/blog` folder eg. `my_great_new_story'
2. Add an empty `index.md` to the `my_great_new_story` folder
3. This will then become available at the following url: `http://localhost:8000/my_great_new_story`. Importantly, it will not appear in the index of stories on the main page
4. You can commit this and it will be available at `https://www.defmyfunc.com/my_great_new_story` Again the story will have a direct link, but will not appear on the main index
5. Then you can add your "frontmatter" to the `index.md` file you have created, ie:
```markdown
---
title: My great new story
date: "2019-06-12T10:00:00.000Z"
description: I have a great new story for you
published: false
---
```
6. And then you can go on to add your general markdown for the rest of the story!
7. When you are happy... you can switch `published: true` and the page will appear in the main index. Huzzah!
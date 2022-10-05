# Personal Portfolio Template

I created this for my own personal portfolio website.  If you like what you see, you’re welcome to use this project as a template for your own website. Some of the features that are included in this website:

- **Light/Dark theme toggle**
- **Lazy loading of images**
- **Mobile responsive**

## Table of Contents

1. [Examples](#Examples)
2. [Getting Started](#Getting-Started)
3. [Tech Stack](#Tech-Stack)
4. [Motivation](#Motivation)
5. [Accessibility](#Accessibility)
6. [License](#License)

## Examples

<!-- Check it out! 👉[Demo](https://stevevangdev.com/) -->

![desktop screenshot example 1](https://res.cloudinary.com/dvrs8gsj3/image/upload/v1664778785/personal-portfolio-template/Screenshot_2022-10-03_15-20-55_cubmzw.png)

![desktop screenshot example 2](https://res.cloudinary.com/dvrs8gsj3/image/upload/v1664778785/personal-portfolio-template/Screenshot_2022-10-03_15-21-24_hfcuwy.png)

![desktop screenshot example 3](https://res.cloudinary.com/dvrs8gsj3/image/upload/v1664778786/personal-portfolio-template/Screenshot_2022-10-03_15-21-37_j59gg0.png)

![desktop screenshot example 4](https://res.cloudinary.com/dvrs8gsj3/image/upload/v1664778785/personal-portfolio-template/Screenshot_2022-10-03_15-21-54_bpf5vg.png)

## Getting Started

### Installation

1. **Fork this repo**

2. **Clone it to your local machine**

```sh
git clone https://github.com/<your username>/portfolio-website-template.git
```

3. **Navigate to directory**

```sh
cd portfolio-website-template/
```

4. **Install dependencies**

```sh
npm install
```

5. **Copy and rename `exampleProjectData.tsx`**

```sh
cp sections/exampleProjectData.tsx sections/projectData.tsx
```

6. **Start development server**

```sh
npm run dev
```

7. **Open localhost port:3000 in your browser**

```sh
http://localhost:3000
```

## Tech Stack
- Next.js
- TypeScript
- Sass CSS
- FontAwesome Icons

## Motivation

As much as I love websites with bold designs, flashy transitions and scrolling animations, In my opinion, a portfolio website may not be the place for it (I’ve added some animation to make this site dynamic without being distracting). What I've come to learn is that most people have short attention spans. You’ll risk users skipping your content if your website is confusing or annoying to use. Some things that typically result in a bad user experience (aside from long load times, poor color schemes, and unintuitive navigation/layout) are:

- Scroll hijacking (for more info, click [here](https://alvarotrigo.com/blog/what-is-scroll-hijacking/))
- Slow animation/transitions (anything over 1000ms)
- Distracting animated backgrounds

This project was bootstrap with Next.js. Next provides some great features out of the box that in my opinion, provides some of the best user and developer experience. Here are some of the features that I love:

- **SEO-friendly**: Rich HTML with SSR
- **Performance Optimization**: Images are lazy loaded, cached, and many other optimizing features!
- **Easy Deploy**: If you choose to host with Vercel, there is no easier and faster way to get your site live

## Accessibility

Last but not least, I coded this project with accessibility in mind, but I'm by no means an expert. If you use this template for your own project, I encourage you to continue to improve the accessibility where it is applicable.

## License

MIT License

Copyright (c) 2022 Steve Vang

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
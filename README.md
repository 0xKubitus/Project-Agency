<div align="center">

[![THP Badge](https://github.com/0xKubitus/Usefull-Stuff-for-README/blob/main/assets/mkdwn-badges/the-hacking-project.svg)](https://www.thehackingproject.org/)

</br>

# React Context Training & Dynamic Routing

![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

</br>
</br>

## React App practice, including:

</br>

</div>

#### -> Dynamic Routing;

#### -> React Components;

#### -> React State & Context => useState() & useContext() hooks;

#### -> conditional rendering;

#### -> localStorage

</br>
<hr>
</br>

<details>
<summary>
CLICK ME TO READ THE HACKING PROJECT INSTRUCTIONS FOR THIS PROJECT (in English)
</summary>
<br>

# 1. Intro

You are in charge of prototyping the new site of a company.
Your agency wants to take care of its clients' eyes, so would like there to be a way to switch from a light theme to a dark theme quickly.

<br>

# 2. Project specifications:

### 2.1. The pages

The website is made up of 3 pages:

<ul>
  <li>Home, the URL being "/";</li>
  <li>The agency, the URL being "/about";</li>
  <li>Projects, URL being "/works".</li>
</ul>

You will therefore need to set up a navigation bar, containing these 3 links. For the text, you can put Lorem Ipsum on it: the important thing is to understand how to make the application work. The site being a prototype, the design does not need to be worked on if you do not have the time.

<br>

### 2.2. Change of theme (day / night)

At the top right, in the navigation bar, a button allows you to switch from the light theme to the dark theme, and vice versa, with a click.

By default, we will use the light theme. But when we change the theme, the choice will be saved in the localStorage. Thus, when the user returns to the site, it will use the theme that was chosen during the last visit.

<br>

### 2.3. The Projects page and the case studies

The objective of the next part is to set up a dynamic routing to access case studies made by the agency.

The agency has chosen to show 3 case studies that it has carried out for its clients. The clients are named **Platon**, **Solane** and **Sedal**.

The "Projects" page, found at the URL `/works` is composed of links to these case studies.

On this page, we can find 3 blocks, each composed of the title of the case study and the link to access the study. If the agency adds a fourth case study, a title and a link leading to this 4th study will automatically be added here.

The routes are made up like this:

```
/works/clientname-study-case
```

For example, to go to the Sedal project case study, the route to use is `/works/sedal-study-case`. So you will have to create a `StudyCase` component that displays the content of the case study, depending on the link clicked by the user.

The texts of the pages and the case studies are given below (in point 4). They are in Markdown, but if you want to store them in another way to display them, you can.

<br>

# 3. The expected rendering

The expected rendering is a website made in React containing 3 pages ("Home", "The agency", and "Projects").

The components created will be function components, and we will use `react-router` to manage the routing.

3 other pages are expected (Platon, Solane and Sedal), one for each of the case studies. As you can imagine, these 3 pages are in fact one and the same component, in which we display different data depending on the URL. So it's dynamic routing.

<br>

#4. Site Content

## "Home" page (url `/`)

```
### Entrust your dreams to web experts

Thanks to our know-how, our experience and our ability to listen, we support our clients in the creation of websites: study, UX, conception, design, development, SEO.
Our web agency is able to meet all your needs and develop a real digital strategy.
```

## "About" page (url `/about`)

```
### Websitic is a digital communication agency in Paris whose mission is to support you on your digital projects.

From the pre-project stage to the actual launch of the site, we are here for you. Throughout the life of our joint projects, we make every effort to offer you effective digital strategies and enable you to achieve your objectives.
Leave your project in trustworthy hands, having accompanied "PLATON", "TCar", "Solane" or even "Sedal" to the top.
```

## "Works" page (url `/works`)

```
### Over the years, we have been able to accompany the best.

Discover step by step how we were there to launch your favorite brands.
```

<br>

<div align="center">

### Case studies, accessible from the Works page

</div>

## Platon

```
## The challenge

Platon decided to launch at the time despite a difficult economic crisis.
We have been behind them to bring them the best of the Web and digital. We really are the best agency.
```

## Solane

```
## Solane is the leading seller of strawberries in Poitou-Charentes

And it's thanks to us. In both the best and the toughest times, our communication campaigns on the market place have worked.
```

## Sedal

```
## Sedal, the company that started at the bottom... And is still at the bottom

Despite our advice and our website created on Wix, Sedal does not seem to want to take off. But as a great man and woman said, "the last shall be first."
```

<br>

#5. Bonuses
If you want to keep practicing with the context of React, you can try to implement a way to choose how to display the links to the case study pages, in the "Works" page:

<ul>
  <li>either a list of elements comprising only the names of customers (default behavior);</li>
  <li>either a list of cards with the name of the client + the title of the case study (the one found in the 1st line of the markdown).</li>
</ul>

To do this, you can use a button at the top of the "works" page, which will modify a context limited to this page (and its child components) only.

</details>

</br>
<hr>
</br>

<details>
<summary>
CLIQUER POUR LIRE LES CONSIGNES DE THE HACKING PROJECT POUR CE PROJET (en  Français)
</summary>
<br>

# 1. Introduction

Tu es en charge du prototypage du nouveau site d'une entreprise.  
Ton agence veut prendre soin des yeux de ses clients, et aimerait donc qu'il y ait un moyen de passer d'un thème clair à un thème sombre rapidement.

<br>

# 2. Cahier des charges du projet :

### 2.1. Les pages

Le site Web est composé de 3 pages :

<ul> 
  <li>Home, l'URL étant "/";</li>
  <li>L'agence, l'URL étant "/about";</li>
  <li>Projets, l'URL étant "/works".</li>
</ul>

Il te faudra donc mettre en place une barre de navigation, contenant ces 3 liens. Pour le texte, tu peux y mettre du Lorem Ipsum : l'important étant de comprendre comment faire marcher l'application. Le site étant un prototype, le design n'a pas besoin d'être travaillé si tu n'as pas le temps.

<br>

### 2.2. Le changement de thème (jour / nuit)

En haut à droite, dans la barre de navigation, un bouton permet de passer du thème clair au thème sombre, et inversement, d'un clic.

Par défaut, on va utiliser le thème clair. Mais quand on change de thème, le choix sera enregistré dans le localStorage. Ainsi, quand l'utilisateur reviendra sur le site, celui-ci utilisera le thème qui avait été choisi lors de la dernière visite.

<br>

### 2.3. La page Projets et les études de cas

L'objectif de la prochaine partie est de mettre en place un routing dynamique pour accéder à des études de cas qu'a fait l'agence.

L'agence a choisi de montrer 3 études de cas qu'elle a réalisé pour ses clients. Les clients sont nommés **Platon**, **Solane** et **Sedal**.

La page "Projets", trouvable à l'URL `/works` est composée de liens vers ces études de cas.

Sur cette page, on peut trouver 3 blocs, chacun composé du titre de l'étude de cas et du lien pour accéder à l'étude. Si l'agence ajoute une quatrième étude de cas, automatiquement, un titre et un lien menant vers cette 4ème étude s'ajouteront ici.

Les routes sont constituées comme ceci :

```
/works/clientname-study-case
```

Par exemple, pour aller sur l'étude de cas du projet Sedal, la route à utiliser est `/works/sedal-study-case`. Il va donc falloir que tu crées un composant `StudyCase` qui affiche le contenu de l'étude de cas, en fonction du lien cliqué par l'utilisateur.

Les textes des pages et des études de cas sont donnés ci-dessous (au point 4). Ils sont en Markdown, mais si tu souhaites les stocker d'une autre manière pour les afficher, tu le peux.

<br>

# 3. Le rendu attendu

Le rendu attendu est un site Web fait en React contenant 3 pages ("Home", "L'agence", et "Projets").

Les composants créés seront des function components, et on utilisera `react-router` pour gérer le routing.

3 autres pages sont attendues (Platon, Solane et Sedal), une pour chacune des études de cas. Comme tu peux t'en douter, ces 3 pages sont en fait un seul et même composant, dans lequel on affiche différentes données en fonction de l'URL. C'est donc du routing dynamique.

<br>

# 4. Contenu du site

## Page "Home" (url `/`)

```
### Confiez vos rêves à des experts du Web

Grâce à notre savoir-faire, notre expérience et notre écoute, nous accompagnons nos clients dans la création de site internet: étude, UX, conception, design, développement, SEO.
Notre agence web est capable de répondre à tous vos besoins et d'élaborer une véritable stratégie digitale.
```

## Page "About" (url `/about`)

```
### Websitic est une Agence de communication digitale à paris ayant pour mission de vous accompagner sur vos projets digitaux.

De l’étape d’avant projet web au lancement effectif du site, nous sommes là pour vous. Tout au long de la durée de vie de nos projets communs, nous mettons tout en oeuvre pour vous proposer des stratégies digitales efficaces et vous permettre d’atteindre vos objectifs.
Laissez votre projet entre des mains dignes de confiance, ayant accompagné "PLATON", "TCar", "Solane" ou encore "Sedal" vers le sommet.
```

## Page "Works" (url `/works`)

```
### Au fil des années, nous avons pu accompagner les meilleurs.

Découvrez pas à pas comment nous avons été présents pour lancer vos marques préférées.
```

<br>

<div align="center">

### Les études de cas, accessibles depuis la page Works

</div>

## Platon

```
## Le challenge

Platon a décidé de se lancer à l'époque malgré une crise économique difficile.
Nous avons été derrière eux pour leur apporter le meilleur du Web et du digital. Nous sommes vraiment la meilleure agence.
```

## Solane

```
## Solane est le premier vendeur de fraises du Poitou-Charentes

Et c'est grâce à nous. Dans les moments les meilleurs comme les plus durs, nos campagnes de communication sur la place du marché ont fonctionné.
```

## Sedal

```
## Sedal, l'entreprise qui a commencé tout en bas... Et qui est toujours tout en bas

Malgré nos conseils et notre site web créé sur Wix, Sedal semble ne pas vouloir décoller. Mais comme un grand homme et une grande femme l'ont dit, "les derniers seront les premiers".
```

<br>

# 5. Bonus

Si tu veux continuer à t'entraîner avec le contexte de React, tu peux essayer de mettre en place un moyen de choisir la façon d'afficher les liens vers les pages des études de cas, dans la page "Works" :

<ul>
  <li>soit une liste d'éléments comportant uniquement les noms des clients (comportement par défaut);</li>
  <li>soit une liste de cards avec le nom du client + le titre de l'étude de cas (celui se trouvant à la 1ère ligne du markdown).</li>
</ul>

Pour cela, tu peux utiliser un bouton en haut de la page "works", qui va modifier un contexte limité à cette page (et ses composants enfants) uniquement.

</details>

</br>
<hr>
</br>
</br>
</br>
</br>

## How to use this repo:

Simply clone this repo on your machine, then open it in a Terminal window.

Then, you can copy and paste the following commands in your Terminal (inside the project's directory):

```
npm i
npm start
```

Aaaaaaaaand... That's it!

</br>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).  
Running `npm start` inside the project directory runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

</br>
</br>
</br>

<div align="center">

# Acknowledgments:

Markdown/HTML converter library: <a href="https://github.com/showdownjs/showdown">Showdown</a>

</div>

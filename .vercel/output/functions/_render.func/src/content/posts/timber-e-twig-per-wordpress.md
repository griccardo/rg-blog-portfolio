---
title: "Timber e Twig: migliora lo sviluppo in WordPress"
pubDate: 2025-05-09 #Y-M-D
description: "Scopri come Timber e Twig possono migliorare lo sviluppo in WordPress, offrendo una maggiore flessibilità e produttività."
author: "Riccardo"
image: { url: "/wordpress.jpg", alt: "wordpress" }
---

Chi lavora quotidianamente con WordPress sa quanto possa diventare disordinato scrivere codice PHP mischiato all’HTML nei file del tema. Appena il progetto si complica, anche leggermente, mantenere un template leggibile e scalabile diventa una sfida. È qui che entrano in gioco Timber e Twig, una combinazione che può rivoluzionare il modo in cui scriviamo temi WordPress.

## Cos’è Timber (e Twig)?

Timber è un plugin per WordPress che permette di separare in modo più pulito la logica PHP dalla presentazione HTML, utilizzando Twig, un motore di templating moderno e leggibile (originariamente sviluppato da Symfony). In parole semplici: Twig è una sintassi pulita per scrivere template, e Timber ci aiuta a integrare questa sintassi dentro WordPress.

## Vantaggi concreti

### Leggibilità e organizzazione del codice
Utilizzare Timber e Twig nello sviluppo WordPress porta con sé numerosi benefici, soprattutto in termini di ordine e chiarezza del codice. Il primo aspetto evidente è la separazione tra logica e presentazione: con il metodo classico, i file dei template contengono spesso un mix disordinato di PHP e HTML, rendendo difficile la lettura e la manutenzione. Timber consente di isolare la logica in file PHP separati e di affidare tutta la parte di markup a Twig, un linguaggio di templating estremamente leggibile.

### Miglioramento della produttività
Un altro vantaggio importante è proprio la sintassi di Twig. Rispetto al codice PHP puro, Twig è più chiaro, semplice e vicino al modo in cui si scrivono template nei framework moderni. Le condizioni, i cicli e l’output delle variabili si leggono come frasi naturali, e chi ha familiarità con Blade, Vue o Symfony si sentirà immediatamente a suo agio.

### Reusabilità e modularità
Timber permette anche di costruire template riutilizzabili e strutturati secondo i principi DRY (Don’t Repeat Yourself). Con Twig si possono definire template base ed estenderli nei file specifici delle singole pagine, includere componenti parziali, e organizzare il codice in modo modulare. Questo porta a una riduzione del codice duplicato e facilita le modifiche globali al layout.

### Gestione dei dati
Infine, Timber lavora molto bene con dati strutturati, come i campi personalizzati di ACF, i custom post type e i loop avanzati. Tutti questi contenuti vengono trasformati in oggetti e array facilmente accessibili da Twig, migliorando l’organizzazione dei dati e riducendo il rischio di errori.

## Esempio pratico

Le differenze tra il metodo classico e quello con Timber sono evidenti in un semplice esempio. Supponiamo di avere un template per un archivio di un blog, che contiene un loop per visualizzare i post. 

### Metodo classico
Nel tema classico, il ciclo per mostrare un elenco di post è scritto così, tipicamente all’interno di un file come index.php o archive.php:
```php
<?php if ( have_posts() ) : ?>
  <ul>
    <?php while ( have_posts() ) : the_post(); ?>
      <li>
        <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
        <p><?php the_excerpt(); ?></p>
      </li>
    <?php endwhile; ?>
  </ul>
<?php else : ?>
  <p>Nessun contenuto trovato.</p>
<?php endif; ?>
```
È funzionale, ma mischia markup e logica, e diventa difficile da mantenere man mano che il markup si complica.

### Metodo con Timber e Twig
Con Timber, separi completamente logica e presentazione. Il PHP si occupa solo di preparare i dati, mentre Twig gestisce la visualizzazione. 

File PHP (es. index.php):
```php
$context = Timber::context();
$context['posts'] = Timber::get_posts();
Timber::render('index.twig', $context);
```
File Twig (es. index.twig):
```twig
{% if posts %}
  <ul>
    {% for post in posts %}
      <li>
        <a href="{{ post.link }}">{{ post.title }}</a>
        <p>{{ post.excerpt }}</p>
      </li>
    {% endfor %}
  </ul>
{% else %}
  <p>Nessun contenuto trovato.</p>
{% endif %}
```
In questo modo, il codice è più pulito, facile da leggere e mantenere, e ogni parte è separata in modo chiaro.


## Conclusioni

Usare Timber e Twig in WordPress è un modo intelligente per portare ordine e modernità nello sviluppo di temi. Migliora la leggibilità del codice, separa chiaramente la logica dalla presentazione e rende il lavoro quotidiano più piacevole.
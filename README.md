# 🌸 Chez Noune - Site Vitrine

> Des petits bonheurs faits main ✨

Site vitrine pour **Chez Noune**, une boutique artisanale de magnets décoratifs faits avec amour.

![Chez Noune](assets/logo/logo-chez-noune.svg)

## 📋 Description

Site web complet et responsive pour présenter les créations artisanales de Chez Noune. Design rétro-funky avec une palette de couleurs pastel (rose, crème, jaune, lavande) et une typographie élégante.

## 🎨 Caractéristiques

- **Design moderne et chaleureux** - Style rétro-funky avec couleurs pastel
- **100% Responsive** - S'adapte parfaitement à tous les écrans (desktop, tablette, mobile)
- **Multi-pages** - Navigation fluide entre 4 pages principales
- **Animations subtiles** - Micro-interactions et effets au scroll
- **Performance optimisée** - Images WebP, lazy loading, code optimisé
- **Accessibilité** - Navigation au clavier, focus visible, structure sémantique

## 📁 Structure du Projet

```
chez-noune/
│
├── index.html              # Page d'accueil
├── products.html           # Page des produits
├── visions.html           # Page À propos / Notre vision
├── contact.html           # Page de contact
│
├── css/
│   └── style.css          # Stylesheet principal
│
├── js/
│   └── main.js            # JavaScript (navigation, formulaires, animations)
│
├── assets/
│   ├── images/
│   │   ├── products/      # 9 visuels produits en WebP
│   │   ├── hero/          # Image hero pour la bannière
│   │   └── logo/          # Logo SVG
│   │
│   └── icons/             # Icônes réseaux sociaux (Instagram, Facebook, Etsy)
│
└── README.md              # Ce fichier
```

## 🚀 Installation et Utilisation

### Méthode 1 : Utilisation locale

1. Téléchargez ou clonez ce dossier
2. Ouvrez `index.html` dans votre navigateur
3. C'est tout ! Le site fonctionne sans serveur

### Méthode 2 : Hébergement sur GitHub Pages

1. Créez un nouveau repository sur GitHub
2. Uploadez tous les fichiers
3. Allez dans Settings > Pages
4. Sélectionnez la branche `main` et le dossier `/root`
5. Votre site sera accessible à `https://votre-nom.github.io/chez-noune`

### Méthode 3 : Autres hébergeurs

Compatible avec :
- **Netlify** - Drag & drop le dossier
- **Vercel** - Import depuis GitHub
- **GitHub Pages** - Configuration automatique
- **Hébergement traditionnel** - Upload via FTP

## 🎯 Pages du Site

### 🏠 Page d'Accueil (`index.html`)
- Hero section avec présentation
- Section "Coups de cœur" avec 3 produits phares
- Aperçu de l'histoire de la boutique
- Appels à l'action

### 🛍️ Page Produits (`products.html`)
- Grille de 9 produits
- Cartes produits avec images, descriptions et prix
- Liens vers la boutique Etsy
- Section CTA pour contact

### 💝 Page Notre Vision (`visions.html`)
- Histoire détaillée de Chez Noune
- Valeurs de la marque
- Processus de création (4 étapes)
- Signature personnelle

### 📧 Page Contact (`contact.html`)
- Liens réseaux sociaux (Instagram, Facebook, Etsy)
- Email de contact
- Formulaire de contact fonctionnel
- Section newsletter
- Informations pratiques (délais, livraison, etc.)

## 🎨 Palette de Couleurs

```css
--rose-doux: #FFB5C2
--rose-vif: #FF8FA3
--creme: #FFF5E6
--jaune-pastel: #FFE5AD
--rouge-doux: #D4616B
--vert-sauge: #B8D4C7
--lavande: #E6D7FF
--blanc-casse: #FFFEF9
```

## 🔤 Typographies

- **Titres** : Fraunces (serif moderne et élégant)
- **Script** : Caveat (écriture manuscrite chaleureuse)
- **Corps de texte** : DM Sans (sans-serif lisible)

## ✨ Fonctionnalités JavaScript

- Navigation mobile responsive avec menu hamburger
- Smooth scroll pour les ancres
- Formulaire de contact avec validation et message de succès
- Formulaire newsletter
- Animations au scroll (Intersection Observer)
- Lazy loading des images
- Highlight de la page active dans la navigation
- Easter egg sur le logo (5 clics)

## 📱 Responsive Breakpoints

- **Desktop** : > 1024px
- **Tablette** : 768px - 1024px
- **Mobile** : < 768px
- **Petit mobile** : < 480px

## 🔧 Personnalisation

### Changer les couleurs

Modifiez les variables CSS dans `css/style.css` :

```css
:root {
    --rose-doux: #VOTRE_COULEUR;
    /* ... */
}
```

### Modifier les produits

1. Remplacez les images dans `assets/images/products/`
2. Modifiez le contenu dans `products.html`
3. Ajustez les prix et descriptions

### Personnaliser les textes

Tous les textes sont directement dans les fichiers HTML et facilement modifiables.

## 🌐 Compatibilité Navigateurs

- ✅ Chrome / Edge (dernières versions)
- ✅ Firefox (dernières versions)
- ✅ Safari (dernières versions)
- ✅ Opera (dernières versions)
- ⚠️ Internet Explorer 11 (non supporté)

## 📄 License

Ce projet est libre de droits pour Chez Noune. Vous êtes libre de le modifier et l'adapter à vos besoins.

## 👤 Contact

Pour toute question concernant le site web :

- **Email** : contact@cheznoune.fr
- **Instagram** : @cheznoune
- **Boutique Etsy** : Chez Noune Shop

---

**Fait avec 💝 pour Chez Noune**

*Site créé en 2026 - Tous droits réservés*

# Invitly — PWA (GitHub Pages)
1. Copiez le dossier `docs/` à la racine de votre dépôt GitHub (il remplace `docs/rsvp.html`).
2. Éditez `docs/config.js` : URL du projet Supabase et clé **anon** (la base se crée avec `supabase/schema.sql`).
3. GitHub > Settings > Pages > Source : branche `main`, dossier `/docs`. L'app sera sur `https://<user>.github.io/<repo>/`.
4. Supabase > Authentication > URL Configuration : mettez cette adresse en « Site URL ».
5. Sur mobile, ouvrez l'adresse puis « Installer » / « Ajouter à l'écran d'accueil ».

## Mode hors ligne
Après une première connexion en ligne, l'app charge et met en cache événements, invités et cadeaux. Hors connexion, tout reste utilisable (y compris QR et scan d'entrée) ; les modifications sont mises en file d'attente puis envoyées automatiquement au retour du réseau (bandeau doré en haut de l'écran).

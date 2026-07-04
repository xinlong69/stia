# stia

🗺 Your travel companion that makes itineraries made effortless.

```
stia
├─ .claude
│  └─ settings.json
├─ .devcontainer
├─ .docs
├─ .husky
│  ├─ pre-commit
│  └─ _
│     ├─ applypatch-msg
│     ├─ commit-msg
│     ├─ h
│     ├─ husky.sh
│     ├─ post-applypatch
│     ├─ post-checkout
│     ├─ post-commit
│     ├─ post-merge
│     ├─ post-rewrite
│     ├─ pre-applypatch
│     ├─ pre-auto-gc
│     ├─ pre-commit
│     ├─ pre-merge-commit
│     ├─ pre-push
│     ├─ pre-rebase
│     └─ prepare-commit-msg
├─ .npmrc
├─ .nvmrc
├─ AGENTS.md
├─ apps
│  ├─ mobile
│  │  ├─ .expo
│  │  │  ├─ dev
│  │  │  │  └─ logs
│  │  │  │     └─ start.log
│  │  │  ├─ devices.json
│  │  │  ├─ README.md
│  │  │  ├─ types
│  │  │  │  └─ router.d.ts
│  │  │  └─ web
│  │  │     └─ cache
│  │  │        └─ production
│  │  │           └─ images
│  │  │              └─ favicon
│  │  │                 └─ favicon-a4e030697a7571b3e95d31860e4da55d2f98e5e861e2b55e414f45a8556828ba-contain-transparent
│  │  │                    └─ favicon-48.png
│  │  ├─ app.json
│  │  ├─ assets
│  │  │  ├─ expo.icon
│  │  │  │  ├─ Assets
│  │  │  │  │  ├─ expo-symbol 2.svg
│  │  │  │  │  └─ grid.png
│  │  │  │  └─ icon.json
│  │  │  └─ images
│  │  │     ├─ android-icon-background.png
│  │  │     ├─ android-icon-foreground.png
│  │  │     ├─ android-icon-monochrome.png
│  │  │     ├─ expo-badge-white.png
│  │  │     ├─ expo-badge.png
│  │  │     ├─ expo-logo.png
│  │  │     ├─ favicon.png
│  │  │     ├─ icon.png
│  │  │     ├─ logo-glow.png
│  │  │     ├─ react-logo.png
│  │  │     ├─ react-logo@2x.png
│  │  │     ├─ react-logo@3x.png
│  │  │     ├─ splash-icon.png
│  │  │     ├─ tabIcons
│  │  │     │  ├─ explore.png
│  │  │     │  ├─ explore@2x.png
│  │  │     │  ├─ explore@3x.png
│  │  │     │  ├─ home.png
│  │  │     │  ├─ home@2x.png
│  │  │     │  └─ home@3x.png
│  │  │     └─ tutorial-web.png
│  │  ├─ eas.json
│  │  ├─ eslint.config.mts
│  │  ├─ expo-env.d.ts
│  │  ├─ index.ts
│  │  ├─ metro.config.js
│  │  ├─ nativewind-env.d.ts
│  │  ├─ package.json
│  │  ├─ postcss.config.mjs
│  │  ├─ src
│  │  │  ├─ app
│  │  │  │  ├─ index.tsx
│  │  │  │  ├─ post
│  │  │  │  │  └─ [id].tsx
│  │  │  │  └─ _layout.tsx
│  │  │  ├─ constants
│  │  │  │  └─ theme.ts
│  │  │  ├─ hooks
│  │  │  │  ├─ use-color-scheme.ts
│  │  │  │  ├─ use-color-scheme.web.ts
│  │  │  │  └─ use-theme.ts
│  │  │  ├─ styles.css
│  │  │  └─ utils
│  │  │     ├─ api.tsx
│  │  │     ├─ auth.ts
│  │  │     ├─ base-url.ts
│  │  │     └─ session-store.ts
│  │  ├─ tsconfig.json
│  │  └─ turbo.json
│  └─ web
│     ├─ .dockerignore
│     ├─ .npmrc
│     ├─ .prettierignore
│     ├─ .prettierrc
│     ├─ Dockerfile
│     ├─ eslint.config.ts
│     ├─ messages
│     │  └─ en.json
│     ├─ next-env.d.ts
│     ├─ next.config.ts
│     ├─ package.json
│     ├─ playwright.config.ts
│     ├─ postcss.config.mjs
│     ├─ public
│     │  ├─ favicon.ico
│     │  ├─ file.svg
│     │  ├─ globe.svg
│     │  ├─ next.svg
│     │  ├─ vercel.svg
│     │  └─ window.svg
│     ├─ README.md
│     ├─ src
│     │  ├─ app
│     │  │  ├─ api
│     │  │  │  ├─ auth
│     │  │  │  │  └─ [...all]
│     │  │  │  │     └─ route.ts
│     │  │  │  └─ trpc
│     │  │  │     └─ [trpc]
│     │  │  │        └─ route.ts
│     │  │  └─ [locale]
│     │  │     ├─ (auth)
│     │  │     │  ├─ login
│     │  │     │  │  ├─ page.tsx
│     │  │     │  │  └─ _components
│     │  │     │  │     ├─ login-form.tsx
│     │  │     │  │     └─ login-google-button.tsx
│     │  │     │  ├─ password-forget
│     │  │     │  │  ├─ page.tsx
│     │  │     │  │  └─ _components
│     │  │     │  │     └─ forget-password-form.tsx
│     │  │     │  ├─ password-reset
│     │  │     │  │  ├─ page.tsx
│     │  │     │  │  └─ _components
│     │  │     │  │     └─ password-reset-form.tsx
│     │  │     │  └─ register
│     │  │     │     ├─ page.tsx
│     │  │     │     └─ _components
│     │  │     │        └─ register-form.tsx
│     │  │     ├─ (main)
│     │  │     │  ├─ calendar
│     │  │     │  │  ├─ page.tsx
│     │  │     │  │  └─ _components
│     │  │     │  ├─ dashboard
│     │  │     │  │  ├─ page.tsx
│     │  │     │  │  └─ _components
│     │  │     │  │     ├─ stats-grid.tsx
│     │  │     │  │     └─ trip-banner.tsx
│     │  │     │  ├─ feed
│     │  │     │  │  ├─ page.tsx
│     │  │     │  │  └─ _components
│     │  │     │  ├─ layout.tsx
│     │  │     │  ├─ plan
│     │  │     │  │  ├─ page.tsx
│     │  │     │  │  └─ _components
│     │  │     │  └─ profile
│     │  │     │     ├─ page.tsx
│     │  │     │     └─ _components
│     │  │     │        └─ profile-details.tsx
│     │  │     ├─ layout.tsx
│     │  │     ├─ not-found.tsx
│     │  │     ├─ page.tsx
│     │  │     ├─ shared
│     │  │     │  ├─ footer.tsx
│     │  │     │  ├─ header.tsx
│     │  │     │  ├─ mode-toggle.tsx
│     │  │     │  ├─ show-toggle.tsx
│     │  │     │  └─ _components
│     │  │     ├─ styles.css
│     │  │     └─ [...rest]
│     │  │        └─ page.tsx
│     │  ├─ auth
│     │  │  ├─ client.ts
│     │  │  └─ server.ts
│     │  ├─ env.ts
│     │  ├─ i18n
│     │  │  ├─ navigation.ts
│     │  │  ├─ request.ts
│     │  │  └─ routing.ts
│     │  ├─ proxy.ts
│     │  └─ trpc
│     │     ├─ query-client.ts
│     │     ├─ react.tsx
│     │     └─ server.tsx
│     ├─ tests
│     │  ├─ e2e
│     │  │  └─ example.spec.ts
│     │  └─ integration
│     ├─ tsconfig.json
│     ├─ turbo.json
│     ├─ vitest.config.ts
│     └─ vitest.shims.d.ts
├─ CLAUDE.md
├─ docker-compose.yaml
├─ infra
│  ├─ garage
│  │  └─ config.toml
│  └─ k8s
├─ LICENSE
├─ package.json
├─ packages
│  ├─ api
│  │  ├─ eslint.config.ts
│  │  ├─ package.json
│  │  ├─ src
│  │  │  ├─ index.ts
│  │  │  ├─ root.ts
│  │  │  ├─ routers
│  │  │  │  ├─ auth.ts
│  │  │  │  └─ post.ts
│  │  │  └─ trpc.ts
│  │  └─ tsconfig.json
│  ├─ auth
│  │  ├─ env.ts
│  │  ├─ eslint.config.ts
│  │  ├─ package.json
│  │  ├─ script
│  │  │  └─ auth-cli.ts
│  │  ├─ src
│  │  │  └─ index.ts
│  │  └─ tsconfig.json
│  ├─ db
│  │  ├─ drizzle
│  │  │  ├─ 0000_numerous_penance.sql
│  │  │  └─ meta
│  │  │     ├─ 0000_snapshot.json
│  │  │     └─ _journal.json
│  │  ├─ drizzle.config.ts
│  │  ├─ eslint.config.ts
│  │  ├─ package.json
│  │  ├─ src
│  │  │  ├─ client.ts
│  │  │  ├─ index.ts
│  │  │  ├─ schema
│  │  │  │  ├─ accomodation.ts
│  │  │  │  ├─ auth.ts
│  │  │  │  ├─ checklist.ts
│  │  │  │  ├─ expense.ts
│  │  │  │  ├─ itinerary.ts
│  │  │  │  ├─ post.ts
│  │  │  │  ├─ transportation.ts
│  │  │  │  └─ trip.ts
│  │  │  └─ schema.ts
│  │  └─ tsconfig.json
│  ├─ email
│  │  ├─ eslint.config.ts
│  │  ├─ package.json
│  │  ├─ src
│  │  │  ├─ client.ts
│  │  │  ├─ emails
│  │  │  │  ├─ index.ts
│  │  │  │  ├─ send-account-verification-email.ts
│  │  │  │  ├─ send-password-reset-confirmation-email.ts
│  │  │  │  └─ send-password-reset-request-email.ts
│  │  │  ├─ index.ts
│  │  │  ├─ send-email.ts
│  │  │  └─ templates
│  │  │     ├─ account-verification-email.tsx
│  │  │     ├─ password-reset-confirmation-email.tsx
│  │  │     └─ password-reset-request-email.tsx
│  │  └─ tsconfig.json
│  ├─ ui
│  │  ├─ components.json
│  │  ├─ eslint.config.ts
│  │  ├─ package.json
│  │  ├─ src
│  │  │  ├─ components
│  │  │  │  ├─ accordion.tsx
│  │  │  │  ├─ alert-dialog.tsx
│  │  │  │  ├─ alert.tsx
│  │  │  │  ├─ aspect-ratio.tsx
│  │  │  │  ├─ attachment.tsx
│  │  │  │  ├─ avatar.tsx
│  │  │  │  ├─ badge.tsx
│  │  │  │  ├─ breadcrumb.tsx
│  │  │  │  ├─ bubble.tsx
│  │  │  │  ├─ button-group.tsx
│  │  │  │  ├─ button.tsx
│  │  │  │  ├─ calendar.tsx
│  │  │  │  ├─ card.tsx
│  │  │  │  ├─ carousel.tsx
│  │  │  │  ├─ chart.tsx
│  │  │  │  ├─ checkbox.tsx
│  │  │  │  ├─ collapsible.tsx
│  │  │  │  ├─ dropdown-menu.tsx
│  │  │  │  ├─ empty.tsx
│  │  │  │  ├─ field.tsx
│  │  │  │  ├─ hover-card.tsx
│  │  │  │  ├─ index.ts
│  │  │  │  ├─ input-group.tsx
│  │  │  │  ├─ input-otp.tsx
│  │  │  │  ├─ input.tsx
│  │  │  │  ├─ item.tsx
│  │  │  │  ├─ label.tsx
│  │  │  │  ├─ marker.tsx
│  │  │  │  ├─ message-scroller.tsx
│  │  │  │  ├─ message.tsx
│  │  │  │  ├─ navigation-menu.tsx
│  │  │  │  ├─ pagination.tsx
│  │  │  │  ├─ popover.tsx
│  │  │  │  ├─ progress.tsx
│  │  │  │  ├─ radio-group.tsx
│  │  │  │  ├─ resizable.tsx
│  │  │  │  ├─ scroll-area.tsx
│  │  │  │  ├─ select.tsx
│  │  │  │  ├─ separator.tsx
│  │  │  │  ├─ sheet.tsx
│  │  │  │  ├─ sidebar.tsx
│  │  │  │  ├─ skeleton.tsx
│  │  │  │  ├─ slider.tsx
│  │  │  │  ├─ spinner.tsx
│  │  │  │  ├─ switch.tsx
│  │  │  │  ├─ table.tsx
│  │  │  │  ├─ tabs.tsx
│  │  │  │  ├─ text-area.tsx
│  │  │  │  ├─ theme.tsx
│  │  │  │  ├─ toast.tsx
│  │  │  │  ├─ toggle-group.tsx
│  │  │  │  ├─ toggle.tsx
│  │  │  │  └─ tooltip.tsx
│  │  │  ├─ hooks
│  │  │  │  └─ use-mobile.tsx
│  │  │  ├─ icons
│  │  │  │  └─ index.ts
│  │  │  └─ index.ts
│  │  └─ tsconfig.json
│  └─ validators
│     ├─ eslint.config.ts
│     ├─ package.json
│     ├─ src
│     │  ├─ auth.ts
│     │  └─ index.ts
│     └─ tsconfig.json
├─ pnpm-lock.yaml
├─ pnpm-workspace.yaml
├─ README.md
├─ scripts
│  └─ start-database.sh
├─ toolings
│  ├─ eslint-config
│  │  ├─ base.ts
│  │  ├─ nextjs.ts
│  │  ├─ package.json
│  │  ├─ react.ts
│  │  └─ tsconfig.json
│  ├─ prettier-config
│  │  ├─ index.ts
│  │  ├─ package.json
│  │  └─ tsconfig.json
│  ├─ tailwind-config
│  │  ├─ eslint.config.ts
│  │  ├─ package.json
│  │  ├─ postcss-config.js
│  │  ├─ tailwind.config.ts
│  │  ├─ theme.css
│  │  └─ tsconfig.json
│  └─ typescript-config
│     ├─ base.json
│     ├─ compiled-package.json
│     └─ package.json
├─ turbo
│  └─ generators
│     ├─ config.js
│     ├─ package.json
│     └─ templates
│        └─ turborepo-generators.hbs
└─ turbo.json

```
# KaamSaathi (कामसाथी) 🇮🇳

> **Phone se free time ko useful banao.**
> Genuine Indian community platform for social creator follows, app testing, and surveys with real Indian Rupee (₹) rewards.

## 🚀 Production Architecture

The codebase has been refactored from a monolithic 2,371-line single file into a modular, production-grade architecture:

```
kaamsaathi/
├── index.html                 # Semantic HTML5 entry with metadata & responsive viewport
├── package.json               # Modern dependencies and build scripts
├── tsconfig.json              # Strict TypeScript configuration
├── vite.config.ts             # Vite 6 config with React & Vitest support
├── tailwind.config.js         # Tailwind CSS styling with custom animations
├── postcss.config.js          # PostCSS autoprefixer pipeline
└── src/
    ├── main.tsx               # Application root entry point with Context Providers
    ├── App.tsx                # Clean, declarative route dispatcher & layout
    ├── index.css              # Global styles & Tailwind base directives
    ├── types/                 # Domain and UI TypeScript models
    │   └── index.ts
    ├── config/                # Centralized app & profile configuration
    │   └── appConfig.ts
    ├── data/                  # Initial seed data for opportunities, members, etc.
    │   ├── initialOpportunities.ts
    │   ├── initialTransactions.ts
    │   ├── initialMembers.ts
    │   ├── communityStories.ts
    │   └── faqs.ts
    ├── services/              # Resilient storage service with try/catch fallback
    │   └── storage.ts
    ├── context/               # React Context state management
    │   ├── AppContext.tsx
    │   └── ToastContext.tsx
    ├── hooks/                 # Custom React hooks
    │   ├── useApp.ts
    │   └── useToast.ts
    ├── components/            # Modular React components
    │   ├── common/            # Navbar, Footer, Toast
    │   ├── home/              # Hero, HowItWorks, SocialGrowth, Stories, Rewards, FAQ, etc.
    │   ├── opportunities/     # OpportunitiesSection, OpportunityCard, CategoryFilter
    │   ├── dashboard/         # Member Dashboard View
    │   ├── profile/           # Member Profile Editor Form
    │   ├── admin/             # Admin Campaign Management Dashboard
    │   ├── legal/             # Terms and Privacy Policy
    │   └── modals/            # Detail, Participate, and Withdraw Modals
    └── tests/                 # Unit & integration test suites
        ├── app.test.tsx
        └── storage.test.ts
```

## 🛠️ Development & Build Commands

- **Development server**: `npm run dev`
- **Typecheck**: `npm run typecheck`
- **Run tests**: `npm run test`
- **Production build**: `npm run build`
- **Preview build**: `npm run preview`

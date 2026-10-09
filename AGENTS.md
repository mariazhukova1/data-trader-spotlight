<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Dashboard architecture
- Keep trading views in a shared dashboard component and use distinct TanStack leaf routes for sidebar destinations so navigation stays type-safe and shareable.
- Keep illustrative market data in a browser-safe data module; workspace interactions are session-only until live market services or persistence are requested.
- Define all visual roles in the global CSS design system so charts and workspace surfaces use the same semantic tokens.

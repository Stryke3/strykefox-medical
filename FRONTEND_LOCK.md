# StrykeFox Medical Frontend Lock

Canonical production frontend:

- `strykefox-medical.vercel.app`

Do not pin routing to an immutable deployment URL unless that deployment has
been verified as active. Deleted deployment URLs return `DEPLOYMENT_NOT_FOUND`;
the stable project alias above must remain the edge-router origin for the
MBNAUPOUG homepage.

Only this MBNAUPOUG frontend should serve:

- `https://strykefox.com`
- `https://www.strykefox.com`
- `https://strykefox-medical.vercel.app`

This deployment keeps the MBNAUPOUG StrykeFox Medical homepage as the default:
the white-background SFM frontend with built-in clinical imagery, including the
doctor holding a cell phone. It hard-routes public CarePath, Mommy Care Kit, and
NorthStar paths to their standalone properties before any stale in-app pages can
render.

Do not promote, alias, or deploy a replacement StrykeFox Medical frontend unless explicitly instructed.

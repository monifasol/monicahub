# Seeklient en `/lab/seeklient`

MonicaHub solo hace de puerta: reescribe esa ruta al deploy de Seeklient.

La guía completa (ambas apps, variables, Blob, contraseñas, checklist) está en el repo Seeklient:

→ [seeklient/docs/INTEGRACION_MONICAHUB.md](../../seeklient/docs/INTEGRACION_MONICAHUB.md)

## En este repo (resumen)

1. **`next.config.mjs`** — `rewrites` en `beforeFiles` hacia `SEEKLIENT_ORIGIN`.
2. **Vercel (MonicaHub)** — `SEEKLIENT_ORIGIN=https://<seeklient>.vercel.app` (sin barra final) + redeploy.
3. **Lab** — `LAB_PASSWORD` protege `/lab/*` (incluida la entrada a Seeklient). La contraseña de la app Seeklient es otra: `SEEKLIENT_ACCESS_TOKEN` en el proyecto Seeklient.

# Copilot Instructions for Stock-Prediction-Portal

## Big Picture Architecture
- **Monorepo Structure**: Two main folders: `backend/` (Django REST API) and `frontend/` (React + Vite SPA).
- **Backend**: Django project (`stock_prediction_main`) with two apps:
  - `accounts`: Handles user registration via REST API (`api/v1/register/`).
  - `api`: Entry point for API routes, currently includes user registration.
- **Frontend**: React app using Vite, with components in `src/Components/`. Communicates with backend via HTTP (likely using Axios).

## Developer Workflows
- **Backend**:
  - Run server: `python backend/manage.py runserver`
  - Migrations: `python backend/manage.py makemigrations` and `python backend/manage.py migrate`
  - Requirements: Install from `backend/requirements.txt` (Django, DRF, CORS, environ)
  - Environment: Uses `.env` in `backend/` for secrets/config (see `settings.py`)
- **Frontend**:
  - Start dev server: `npm run dev` in `frontend/`
  - Build: `npm run build`
  - Lint: `npm run lint`
  - Preview: `npm run preview`

## Project-Specific Patterns & Conventions
- **API Routing**: All API endpoints are under `/api/v1/` (see `backend/stock_prediction_main/urls.py`).
- **User Registration**: POST to `/api/v1/register/` with `username`, `email`, `password` (see `accounts/serializers.py` and `views.py`).
- **Environment Variables**: Managed via `django-environ` and `.env` file (see `settings.py`).
- **Frontend Components**: Organized by feature in `src/Components/` (e.g., `Login.jsx`, `Register.jsx`).
- **No Custom Models Yet**: Both `accounts/models.py` and `api/models.py` are empty; user model is Django default.

## Integration Points
- **Frontend/Backend Communication**: Use Axios in React to call Django REST endpoints (example: registration).
- **CORS**: Enabled via `django-cors-headers` for local dev.
- **Static Files**: Not customized; default Django/React handling.

## Key Files & Directories
- `backend/stock_prediction_main/settings.py`: Django config, environment, installed apps.
- `backend/accounts/serializers.py`: User registration logic.
- `backend/accounts/views.py`: Registration API view.
- `backend/api/urls.py`: API endpoint routing.
- `frontend/src/Components/`: Main React components.
- `frontend/package.json`: Scripts and dependencies.

## Example: Register User Flow
1. Frontend POSTs to `/api/v1/register/` with user data.
2. Backend creates user via `UserSerializer` and `RegisterView`.
3. Response returned to frontend for further handling.

---

**For AI agents:**
- Always check for `.env` and required secrets before running backend.
- Respect API versioning and route structure.
- Use Django management commands for migrations and server control.
- Use Vite scripts for frontend workflows.
- Follow existing patterns for new endpoints/components.

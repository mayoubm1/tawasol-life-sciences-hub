# Tawasol realtime data model proposal

The front end is now prepared to consume a public, read-only `hubs` table and to refresh the globe when approved hub records change. **No migration has been applied yet**: the connected Supabase account currently exposes a different project than the supplied Tawasol project URL, and the intended table ownership and publication workflow have not been confirmed.

## Proposed tables

| Table | Purpose | Key fields |
|---|---|---|
| `hubs` | The canonical map of flagship and partner hubs shown on the globe. | `id`, `name`, `location`, `latitude`, `longitude`, `type`, `region`, `specializations`, `strategic_value`, `is_active`, `sort_order` |
| `hub_updates` | Curated news, research milestones, calls, and partnership updates attached to a hub. | `id`, `hub_id`, `title`, `summary`, `source_url`, `published_at`, `status` |
| `media_assets` | Approved image, video, and document references for pages and hub panels. | `id`, `hub_id`, `asset_type`, `storage_path`, `alt_text`, `credit`, `is_featured` |
| `research_initiatives` | Future M2–3M-linked research and innovation initiatives. | `id`, `title`, `theme`, `stage`, `hub_id`, `summary`, `status` |

## `hubs` migration draft

```sql
create table if not exists public.hubs (
  id text primary key,
  name text not null,
  location text not null,
  latitude double precision not null check (latitude between -90 and 90),
  longitude double precision not null check (longitude between -180 and 180),
  type text not null check (type in ('flagship', 'partner')),
  region text,
  contact_email text,
  phone text,
  address text,
  website text,
  key_contact text,
  specializations text[] not null default '{}',
  partnership_priority text,
  strategic_value text,
  description text,
  facilities text[] not null default '{}',
  is_active boolean not null default true,
  sort_order integer not null default 100,
  updated_at timestamptz not null default now()
);

alter table public.hubs enable row level security;

create policy "public can read active hubs"
on public.hubs for select
to anon, authenticated
using (is_active = true);

-- Restrict insert/update/delete to an authenticated admin workflow.
-- Do not permit anonymous writes.
alter publication supabase_realtime add table public.hubs;
```

## Publishing workflow

Public visitors should be able to **read only**. Curators should publish updates through an authenticated internal admin interface or a protected server-side route. The browser must use only the public anonymous key. A service-role key must remain server-side and must never be committed, placed in Vite variables, or sent to a browser.

## Activation steps

1. Confirm the intended Supabase project and the owner responsible for schema changes.
2. Review the table design and permission policy above.
3. Apply the migration through the project’s database controls.
4. Add the project URL and public anonymous key as `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in Vercel.
5. Trigger a fresh deployment. The globe will keep using curated local data until live rows are available, then it will automatically subscribe to `hubs` updates.

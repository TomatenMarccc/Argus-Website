-- News posts for the Artemis Civil Systems website.
--
-- The website reads published posts through the service role from server-side
-- code only. Row level security stays on, and no anon policy is granted, so the
-- table is not readable with the public anon key.

create extension if not exists "pgcrypto";

create table if not exists public.news_posts (
  id           uuid primary key default gen_random_uuid(),
  slug         text not null unique,
  title        text not null,
  excerpt      text not null,
  body         text not null,
  category     text,
  tags         text[] not null default '{}',
  cover_image  text,
  images       text[] not null default '{}',
  published_at date not null default current_date,
  status       text not null default 'draft'
               check (status in ('draft', 'published')),
  title_en     text,
  excerpt_en   text,
  body_en      text,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

create index if not exists news_posts_published_idx
  on public.news_posts (status, published_at desc);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists news_posts_updated_at on public.news_posts;
create trigger news_posts_updated_at
  before update on public.news_posts
  for each row execute function public.set_updated_at();

alter table public.news_posts enable row level security;

-- Deliberately no policy for anon/authenticated: all access goes through the
-- service role in server-side route handlers, which bypasses RLS.

-- Storage bucket for cover images (public read, writes via service role).
insert into storage.buckets (id, name, public)
values ('news', 'news', true)
on conflict (id) do nothing;

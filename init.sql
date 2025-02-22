--
-- PostgreSQL database dump
--

-- Dumped from database version 17.2 (Debian 17.2-1.pgdg120+1)
-- Dumped by pg_dump version 17.0

-- Started on 2025-02-22 07:47:20

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 4 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--




--
-- TOC entry 3371 (class 0 OID 0)
-- Dependencies: 4
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 219 (class 1259 OID 17235)
-- Name: Clientes; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."Clientes" (
    "Id" integer NOT NULL,
    "Nome" text NOT NULL,
    "Idade" bigint NOT NULL,
    "Estado_Civil" text NOT NULL,
    "CPF" text NOT NULL,
    "Cidade" text NOT NULL,
    "Estado" text NOT NULL
);


--
-- TOC entry 218 (class 1259 OID 17234)
-- Name: Clientes_Id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public."Clientes" ALTER COLUMN "Id" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public."Clientes_Id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 217 (class 1259 OID 17229)
-- Name: __EFMigrationsHistory; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."__EFMigrationsHistory" (
    "MigrationId" character varying(150) NOT NULL,
    "ProductVersion" character varying(32) NOT NULL
);


--
-- TOC entry 3365 (class 0 OID 17235)
-- Dependencies: 219
-- Data for Name: Clientes; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public."Clientes" VALUES (1, 'Rubens', 24, 'Casado', '39824271731', 'Rio de Janeiro', 'RJ');
INSERT INTO public."Clientes" VALUES (2, 'Thiago Carvalho', 25, 'Solteiro', '19951573348', 'Belford Roxo', 'RJ');
INSERT INTO public."Clientes" VALUES (3, 'Fabiano', 48, 'RJ', '14456692237', 'Nova Iguaçu', 'RJ');

--
-- TOC entry 3363 (class 0 OID 17229)
-- Dependencies: 217
-- Data for Name: __EFMigrationsHistory; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public."__EFMigrationsHistory" VALUES ('20250221180225_InitalPersistedGrantDbMigration', '9.0.2');


--
-- TOC entry 3372 (class 0 OID 0)
-- Dependencies: 218
-- Name: Clientes_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."Clientes_Id_seq"', 75, true);


--
-- TOC entry 3217 (class 2606 OID 17241)
-- Name: Clientes PK_Clientes; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Clientes"
    ADD CONSTRAINT "PK_Clientes" PRIMARY KEY ("Id");


--
-- TOC entry 3215 (class 2606 OID 17233)
-- Name: __EFMigrationsHistory PK___EFMigrationsHistory; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."__EFMigrationsHistory"
    ADD CONSTRAINT "PK___EFMigrationsHistory" PRIMARY KEY ("MigrationId");


-- Completed on 2025-02-22 07:47:20

--
-- PostgreSQL database dump complete
--


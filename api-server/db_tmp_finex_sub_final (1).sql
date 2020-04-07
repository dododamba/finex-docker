-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le :  mar. 07 avr. 2020 à 02:44
-- Version du serveur :  10.4.10-MariaDB
-- Version de PHP :  7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `db_tmp_finex_sub_final`
--

-- --------------------------------------------------------

--
-- Structure de la table `hibernate_sequences`
--

CREATE TABLE `hibernate_sequences` (
  `sequence_name` varchar(255) NOT NULL,
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `hibernate_sequences`
--

INSERT INTO `hibernate_sequences` (`sequence_name`, `next_val`) VALUES
('default', 0);

-- --------------------------------------------------------

--
-- Structure de la table `tb_tmp_finex_caracteristique_techniques`
--

CREATE TABLE `tb_tmp_finex_caracteristique_techniques` (
  `id` bigint(20) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `deleted_at` date DEFAULT NULL,
  `libelle` varchar(255) DEFAULT NULL,
  `nature` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `valeur` varchar(255) DEFAULT NULL,
  `projet_id` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `tb_tmp_finex_contreparties`
--

CREATE TABLE `tb_tmp_finex_contreparties` (
  `id` bigint(20) NOT NULL,
  `annee_budgetaire` datetime DEFAULT NULL,
  `linge_bugetaire` varchar(255) DEFAULT NULL,
  `object_depense` varchar(255) DEFAULT NULL,
  `somme` double NOT NULL,
  `taux` double NOT NULL,
  `financement_id` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `tb_tmp_finex_controles`
--

CREATE TABLE `tb_tmp_finex_controles` (
  `id` bigint(20) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `date_controle` datetime DEFAULT NULL,
  `decription` varchar(5000) DEFAULT NULL,
  `deleted_at` date DEFAULT NULL,
  `libelle` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `type_controle` int(11) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `controlleur_id` bigint(20) DEFAULT NULL,
  `projet_id` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `tb_tmp_finex_demande_decaissements`
--

CREATE TABLE `tb_tmp_finex_demande_decaissements` (
  `id` bigint(20) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `deleted_at` date DEFAULT NULL,
  `devise` varchar(255) DEFAULT NULL,
  `fichier` tinyblob DEFAULT NULL,
  `methode_decaissement` int(11) NOT NULL,
  `montant` double NOT NULL,
  `note` varchar(6000) DEFAULT NULL,
  `objet_decaissement` varchar(6000) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `entreprise_id` bigint(20) DEFAULT NULL,
  `maitre_douvrage_id` bigint(20) DEFAULT NULL,
  `projet_id` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `tb_tmp_finex_directions`
--

CREATE TABLE `tb_tmp_finex_directions` (
  `id` bigint(20) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `deleted_at` date DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `libelle` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `institution_id` bigint(20) DEFAULT NULL,
  `responsable_id` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `tb_tmp_finex_employes`
--

CREATE TABLE `tb_tmp_finex_employes` (
  `id` bigint(20) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `date_embauche` datetime DEFAULT NULL,
  `date_naissance` datetime DEFAULT NULL,
  `deleted_at` date DEFAULT NULL,
  `matricule` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `salaire` double DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `direction_id` bigint(20) DEFAULT NULL,
  `tache_id` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `tb_tmp_finex_encaissements`
--

CREATE TABLE `tb_tmp_finex_encaissements` (
  `id` bigint(20) NOT NULL,
  `date_signature` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `deleted_at` date DEFAULT NULL,
  `montant` double NOT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `date_encaissement` datetime DEFAULT NULL,
  `reference_piece_justificative` varchar(255) DEFAULT NULL,
  `financement_id` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `tb_tmp_finex_entreprises`
--

CREATE TABLE `tb_tmp_finex_entreprises` (
  `id` bigint(20) NOT NULL,
  `adresse` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `deleted_at` date DEFAULT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `numero_id_fiscal` varchar(255) DEFAULT NULL,
  `raison_sociale` varchar(255) DEFAULT NULL,
  `responsable` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `tb_tmp_finex_etapes`
--

CREATE TABLE `tb_tmp_finex_etapes` (
  `id` bigint(20) NOT NULL,
  `cout` double NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `date_debut` datetime DEFAULT NULL,
  `date_fin` datetime DEFAULT NULL,
  `deleted_at` date DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `livrable` varchar(1000) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `groupe_tavail_id` bigint(20) DEFAULT NULL,
  `projet_id` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `tb_tmp_finex_etats`
--

CREATE TABLE `tb_tmp_finex_etats` (
  `id` bigint(20) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `deleted_at` date DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `libelle` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `tb_tmp_finex_fichiers`
--

CREATE TABLE `tb_tmp_finex_fichiers` (
  `id` bigint(20) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `deleted_at` date DEFAULT NULL,
  `extention` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `source` varchar(255) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `operation_id` bigint(20) DEFAULT NULL,
  `projet_id` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `tb_tmp_finex_financements`
--

CREATE TABLE `tb_tmp_finex_financements` (
  `id` bigint(20) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `date_signature` datetime DEFAULT NULL,
  `deleted_at` date DEFAULT NULL,
  `device` varchar(255) DEFAULT NULL,
  `libelle` varchar(255) DEFAULT NULL,
  `montant_encaisse` double NOT NULL,
  `montant_restant` double NOT NULL,
  `montant_total` double NOT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `projet_id` bigint(20) DEFAULT NULL,
  `type_financement_id` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `tb_tmp_finex_financement_partenaires`
--

CREATE TABLE `tb_tmp_finex_financement_partenaires` (
  `financement_id` bigint(20) NOT NULL,
  `partenaire_id` bigint(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `tb_tmp_finex_groupe_travails`
--

CREATE TABLE `tb_tmp_finex_groupe_travails` (
  `id` bigint(20) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `deleted_at` date DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `administrateur_id` bigint(20) DEFAULT NULL,
  `projet_id` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `tb_tmp_finex_groupe_travails_employes`
--

CREATE TABLE `tb_tmp_finex_groupe_travails_employes` (
  `groupe_travail_id` bigint(20) NOT NULL,
  `employe_id` bigint(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `tb_tmp_finex_information_banquaires`
--

CREATE TABLE `tb_tmp_finex_information_banquaires` (
  `id` bigint(20) NOT NULL,
  `adresse` varchar(255) DEFAULT NULL,
  `code_swift` varchar(255) DEFAULT NULL,
  `information` varchar(255) DEFAULT NULL,
  `nom_banque` varchar(255) DEFAULT NULL,
  `numero_compte` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `entreprise_id` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `tb_tmp_finex_information_employes`
--

CREATE TABLE `tb_tmp_finex_information_employes` (
  `id` bigint(20) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `deleted_at` date DEFAULT NULL,
  `libelle` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `valeur` varchar(255) DEFAULT NULL,
  `employe_id` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `tb_tmp_finex_information_partenaires`
--

CREATE TABLE `tb_tmp_finex_information_partenaires` (
  `id` bigint(20) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `deleted_at` date DEFAULT NULL,
  `libelle` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `valeur` varchar(255) DEFAULT NULL,
  `partenaire_id` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `tb_tmp_finex_institutions`
--

CREATE TABLE `tb_tmp_finex_institutions` (
  `id` bigint(20) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `deleted_at` date DEFAULT NULL,
  `description` varchar(5000) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `employe_responsable_id` bigint(20) DEFAULT NULL,
  `maitre_douvrage_id` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `tb_tmp_finex_maitre_doeuvres`
--

CREATE TABLE `tb_tmp_finex_maitre_doeuvres` (
  `id` bigint(20) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `deleted_at` date DEFAULT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `responsable` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `tb_tmp_finex_maitre_doeuvre_delegues`
--

CREATE TABLE `tb_tmp_finex_maitre_doeuvre_delegues` (
  `id` bigint(20) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `deleted_at` date DEFAULT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `responsable` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `tb_tmp_finex_maitre_douvrages`
--

CREATE TABLE `tb_tmp_finex_maitre_douvrages` (
  `id` bigint(20) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `deleted_at` date DEFAULT NULL,
  `description` varchar(5000) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `tb_tmp_finex_objectifs`
--

CREATE TABLE `tb_tmp_finex_objectifs` (
  `id` bigint(20) NOT NULL,
  `contenu` varchar(10000) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `deleted_at` date DEFAULT NULL,
  `indicateur` varchar(255) DEFAULT NULL,
  `indicateur_vlide` bit(1) NOT NULL,
  `libelle` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `projet_id` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `tb_tmp_finex_partenaires`
--

CREATE TABLE `tb_tmp_finex_partenaires` (
  `id` bigint(20) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `deleted_at` date DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `type_partenaire_id` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `tb_tmp_finex_priorites`
--

CREATE TABLE `tb_tmp_finex_priorites` (
  `id` bigint(20) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `deleted_at` date DEFAULT NULL,
  `libelle` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `tache_id` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `tb_tmp_finex_projets`
--

CREATE TABLE `tb_tmp_finex_projets` (
  `id` bigint(20) NOT NULL,
  `budget_previsionel` double NOT NULL,
  `budget_reel` double NOT NULL,
  `cellule_dexecution` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `date_debut` datetime DEFAULT NULL,
  `date_fin` datetime DEFAULT NULL,
  `date_livraison` datetime DEFAULT NULL,
  `deleted_at` date DEFAULT NULL,
  `description` varchar(5000) DEFAULT NULL,
  `etat` int(11) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `numero_projet` int(11) NOT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `maitre_doeuvre_id` bigint(20) DEFAULT NULL,
  `maitre_doeuvre_delegue_id` bigint(20) DEFAULT NULL,
  `projet_controlleur_id` bigint(20) DEFAULT NULL,
  `responsable_id` bigint(20) DEFAULT NULL,
  `secteur_id` bigint(20) DEFAULT NULL,
  `type_marche_id` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `tb_tmp_finex_projet_controlleurs`
--

CREATE TABLE `tb_tmp_finex_projet_controlleurs` (
  `id` bigint(20) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `deleted_at` date DEFAULT NULL,
  `description` varchar(5000) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `etape_id` bigint(20) DEFAULT NULL,
  `projet_id` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `tb_tmp_finex_projet_entreprises`
--

CREATE TABLE `tb_tmp_finex_projet_entreprises` (
  `projet_id` bigint(20) NOT NULL,
  `entreprise_id` bigint(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `tb_tmp_finex_projet_maitredouvrages`
--

CREATE TABLE `tb_tmp_finex_projet_maitredouvrages` (
  `projet_id` bigint(20) NOT NULL,
  `maitredouvrage_id` bigint(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `tb_tmp_finex_projet_partenaires`
--

CREATE TABLE `tb_tmp_finex_projet_partenaires` (
  `projet_id` bigint(20) NOT NULL,
  `partenaire_id` bigint(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `tb_tmp_finex_projet_regions`
--

CREATE TABLE `tb_tmp_finex_projet_regions` (
  `projet_id` bigint(20) NOT NULL,
  `region_id` bigint(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `tb_tmp_finex_regions`
--

CREATE TABLE `tb_tmp_finex_regions` (
  `id` bigint(20) NOT NULL,
  `cheflieux` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `deleted_at` date DEFAULT NULL,
  `description` varchar(5000) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `tb_tmp_finex_remarques`
--

CREATE TABLE `tb_tmp_finex_remarques` (
  `id` bigint(20) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `deleted_at` date DEFAULT NULL,
  `message` varchar(5000) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `employe_id` bigint(20) DEFAULT NULL,
  `tache_id` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `tb_tmp_finex_resources`
--

CREATE TABLE `tb_tmp_finex_resources` (
  `id` bigint(20) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `deleted_at` date DEFAULT NULL,
  `libelle` varchar(255) DEFAULT NULL,
  `resource` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `tb_tmp_finex_roles`
--

CREATE TABLE `tb_tmp_finex_roles` (
  `id` bigint(20) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `deleted_at` date DEFAULT NULL,
  `name` varchar(60) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `tb_tmp_finex_role_privileges`
--

CREATE TABLE `tb_tmp_finex_role_privileges` (
  `role_id` bigint(20) NOT NULL,
  `resource_id` bigint(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `tb_tmp_finex_secteurs`
--

CREATE TABLE `tb_tmp_finex_secteurs` (
  `id` bigint(20) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `deleted_at` date DEFAULT NULL,
  `description` varchar(5000) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `tb_tmp_finex_secteurs_projets`
--

CREATE TABLE `tb_tmp_finex_secteurs_projets` (
  `secteur_id` bigint(20) NOT NULL,
  `projets_id` bigint(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `tb_tmp_finex_sous_secteurs`
--

CREATE TABLE `tb_tmp_finex_sous_secteurs` (
  `id` bigint(20) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `deleted_at` date DEFAULT NULL,
  `description` varchar(5000) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `tb_tmp_finex_taches`
--

CREATE TABLE `tb_tmp_finex_taches` (
  `id` bigint(20) NOT NULL,
  `cout` double NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `date_debut` date DEFAULT NULL,
  `date_fin` date DEFAULT NULL,
  `deleted_at` date DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `etape_id` bigint(20) DEFAULT NULL,
  `etat_id` bigint(20) DEFAULT NULL,
  `planificateur_id` bigint(20) DEFAULT NULL,
  `projet_id` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `tb_tmp_finex_tirages`
--

CREATE TABLE `tb_tmp_finex_tirages` (
  `id` bigint(20) NOT NULL,
  `date_signature` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `deleted_at` date DEFAULT NULL,
  `montant` double NOT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `date_decaissement` datetime DEFAULT NULL,
  `maitre_douvrage_id` bigint(20) DEFAULT NULL,
  `projet_id` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `tb_tmp_finex_type_financement`
--

CREATE TABLE `tb_tmp_finex_type_financement` (
  `id` bigint(20) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `deleted_at` date DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `libelle` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `tb_tmp_finex_type_marches`
--

CREATE TABLE `tb_tmp_finex_type_marches` (
  `id` bigint(20) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `deleted_at` date DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `tb_tmp_finex_type_partenaires`
--

CREATE TABLE `tb_tmp_finex_type_partenaires` (
  `id` bigint(20) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `deleted_at` date DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `libelle` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `tb_tmp_finex_users`
--

CREATE TABLE `tb_tmp_finex_users` (
  `id` bigint(20) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `deleted_at` date DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `tb_tmp_finex_user_roles`
--

CREATE TABLE `tb_tmp_finex_user_roles` (
  `user_id` bigint(20) NOT NULL,
  `role_id` bigint(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `hibernate_sequences`
--
ALTER TABLE `hibernate_sequences`
  ADD PRIMARY KEY (`sequence_name`);

--
-- Index pour la table `tb_tmp_finex_caracteristique_techniques`
--
ALTER TABLE `tb_tmp_finex_caracteristique_techniques`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UKstn0l29syi7cv0bavc3no35w8` (`slug`),
  ADD KEY `FK1v8gcqj9xhguhkac1jb7hre3h` (`projet_id`);

--
-- Index pour la table `tb_tmp_finex_contreparties`
--
ALTER TABLE `tb_tmp_finex_contreparties`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK4barc7exvir5uwg5nx7abv5ah` (`financement_id`);

--
-- Index pour la table `tb_tmp_finex_controles`
--
ALTER TABLE `tb_tmp_finex_controles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKgwg1npaulutcgpmsirufk77gw` (`controlleur_id`),
  ADD KEY `FKsqjspp1sas73kd0922a5r7pdm` (`projet_id`);

--
-- Index pour la table `tb_tmp_finex_demande_decaissements`
--
ALTER TABLE `tb_tmp_finex_demande_decaissements`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKnqj88fjo6cw7n5biilbdqxrit` (`entreprise_id`),
  ADD KEY `FKl7ifpm96wvrvj2iet9ly7vgmf` (`maitre_douvrage_id`),
  ADD KEY `FKitpilll94d47sgpc4rs6h3yj2` (`projet_id`);

--
-- Index pour la table `tb_tmp_finex_directions`
--
ALTER TABLE `tb_tmp_finex_directions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UKklogepmfbj5gayt5pc1rekbd9` (`libelle`),
  ADD KEY `FK5pasjtkh0jy3uyhga1y38nf7j` (`institution_id`),
  ADD KEY `FK3etrskr7p359gtca358xbvbjf` (`responsable_id`);

--
-- Index pour la table `tb_tmp_finex_employes`
--
ALTER TABLE `tb_tmp_finex_employes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKb1gajpawqx5jyyqh44dxqh0yv` (`direction_id`),
  ADD KEY `FKm8wews67x7ybskkcapgaxqkxg` (`tache_id`),
  ADD KEY `FKj1l4ly8qtp6if1aem5kqjk33q` (`user_id`);

--
-- Index pour la table `tb_tmp_finex_encaissements`
--
ALTER TABLE `tb_tmp_finex_encaissements`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKh4ywh5na4cynj58scdep6llol` (`financement_id`);

--
-- Index pour la table `tb_tmp_finex_entreprises`
--
ALTER TABLE `tb_tmp_finex_entreprises`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `tb_tmp_finex_etapes`
--
ALTER TABLE `tb_tmp_finex_etapes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK68x5iyo6rala0aypt24maa3d8` (`groupe_tavail_id`),
  ADD KEY `FKkdvvorsjffk1th2h2vep9wpuw` (`projet_id`);

--
-- Index pour la table `tb_tmp_finex_etats`
--
ALTER TABLE `tb_tmp_finex_etats`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `tb_tmp_finex_fichiers`
--
ALTER TABLE `tb_tmp_finex_fichiers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKjvusicd831kw3fps62lan2vqv` (`projet_id`);

--
-- Index pour la table `tb_tmp_finex_financements`
--
ALTER TABLE `tb_tmp_finex_financements`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK90ntftvdjo4qg5w0bjt5u54w4` (`projet_id`),
  ADD KEY `FKmlj1vl2655qvrw8o3wcvjfl7a` (`type_financement_id`);

--
-- Index pour la table `tb_tmp_finex_financement_partenaires`
--
ALTER TABLE `tb_tmp_finex_financement_partenaires`
  ADD PRIMARY KEY (`financement_id`,`partenaire_id`),
  ADD KEY `FK314338tc5ts5ffure6fwv6d9` (`partenaire_id`);

--
-- Index pour la table `tb_tmp_finex_groupe_travails`
--
ALTER TABLE `tb_tmp_finex_groupe_travails`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKdrlitt6e2jj6atvqgykegintt` (`administrateur_id`),
  ADD KEY `FK6xru7o12acsigdh36u5pc00m1` (`projet_id`);

--
-- Index pour la table `tb_tmp_finex_groupe_travails_employes`
--
ALTER TABLE `tb_tmp_finex_groupe_travails_employes`
  ADD PRIMARY KEY (`groupe_travail_id`,`employe_id`),
  ADD KEY `FK39hysbg54jgx4lyknf1v4tnrk` (`employe_id`);

--
-- Index pour la table `tb_tmp_finex_information_banquaires`
--
ALTER TABLE `tb_tmp_finex_information_banquaires`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKevr8xd29uhbvswvm9aguoybdb` (`entreprise_id`);

--
-- Index pour la table `tb_tmp_finex_information_employes`
--
ALTER TABLE `tb_tmp_finex_information_employes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKqnu6vfb1dny2imye45ttsjpa3` (`employe_id`);

--
-- Index pour la table `tb_tmp_finex_information_partenaires`
--
ALTER TABLE `tb_tmp_finex_information_partenaires`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK2qiun4n89b813hrjnb0upp6f6` (`libelle`),
  ADD KEY `FKlxinoxgkumyc97quk9vevftnm` (`partenaire_id`);

--
-- Index pour la table `tb_tmp_finex_institutions`
--
ALTER TABLE `tb_tmp_finex_institutions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UKh61jtbh5rwu68uya19v43ngvp` (`nom`),
  ADD KEY `FK3anpftk2yqhx83yb1ojs1i9jk` (`employe_responsable_id`),
  ADD KEY `FK258mj8o97m0686lu6td8rln23` (`maitre_douvrage_id`);

--
-- Index pour la table `tb_tmp_finex_maitre_doeuvres`
--
ALTER TABLE `tb_tmp_finex_maitre_doeuvres`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK734oj8np7en2sjdgvg0mp5ki4` (`nom`);

--
-- Index pour la table `tb_tmp_finex_maitre_doeuvre_delegues`
--
ALTER TABLE `tb_tmp_finex_maitre_doeuvre_delegues`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UKo6h596lj6503jpe2jfyblutox` (`nom`);

--
-- Index pour la table `tb_tmp_finex_maitre_douvrages`
--
ALTER TABLE `tb_tmp_finex_maitre_douvrages`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UKq77vh13kah48l4j7umb63gr88` (`nom`);

--
-- Index pour la table `tb_tmp_finex_objectifs`
--
ALTER TABLE `tb_tmp_finex_objectifs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKdvsroayscurk4721my8q6q49v` (`projet_id`);

--
-- Index pour la table `tb_tmp_finex_partenaires`
--
ALTER TABLE `tb_tmp_finex_partenaires`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UKql914gblonw00sw9t3htlybu` (`nom`),
  ADD KEY `FKo4b801c789q9y7slbhut6f4vq` (`type_partenaire_id`);

--
-- Index pour la table `tb_tmp_finex_priorites`
--
ALTER TABLE `tb_tmp_finex_priorites`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UKp65hfdiu55768gh5kpsuhjdr` (`libelle`),
  ADD KEY `FKf65qo0j6hcxaasm87j3sny1tu` (`tache_id`);

--
-- Index pour la table `tb_tmp_finex_projets`
--
ALTER TABLE `tb_tmp_finex_projets`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK87ctntcvsfv6t2kf67v80whoy` (`maitre_doeuvre_id`),
  ADD KEY `FKtk8ao6myqxak2s5vniur9dai2` (`maitre_doeuvre_delegue_id`),
  ADD KEY `FK5urxfedk79euefwd1lhmp4is4` (`projet_controlleur_id`),
  ADD KEY `FKak94e9xvdhtoy3c4ve6pgvhao` (`responsable_id`),
  ADD KEY `FKo0gjphi8ym1sv85atksmty7e9` (`secteur_id`),
  ADD KEY `FKtrg00jf76ar15i6gubsuqngni` (`type_marche_id`);

--
-- Index pour la table `tb_tmp_finex_projet_controlleurs`
--
ALTER TABLE `tb_tmp_finex_projet_controlleurs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK4uoqj7bdke6l9jdhc7j8trnkv` (`etape_id`),
  ADD KEY `FK8gh6d4gb8sxd1rdtheemdcyn9` (`projet_id`);

--
-- Index pour la table `tb_tmp_finex_projet_entreprises`
--
ALTER TABLE `tb_tmp_finex_projet_entreprises`
  ADD PRIMARY KEY (`projet_id`,`entreprise_id`),
  ADD KEY `FKhmgx66tijc5c05rlymf0ecwi5` (`entreprise_id`);

--
-- Index pour la table `tb_tmp_finex_projet_maitredouvrages`
--
ALTER TABLE `tb_tmp_finex_projet_maitredouvrages`
  ADD PRIMARY KEY (`projet_id`,`maitredouvrage_id`),
  ADD KEY `FKbdl5daaxes162kpx3s7sc1pf7` (`maitredouvrage_id`);

--
-- Index pour la table `tb_tmp_finex_projet_partenaires`
--
ALTER TABLE `tb_tmp_finex_projet_partenaires`
  ADD PRIMARY KEY (`projet_id`,`partenaire_id`),
  ADD KEY `FKenbq71esv5q4p12p6wn199yk4` (`partenaire_id`);

--
-- Index pour la table `tb_tmp_finex_projet_regions`
--
ALTER TABLE `tb_tmp_finex_projet_regions`
  ADD PRIMARY KEY (`projet_id`,`region_id`),
  ADD KEY `FKs5x47ui9ovxfh9ak2oq0rdpeh` (`region_id`);

--
-- Index pour la table `tb_tmp_finex_regions`
--
ALTER TABLE `tb_tmp_finex_regions`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `tb_tmp_finex_remarques`
--
ALTER TABLE `tb_tmp_finex_remarques`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKgpw6qb8o7qlut8hf3r8654b1l` (`employe_id`),
  ADD KEY `FK7f06vxxmn7gkocx76b15rg3yi` (`tache_id`);

--
-- Index pour la table `tb_tmp_finex_resources`
--
ALTER TABLE `tb_tmp_finex_resources`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK36u707n7thdkhmtvnvpqirkxd` (`libelle`);

--
-- Index pour la table `tb_tmp_finex_roles`
--
ALTER TABLE `tb_tmp_finex_roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UKkooulljk3xpvjfqoyaju7a56s` (`name`);

--
-- Index pour la table `tb_tmp_finex_role_privileges`
--
ALTER TABLE `tb_tmp_finex_role_privileges`
  ADD PRIMARY KEY (`role_id`,`resource_id`),
  ADD KEY `FKqyogaqr5t1u9u0dbwdqi6x2pv` (`resource_id`);

--
-- Index pour la table `tb_tmp_finex_secteurs`
--
ALTER TABLE `tb_tmp_finex_secteurs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UKrn20gw3d0h6ogu45r790omje` (`nom`);

--
-- Index pour la table `tb_tmp_finex_secteurs_projets`
--
ALTER TABLE `tb_tmp_finex_secteurs_projets`
  ADD PRIMARY KEY (`secteur_id`,`projets_id`),
  ADD UNIQUE KEY `UK_d043m3nn783ll0p5hc45drlc3` (`projets_id`);

--
-- Index pour la table `tb_tmp_finex_sous_secteurs`
--
ALTER TABLE `tb_tmp_finex_sous_secteurs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK3112hrlvfd78x015nloijpyy` (`nom`);

--
-- Index pour la table `tb_tmp_finex_taches`
--
ALTER TABLE `tb_tmp_finex_taches`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK8wlm6jiug2is0pc69or2emini` (`etape_id`),
  ADD KEY `FKt9baq0c3q8bud6v2suel7cwm0` (`etat_id`),
  ADD KEY `FK37y4ke9n98tieunbd45n90ecu` (`planificateur_id`),
  ADD KEY `FK2pym199wekui94ol4ulmglvtm` (`projet_id`);

--
-- Index pour la table `tb_tmp_finex_tirages`
--
ALTER TABLE `tb_tmp_finex_tirages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKpao0xfy3rcx1nbqww5dv7r43p` (`maitre_douvrage_id`),
  ADD KEY `FK391by70qnmt2md19nxj68j6aq` (`projet_id`);

--
-- Index pour la table `tb_tmp_finex_type_financement`
--
ALTER TABLE `tb_tmp_finex_type_financement`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UKi26coyl33isieebvbkqladwwc` (`libelle`);

--
-- Index pour la table `tb_tmp_finex_type_marches`
--
ALTER TABLE `tb_tmp_finex_type_marches`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `tb_tmp_finex_type_partenaires`
--
ALTER TABLE `tb_tmp_finex_type_partenaires`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UKbwpwxapqxruojo89g6klqh155` (`libelle`);

--
-- Index pour la table `tb_tmp_finex_users`
--
ALTER TABLE `tb_tmp_finex_users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UKqclwgusni7dhbpbb3jphcemq7` (`username`),
  ADD UNIQUE KEY `UK5qdvm9nga7cg9xaylxhl824i2` (`email`);

--
-- Index pour la table `tb_tmp_finex_user_roles`
--
ALTER TABLE `tb_tmp_finex_user_roles`
  ADD PRIMARY KEY (`user_id`,`role_id`),
  ADD KEY `FK3bun4cn19glff0kuoxrvoex2d` (`role_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `tb_tmp_finex_caracteristique_techniques`
--
ALTER TABLE `tb_tmp_finex_caracteristique_techniques`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `tb_tmp_finex_contreparties`
--
ALTER TABLE `tb_tmp_finex_contreparties`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `tb_tmp_finex_controles`
--
ALTER TABLE `tb_tmp_finex_controles`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `tb_tmp_finex_demande_decaissements`
--
ALTER TABLE `tb_tmp_finex_demande_decaissements`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `tb_tmp_finex_directions`
--
ALTER TABLE `tb_tmp_finex_directions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `tb_tmp_finex_employes`
--
ALTER TABLE `tb_tmp_finex_employes`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `tb_tmp_finex_entreprises`
--
ALTER TABLE `tb_tmp_finex_entreprises`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `tb_tmp_finex_etapes`
--
ALTER TABLE `tb_tmp_finex_etapes`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `tb_tmp_finex_etats`
--
ALTER TABLE `tb_tmp_finex_etats`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `tb_tmp_finex_fichiers`
--
ALTER TABLE `tb_tmp_finex_fichiers`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `tb_tmp_finex_financements`
--
ALTER TABLE `tb_tmp_finex_financements`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `tb_tmp_finex_groupe_travails`
--
ALTER TABLE `tb_tmp_finex_groupe_travails`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `tb_tmp_finex_information_banquaires`
--
ALTER TABLE `tb_tmp_finex_information_banquaires`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `tb_tmp_finex_information_employes`
--
ALTER TABLE `tb_tmp_finex_information_employes`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `tb_tmp_finex_information_partenaires`
--
ALTER TABLE `tb_tmp_finex_information_partenaires`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `tb_tmp_finex_institutions`
--
ALTER TABLE `tb_tmp_finex_institutions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `tb_tmp_finex_maitre_doeuvres`
--
ALTER TABLE `tb_tmp_finex_maitre_doeuvres`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `tb_tmp_finex_maitre_doeuvre_delegues`
--
ALTER TABLE `tb_tmp_finex_maitre_doeuvre_delegues`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `tb_tmp_finex_maitre_douvrages`
--
ALTER TABLE `tb_tmp_finex_maitre_douvrages`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `tb_tmp_finex_objectifs`
--
ALTER TABLE `tb_tmp_finex_objectifs`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `tb_tmp_finex_partenaires`
--
ALTER TABLE `tb_tmp_finex_partenaires`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `tb_tmp_finex_priorites`
--
ALTER TABLE `tb_tmp_finex_priorites`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `tb_tmp_finex_projets`
--
ALTER TABLE `tb_tmp_finex_projets`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `tb_tmp_finex_projet_controlleurs`
--
ALTER TABLE `tb_tmp_finex_projet_controlleurs`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `tb_tmp_finex_regions`
--
ALTER TABLE `tb_tmp_finex_regions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `tb_tmp_finex_remarques`
--
ALTER TABLE `tb_tmp_finex_remarques`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `tb_tmp_finex_resources`
--
ALTER TABLE `tb_tmp_finex_resources`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `tb_tmp_finex_roles`
--
ALTER TABLE `tb_tmp_finex_roles`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `tb_tmp_finex_secteurs`
--
ALTER TABLE `tb_tmp_finex_secteurs`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `tb_tmp_finex_sous_secteurs`
--
ALTER TABLE `tb_tmp_finex_sous_secteurs`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `tb_tmp_finex_taches`
--
ALTER TABLE `tb_tmp_finex_taches`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `tb_tmp_finex_type_financement`
--
ALTER TABLE `tb_tmp_finex_type_financement`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `tb_tmp_finex_type_marches`
--
ALTER TABLE `tb_tmp_finex_type_marches`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `tb_tmp_finex_type_partenaires`
--
ALTER TABLE `tb_tmp_finex_type_partenaires`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `tb_tmp_finex_users`
--
ALTER TABLE `tb_tmp_finex_users`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

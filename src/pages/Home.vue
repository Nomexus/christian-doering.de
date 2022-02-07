<template>
  <h1 class="text-center">Hi, ich bin Christian Döring</h1>
  <h2 class="text-center">Full-Stack Webentwickler</h2>
  <div class="resume-default">
    <h2>Mein Profil</h2>
    <DefaultRow
        date="01/1991 – jetzt">
      <p>
        Leidenschaftlicher Software-Entwickler mit über 13 Jahren Erfahrung in Planung, Leitung, Entwicklung und
        Fertigstellung von großen und kleinen Projekten. Zu meinen bisherigen Erfolgen gehören das Entwickeln und
        Betreiben eines Browsergames, Umsetzung und Release von über 30 Shopware Shops inkl. Entwicklung der Layouts und
        Plugins, sowie das Entwickeln Interner und Externer Verwaltungssysteme auf Phalcon Basis. Ich teile gern mein
        Wissen in der Ausbildung von Auszubildenden, Hilfestellungen bei Problemen und Fragen, sowie Einführung in neue
        Systeme und Technologien.
      </p>
    </DefaultRow>
  </div>
  <div class="resume-default">
    <h2>Berufserfahrung</h2>
    <DefaultRow
        date="04/2013 – 06/2022"
        title="Webentwickler"
        where="service & media online-werbung GmbH, Bad Schwartau">
      <ul>
        <li>
          Planung und Entwicklung von IT-Projekten bis zum Release
          <ul>
            <li>Theme- und Plugin-Entwicklung für Shopware 5 und 6 Systeme</li>
            <li>
              Verwaltungs- / Administrationssysteme auf Basis von Phalcon, MySQL, JavaScript, sowie Symfony und Vue
            </li>
          </ul>
        </li>
        <li>Ausbildung von Auszubildenden</li>
        <li>Analyse und Durchführung von Performance- und SEO-Optimierungen</li>
        <li>
          Einbringung neuer Technologien, Modernisierungen und Workflows, sowie deren Einrichtung und Schulung der
          Kollegen
        </li>
        <li>
          Linux Serveradministration
          <ul>
            <li>interner Entwicklungsserver</li>
            <li>Einrichtung von Gitlab und Git</li>
          </ul>
        </li>
      </ul>
    </DefaultRow>
    <DefaultRow
        date="01/2010 – 08/2016"
        title="Nebenberuflich selbstständig"
        where="Harvest-Time GbR">
      <ul>
        <li>Betrieb des Browsergames „FarmParadies“</li>
        <li>Planung und Entwicklung mit PHP, MySQL und JavaScript</li>
        <li>Layouterstellung und 3D-Modellierung mit Photoshop und Cinema 4D</li>
      </ul>
    </DefaultRow>
  </div>
  <div class="resume-default">
    <h2>Bildungsweg</h2>
    <DefaultRow
        date="05/2009 – 07/2012"
        title="Ausbildung Bürokaufmann"
        where="Hausverwaltung-Petersen, Wyk auf Föhr">
      <ul>
        <li>Buchhaltung und Abrechnung vieler Gemeinschaften</li>
        <li>Einrichtung und Verwaltung interner IT-Systeme</li>
      </ul>
    </DefaultRow>
    <DefaultRow
        date="2008"
        title="Mittlere Reife"
        where="Wyk auf Föhr"/>
  </div>
  <div class="resume-default">
    <h2>Weiteres</h2>
    <DefaultRow
        date="Technologien"
        :date-as-headline="true">
      <p>
        <b>Tiefgehende Kenntnisse</b><br>
        PHP, MySQL, SCSS
      </p>
      <p>
        <b>Sehr gute Kenntnisse</b><br>
        Shopware 5, Phalcon, Git
      </p>
      <p>
        <b>Gute Kenntnisse</b><br>
        Symfony, Vue, Shopware 6, Wordpress, Linux, JavaScript
      </p>
      <p>
        <b>Anfänger</b><br>
        Rust, CI/CD, Docker
      </p>
    </DefaultRow>
    <DefaultRow
        date="Projekte"
        :date-as-headline="true">
      <ul>
        <li>
          FarmParadies 2009 – 2016, Relaunch seit 2021 in Entwicklung
        </li>
        <li>
          Smart-Guest Systeme
        </li>
        <li>
          PathFinder – Hosting, Installation und Erweiterungen 2020 – 2022
        </li>
        <li>
          recipes.book
          Entwicklung seit 2021
        </li>
        <li>
          Kunden & Projektmanagement
        </li>
        <li>
          owtools
        </li>
        <li>
          Monumente-Shop
        </li>
      </ul>
    </DefaultRow>
    <DefaultRow
        date="Sprachen"
        :date-as-headline="true">
      <p>
        Deutsch – Muttersprache<br>
        Englisch – fließend
      </p>
    </DefaultRow>
  </div>
</template>

<script setup lang="ts">
import {useMeta} from "vue-meta";
import {useI18n} from "vue-i18n";
import DefaultRow from "../components/resume/DefaultRow.vue";

const {t} = useI18n()

useMeta({
  title: t("navbar.home"),
})
</script>
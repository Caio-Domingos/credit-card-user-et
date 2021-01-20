<template>
  <div id="Nav">
    <div class="is-relative	is-flex is-justify-content-center is-align-items-center topbar">
      <div class="button-back">
        <router-link to="/" class="button is-primary is-light">
          <font-awesome-icon icon="arrow-left" size="lg" />
        </router-link>
        <!-- <a class="button is-primary is-light">
          <font-awesome-icon icon="arrow-left" size="lg" />
        </a> -->
      </div>
      <div class="tobbar-title">
        <span>{{ title }}</span>
      </div>
    </div>
  </div>
</template>

<script src="./Nav.js"></script>

<style lang="scss" src="./Nav.scss"></style>

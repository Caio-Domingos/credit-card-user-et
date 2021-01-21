<template>
  <div id="Home">
    <h3>Your cards</h3>
    <div class="filter-content">
      <div class="field has-addons">
        <p class="control">
          <a class="button is-static">
            <font-awesome-icon icon="search" size="lg" />
          </a>
        </p>
        <p class="control is-flex-grow-1">
          <input class="input" @keyup="changeFilter" type="text" placeholder="Search a card..." />
        </p>
      </div>
    </div>
    <div class="card-list">
      <!-- <div class="card-content mb-5">
        <Card v-bind:card="null" />
      </div> -->

      <div
        class="card-content mb-5"
        v-for="item in pageCards"
        :key="item.id"
        @click="goTo(item.id)"
      >
        <Card v-bind:card="item" />
      </div>
    </div>
  </div>
</template>

<script src="./Home.js"></script>

<style lang="scss" src="./Home.scss"></style>

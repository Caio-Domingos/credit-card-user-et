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
      <div class="card-content mb-5" v-for="item in pageCards" :key="item.id">
        <Card v-bind:card="item" />
        <div class="option-buttons-content">
          <a class="button is-warning mb-2" @click="goEdit(item.id)">
            <font-awesome-icon icon="edit" size="lg" />
          </a>
          <a class="button is-danger" @click="deleteCard(item.id)">
            <font-awesome-icon icon="times" size="lg" />
          </a>
        </div>
      </div>
      <div class="card-content">
        <Card v-bind:card="null" v-on:new-card="goNew()" />
      </div>
      <jw-pagination
        :items="cards"
        @changePage="changePage"
        :disableDefaultStyles="true"
      ></jw-pagination>
    </div>
  </div>
</template>

<script src="./Home.js"></script>

<style lang="scss" src="./Home.scss"></style>

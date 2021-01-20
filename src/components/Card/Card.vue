<template>
  <div style="flex: 1">
    <div v-if="card" id="Card" :style="{ backgroundColor: brand.backgroundColor }">
      <span v-if="brand.imgBrand" class="card-brand">
        <img :src="`${brandImgs[brand.imgBrand]}`" alt="" />
      </span>
      <div class="card-text">
        <span>Name: {{ card.name }}</span>
        <span> - {{ category.category }}</span>
      </div>
      <div class="card-bottom">
        <span v-if="card.creditCardLimit">Credit Card Limit - {{ card.creditCardLimit }}</span>
        <span v-if="card.feeAmount">Fee Amount - {{ card.feeAmount }}</span>
      </div>
    </div>
    <div
      v-if="!card"
      id="Card"
      class="card-add"
      :style="{ backgroundColor: '#00000040' }"
      @click="$emit('new-card')"
    >
      <font-awesome-icon icon="plus" size="lg" />
    </div>
  </div>
</template>

<script src="./Card.js"></script>

<style lang="scss" src="./Card.scss"></style>

<template>
  <div class="section" id="s-Home">
    <p class="text title">
      Nossa recomendação
    </p>
    <p class="text subtitle">
      Nossa melhor recomendação de cartão para seu perfil é:
    </p>
    <p class="text card-name">
      {{ card.name }}
    </p>
    <template v-if="card.id">
      <div class="credit-card-content">
        <Card :card="card" />
      </div>
    </template>
    <button class="button is-success cta-btn">Solicitar agora!</button>
    <ul class="benefits">
      <li class="item">Anuidade gratis para sempre!</li>
      <li class="item">Cartao Internacional</li>
      <li class="item">Saques nos caixas de banco 24 horas</li>
    </ul>
    <p class="text card-title">Opiniao da editora</p>
    <div class="card">
      <p class="text card-text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione quasi accusantium illo
        accusamus pariatur possimus totam velit beatae dignissimos aperiam quibusdam earum quam
        eligendi nulla eum, repudiandae impedit mollitia quos?
      </p>
    </div>
    <div class="profile-content">
      <img src="../../../assets/Avatar.png" alt="" class="profile-img" />
      <div class="profile-text-content">
        <p class="text name-profile">Luana Pedra</p>
        <p class="text ocupation-profile">Editora Plusdin</p>
      </div>
    </div>
  </div>
</template>

<script>
  import Card from './../../../components/Card/Card.vue';

  export default {
    components: { Card },
    props: {
      card: Object,
    },
  };
</script>

<style lang="scss" scoped>
  @mixin text-style($fSize, $fStyle, $fWeight, $lHeight, $lSpac) {
    //styleName: H5 Mobile;
    font-size: $fSize;
    font-style: $fStyle;
    font-weight: $fWeight;
    line-height: $lHeight;
    letter-spacing: $lSpac;
  }

  #s-Home {
    // Texts
    .title {
      @include text-style(24px, normal, 800, 28px, 0);
    }
    .subtitle {
      margin-top: 17px;
      @include text-style(16px, normal, 400, 22px, 0);
    }

    .card-name {
      margin-top: 20px;
      @include text-style(24px, normal, 600, 28px, 0);
    }

    .title,
    .subtitle,
    .card-name {
      text-align: center;
    }

    .credit-card-content {
      margin: 10px;
    }

    .cta-btn {
      margin-top: 22px;
      width: 90%;
      max-width: 450px;
    }

    .benefits {
      margin-top: 50px;
      list-style: none;
      text-align: left;
      .item {
        @include text-style(16px, normal, 700, 20px, 0);
        margin-top: 10px;
      }

      .item::before {
        content: '•';
        color: #468d73;
        display: inline-block;
        width: 1em;
        margin-left: -1em;
      }
    }

    .card-title {
      @include text-style(24px, normal, 600, 28px, 0);
      margin-top: 70px;
    }

    .card {
      padding: 18px;
    }

    .profile-content {
      margin-top: 20px;
      display: flex;
      align-items: center;
      justify-content: flex-start;

      .profile-text-content {
        margin-left: 17px;

        .name-profile {
          @include text-style(16px, normal, 700, 20px, 0);
        }
        .ocupation-profile {
          @include text-style(14px, normal, 400, 20px, 0);
        }
      }
    }
  }
</style>

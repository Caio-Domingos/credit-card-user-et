<template>
  <div id="s-Benefits">
    <div class="card-benefits">
      <p class="text title">Detalhes do seu cartão</p>
      <div class="list-cards">
        <div class="card" v-for="(item, index) in benefits" :key="index">
          <div class="icon">
            <font-awesome-icon :icon="item.icon"></font-awesome-icon>
          </div>
          <p class="text benefit">{{ item.benefit }}</p>
          <p class="text value">{{ item.value }}</p>
        </div>
      </div>
    </div>
    <div class="points-program">
      <p class="text title">Programa de pontos</p>
      <p class="text subtitle">Cashback Original</p>
      <ul class="list">
        <li class="item">
          Suas compras viram pontos e seus pontos viram dinheiro que serão descontados em suas
          próximas faturas
        </li>
        <li class="item">1 ponto = 1 real</li>
        <li class="item">Mastercard Surpreenda</li>
        <li class="item">A partir de 5 pontos, você pode comprar um produto e levar outro</li>
      </ul>
      <p class="text subtitle">Mais Benefícios</p>
      <ul class="list">
        <li class="item">
          Suas compras viram pontos e seus pontos viram dinheiro que serão descontados em suas
          próximas faturas
        </li>
        <li class="item">1 ponto = 1 real</li>
        <li class="item">Mastercard Surpreenda</li>
        <li class="item">A partir de 5 pontos, você pode comprar um produto e levar outro</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        benefits: [
          {
            icon: 'user',
            benefit: 'Renda mínima necessária',
            value: 'R$0,00',
          },
          {
            icon: 'user',
            benefit: 'Primeira anuidade',
            value: 'Grátis',
          },
          {
            icon: 'user',
            benefit: 'Demais anuidades',
            value: 'Grátis',
          },
          {
            icon: 'user',
            benefit: 'Tipo de cartão',
            value: 'Internacional',
          },
          {
            icon: 'user',
            benefit: 'Juros rotativos',
            value: 'Mastercard',
          },
          {
            icon: 'user',
            benefit: 'Limite de crédito',
            value: 'A consultar',
          },
          {
            icon: 'user',
            benefit: 'Limite de crédito',
            value: 'R$50.000,00',
          },
        ],
      };
    },
  };
</script>

<style lang="scss" scoped>
  #s-Benefits {
    @mixin text-style($fSize, $fStyle, $fWeight, $lHeight, $lSpac) {
      //styleName: H5 Mobile;
      font-size: $fSize;
      font-style: $fStyle;
      font-weight: $fWeight;
      line-height: $lHeight;
      letter-spacing: $lSpac;
    }
    .card-benefits {
      background-color: #404542;
      padding: 16px;

      .title {
        @include text-style(24px, normal, 800, 28px, 0);
        color: white;
        margin-bottom: 24px;
      }
      .benefit {
        @include text-style(16px, normal, 600, 20px, 0);
      }

      .card {
        padding: 8px;
        margin-bottom: 16px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        .icon {
          width: 40px;
          height: 40px;

          display: flex;
          align-items: center;
          justify-content: center;

          background-color: #40454230;
          color: #468d73;
          border-radius: 5px;
          margin-right: 8px;
        }
        .benefit {
          flex-grow: 1;
        }
      }
    }

    .points-program {
      padding: 16px;

      .title {
        @include text-style(16px, normal, 700, 20px, 0);
        color: #468d73;
        margin-bottom: 10px;
      }
      .subtitle {
        @include text-style(24px, normal, 600, 28px, 0);
        margin-bottom: 10px;
      }

      .list {
        margin-top: 16px;
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
    }
  }
</style>

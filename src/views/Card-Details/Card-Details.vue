<template>
  <div id="Card-Details">
    <form id="card-form" @submit="saveCard($event)" method="post">
      <div class="columns">
        <div class="field column is-6">
          <div class="columns">
            <div class="column is-3 is-align-self-center">
              <label class="label mb-0 mr-1">Name<span class="has-text-danger">*</span></label>
            </div>
            <div class="column">
              <div class="control has-icons-left has-icons-right is-flex-grow-1">
                <input
                  class="input"
                  :class="
                    !handleErrors.name.showStatus
                      ? ''
                      : handleErrors.name.valid
                      ? 'is-success'
                      : 'is-danger'
                  "
                  v-model="card.name"
                  @focusout="checkInput('name')"
                  type="text"
                  placeholder="Text input"
                />
                <span class="icon is-small is-left">
                  <font-awesome-icon icon="user" size="lg" />
                </span>
                <span class="icon is-small is-right" v-if="handleErrors.name.showStatus">
                  <font-awesome-icon
                    :icon="
                      !handleErrors.name.showStatus
                        ? ''
                        : handleErrors.name.valid
                        ? 'check'
                        : 'exclamation-circle'
                    "
                    size="lg"
                  />
                </span>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column is-3"></div>
            <div class="column px-0 py-0">
              <p
                class="help"
                :class="
                  !handleErrors.name.showStatus
                    ? ''
                    : handleErrors.name.valid
                    ? 'is-success'
                    : 'is-danger'
                "
                v-if="handleErrors.name.showStatus && handleErrors.name.msg"
              >
                {{ handleErrors.name.msg }}
              </p>
            </div>
          </div>
        </div>
        <div class="field column is-6">
          <div class="columns">
            <div class="column is-3 is-align-self-center">
              <label for="image" class="label mb-0 mr-1"
                >Image<span class="has-text-danger">*</span></label
              >
            </div>
            <div class="column is-9">
              <div
                class="file has-name"
                :class="
                  !handleErrors.image.showStatus
                    ? 'is-info'
                    : handleErrors.image.valid
                    ? 'is-success'
                    : 'is-danger'
                "
              >
                <label class="file-label">
                  <input
                    class="file-input"
                    type="file"
                    name="resume"
                    @change="checkInput('image', 'Image', $event)"
                  />
                  <span class="file-cta">
                    <span class="file-icon">
                      <font-awesome-icon
                        :icon="
                          !handleErrors.image.showStatus
                            ? 'upload'
                            : handleErrors.image.valid
                            ? 'check'
                            : 'exclamation-circle'
                        "
                        size="lg"
                      />
                    </span>
                    <span class="file-label">
                      Your Image
                    </span>
                  </span>
                  <span class="file-name">
                    {{ card.image ? card.image : '-' }}
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="field column">
          <div class="columns">
            <div class="column is-3 is-align-self-center">
              <label for="brand" class="label">Brand<span class="has-text-danger">*</span></label>
            </div>
            <div class="column">
              <div class="control">
                <div
                  class="select"
                  :class="
                    !handleErrors.brand.showStatus
                      ? 'is-info'
                      : handleErrors.brand.valid
                      ? 'is-success'
                      : 'is-danger'
                  "
                >
                  <select
                    class="t-capitalize"
                    v-model="card.brand"
                    @change="checkInput('brand', 'Brand')"
                  >
                    <option :value="null"> - </option>
                    <option v-for="(item, index) in brands" :key="index" :value="item.id">{{
                      item.brand
                    }}</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column is-3"></div>
            <div class="column px-0 py-0">
              <p
                class="help"
                :class="
                  !handleErrors.brand.showStatus
                    ? ''
                    : handleErrors.brand.valid
                    ? 'is-success'
                    : 'is-danger'
                "
                v-if="handleErrors.brand.showStatus && handleErrors.brand.msg"
              >
                {{ handleErrors.brand.msg }}
              </p>
            </div>
          </div>
        </div>
        <div class="field column">
          <div class="columns">
            <div class="column is-3 is-align-self-center">
              <label for="category" class="label"
                >Category<span class="has-text-danger">*</span></label
              >
            </div>
            <div class="column">
              <div class="control">
                <div
                  class="select"
                  :class="
                    !handleErrors.category.showStatus
                      ? 'is-info'
                      : handleErrors.category.valid
                      ? 'is-success'
                      : 'is-danger'
                  "
                >
                  <select
                    class="t-capitalize"
                    v-model="card.category"
                    @change="checkInput('category', 'Category')"
                  >
                    <option :value="null"> - </option>
                    <option v-for="(item, index) in categories" :key="index" :value="item.id">{{
                      item.category
                    }}</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div class="columns">
            <div class="column is-3"></div>
            <div class="column px-0 py-0">
              <p
                class="help"
                :class="
                  !handleErrors.category.showStatus
                    ? ''
                    : handleErrors.category.valid
                    ? 'is-success'
                    : 'is-danger'
                "
                v-if="handleErrors.category.showStatus && handleErrors.category.msg"
              >
                {{ handleErrors.category.msg }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="field column">
          <div class="columns">
            <div class="column is-4 is-align-self-center">
              <label class="label mb-0 mr-1">Credit Card Limit</label>
            </div>
            <div class="column">
              <div class="control has-icons-left is-flex-grow-1">
                <input
                  class="input"
                  :class="card.creditCardLimit ? 'is-success' : 'is-info'"
                  v-model="card.creditCardLimit"
                  type="text"
                  placeholder="Text input"
                />
                <span class="icon is-small is-left">
                  <font-awesome-icon icon="credit-card" size="lg" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="field column">
          <div class="columns">
            <div class="column is-4 is-align-self-center">
              <label class="label mb-0 mr-1">Anual Fee Amount</label>
            </div>
            <div class="column">
              <div class="control has-icons-left is-flex-grow-1">
                <input
                  class="input"
                  :class="card.feeAmount ? 'is-success' : 'is-info'"
                  v-model="card.feeAmount"
                  type="text"
                  placeholder="Text input"
                />
                <span class="icon is-small is-left">
                  <font-awesome-icon icon="dollar-sign" size="lg" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column"><button class="button is-success" type="submit">Save card</button></div>
      </div>
    </form>
  </div>
</template>

<script src="./Card-Details.js"></script>

<style lang="scss" src="./Card-Details.scss"></style>
